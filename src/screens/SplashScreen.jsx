import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import { salikLogo, splashBackground, splashTop } from '../assets/index'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('welcome')
        },2000)
    },[])

  return (
    <View style={{ alignItems:'center', backgroundColor: '#FFFFFF' }}>
        <Image style={{ height: HEIGHT*0.18, marginTop: HEIGHT*0.02 }} source={splashTop} resizeMode='contain'/>
        <Image style={{ marginTop: HEIGHT*0.1 }} source={salikLogo} resizeMode='contain'/> 
        <Text style={{ fontSize: 18, padding: HEIGHT*0.02}}>RENT A CAR</Text>
       <Image style={{ height: HEIGHT*0.48, marginLeft: WIDTH*0.23 }} source={splashBackground} resizeMode='contain'/>
    </View>
  )
}

export default SplashScreen