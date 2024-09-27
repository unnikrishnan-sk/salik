import React, { useState } from 'react'
import { Image, Text } from 'react-native'
import { View } from 'react-native'
import ButtonComponent from './ButtonComponent'
import { HEIGHT, WIDTH } from '../constants/dimension'
import InputComponent from './InputComponent'
import { useNavigation } from '@react-navigation/native'
import { otpData } from '../constants/dummyData'
import isEmpty from 'lodash/isEmpty'
import { colors } from '../constants/color'

const CautionComponent = ({image,title,desc,btnTitle,link,warnlink}) => {

    const [otp,setOtp] = useState({});
    const [error,setError] = useState({});
    const [visible,setVisible] = useState(false)
    const navigation = useNavigation();

    const handleChangeForm = (key,value) => {
        otp[key] = value;
        setOtp({...otp})
        console.log("data",otp);
        setError({})
     }

     const otpFn = () => {
        const valid = validateOtpForm();
        if(valid){
            const {otp1,otp2,otp3,otp4} = otp;
            navigation.navigate('profile')
            console.log("otp",otp);
        }else{
            setVisible(true)
            console.log("error",error);
        }
       }

       const validateOtpForm = () => {
        console.log("your otp here",otp);
        const {otp1,otp2,otp3,otp4} = otp;
        let error = {};
        if(isEmpty(otp1 && otp2 && otp3 && otp4)){
            error.otp4 = 'Enter Valid OTP'
        }
        setError({...error})
        return isEmpty(error)
    }
    
  return (
    <View style={{ paddingHorizontal: WIDTH*0.05, paddingVertical: HEIGHT*0.2, backgroundColor: 'gray' }}>
        <View style={{ height: HEIGHT*0.6, borderRadius: HEIGHT*0.02, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', paddingHorizontal: WIDTH*0.05, paddingVertical: WIDTH*0.05 }}>
        <Image
        source={image}
        />
        <Text style={{ fontSize: HEIGHT*0.024, fontWeight: 300, color: '#2E2E2E', textAlign:'center', padding: HEIGHT*0.03 }}>{title}</Text>
        <Text style={{ fontSize: HEIGHT*0.018, width: WIDTH*0.6, textAlign: 'center', color: '#8AA8C7' }}>{desc}</Text>

        <View style={{ width: WIDTH*0.6, flexDirection: 'row' }}>
        {Array.isArray(otpData) && otpData.length>0 ?  
        (otpData.map((item)=>(
            <InputComponent key={item.id} name={item.name} value={otpData[item.id]} onChangeText={text => handleChangeForm(item.name,text)} otp='otp' width={item.width} maxLength={1} align={true}/>
        ))) : null}
        </View>

        {visible && <View style={{ width: WIDTH*0.6, height: HEIGHT*0.03}}><Text style={{alignSelf: 'center', color: colors.maroon }}>Enter OTP</Text></View>}

        <View style={{ marginTop: HEIGHT*0.03 }}>
        <ButtonComponent bthgt={HEIGHT*0.075} width={WIDTH*0.6} title={btnTitle} onPressHandler={()=>otpFn()}/>
        </View>
        {link ? (<Text style={{ fontSize: HEIGHT*0.015, color: '#0091D9', marginTop: HEIGHT*0.03 }}>{link}</Text>) : (<Text style={{ fontSize: HEIGHT*0.02, color: '#8AA8C7', marginTop: HEIGHT*0.03 }}>{warnlink}</Text>)}
        </View>  
    </View>
  )
}

export default CautionComponent