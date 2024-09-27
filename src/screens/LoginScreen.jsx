import React, { useRef, useState } from 'react'
import { Image, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View } from 'react-native'
import { loginBottomImage, loginImage } from '../assets'
import ButtonComponent from '../components/ButtonComponent'
import { HEIGHT, WIDTH } from '../constants/dimension'
import InputComponent from '../components/InputComponent'
import HeaderComponent from '../components/HeaderComponent'
import { useNavigation } from '@react-navigation/native'
import isEmpty from 'lodash/isEmpty'
import { loginDetails } from '../constants/dummyData' 
import { useDispatch } from 'react-redux'
import { addloginData } from '../redux/slice/loginSlice'
import { storeData } from '../constants/loggedInData'

const LoginScreen = () => {

    const [loginData,setLoginData] = useState({})
    const [error,setError] = useState({});
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleChangeForm = (key,value) => {
       loginData[key] = value;
       setLoginData({...loginData})
       setError({})
    }
    const textRef = useRef([]);

    const LoginFn = () => {
        const valid = validateLoginForm();
        if(valid){
            const {code,number} = loginData;
            dispatch(addloginData({"code":code, "number":number}));
            storeData('loggedIn', number)
            navigation.navigate('otp')  
        }else{
            console.log("error",error);
        }
    }

    const validateLoginForm = () => {
        const {code,number} = loginData;
        let error = {};
        if(isEmpty(code)){
            error.code = 'Enter Country Code'
        }
        if(isEmpty(number)){
            error.number = 'Enter Mobile Number'
        }else if(number?.length!==10){
            error.number = 'Enter valid Number'
        }
        setError({...error})
        return isEmpty(error)
    }
    
  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <>
        <HeaderComponent title="LOGIN" desc="we will send you a verification code on this mobile number" image={loginImage}/>

        <View style={{ height: HEIGHT*0.07, width: WIDTH, backgroundColor: '#F3F8FB', marginTop: HEIGHT*0.41, position: 'absolute' }}></View>
        <View style={{ height: HEIGHT*0.07, width: WIDTH, borderBottomLeftRadius: HEIGHT, backgroundColor: '#FFFFFF', marginTop: HEIGHT*0.41, position: 'absolute' }}></View>
        <View style={{ backgroundColor: '#F3F8FB', height: HEIGHT*0.53 }}>
        <View style={{ paddingTop: HEIGHT*0.03, flexDirection: 'row', height: HEIGHT*0.18 }}>
            {loginDetails.map((item)=>(
                <InputComponent key={item.id}  value={loginData?.[item.value]} onChangeText={text => handleChangeForm(item.value,text)} error={error?.[item.value]} placeholder={item.placeholder}  width={item.width} /> ))}
     </View>
     <ButtonComponent onPressHandler={()=>LoginFn()} bthgt={HEIGHT*0.07} width={WIDTH*0.9} title="SEND" />
    
    </View>
        <Image style={{ position: 'absolute', right: 0, bottom:0 }}
        source={loginBottomImage} /> 
    </>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen