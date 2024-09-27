import React, { useRef, useState } from 'react'
import { Image, View } from 'react-native'
import { loginBottomImage, profileImage } from '../assets'
import HeaderComponent from '../components/HeaderComponent'
import { HEIGHT, WIDTH } from '../constants/dimension'
import InputComponent from '../components/InputComponent'
import ButtonComponent from '../components/ButtonComponent'
import { useNavigation } from '@react-navigation/native'
import isEmpty from 'lodash/isEmpty'
import { emailValidate } from '../constants/common'
import { useDispatch } from 'react-redux'
import { addProfileData } from '../redux/slice/loginSlice'
import { profileDetails } from '../constants/dummyData'

const ProfileScreen = () => {

    const [profileData,setProfileData] = useState({})
    const [error,setError] = useState({});
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleChangeForm = (key,value) => {
        profileData[key] = value;
        setProfileData({...profileData})
        setError({})
     }

    const textRef = useRef([]);

    const ProfileFn = () => {
        const valid = validateProfileForm();
        if(valid){
            const {name,email} = profileData;
            dispatch(addProfileData({"name": name, "email":email}))
            navigation.navigate('booking')
        }else{
            console.log("error",error);
        }
    }

    const validateProfileForm = () => {
        const { name,email } = profileData;
        let error = {};
        if(isEmpty(name)){
            error.name = 'Enter Name'
        }
        if(isEmpty(email)){
            error.email = 'Enter Email'
        }else if (!emailValidate(email)){
            error.email = 'Enter Valid Email'
        }
        setError({...error})
        return isEmpty(error)
    }

  return (
    <View>
        <HeaderComponent title="COMPLETE PROFILE" desc="Please fill in the fields to complete your new account" image={profileImage}/>
        <View style={{ height: HEIGHT*0.07, width: WIDTH, backgroundColor: '#F3F8FB', marginTop: HEIGHT*0.41, position: 'absolute' }}></View>
        <View style={{ height: HEIGHT*0.07, width: WIDTH, borderBottomLeftRadius: HEIGHT, backgroundColor: '#FFFFFF', marginTop: HEIGHT*0.41, position: 'absolute' }}></View>

        <View style={{ backgroundColor: '#F3F8FB', height: HEIGHT*0.53 }}>
        <View style={{ height: HEIGHT*0.25 }}>
    {profileDetails.map((item)=>(
        <InputComponent 
        key={item.id} 
        onChangeText={text => handleChangeForm(item.value,text)}
        error={error?.[item.value]}
        topPlaceholder={item.placeholder} value={profileData?.[item.id]} width={item.width} />
     ))} 
     </View>
        <ButtonComponent bthgt={HEIGHT*0.075} title="SAVE" width={WIDTH*0.9} onPressHandler={()=>ProfileFn()}/>
    </View>
        <Image style={{ height: HEIGHT*0.16, width: HEIGHT*0.4, position: 'absolute', right: 0, bottom:0 }}
        source={loginBottomImage} /> 
    </View>
  )
}

export default ProfileScreen