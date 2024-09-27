import React from 'react'
import Navbar from '../components/Navbar'
import { carousalSliderIcon, closeIcon } from '../assets'
import { Image, View } from 'react-native'
import { HEIGHT } from '../constants/dimension'
import { useNavigation } from '@react-navigation/native'

const ImageScreen = ({route}) => {

    const navigation = useNavigation();
    return (
        <View style={{ backgroundColor:'#000000' }}>
            <Navbar icon={closeIcon} onHandlePress={()=>navigation.navigate('cardetail')} bgColor='#2E2E2E'/>
            <Image style={{height: HEIGHT*0.75}}
            source={{uri: route?.params?.profile}} />
            <View style={{ height: HEIGHT*0.2, justifyContent: 'center', alignItems: 'center' }}>
            <Image 
                source={carousalSliderIcon} />
            </View>
        </View>
    )
}

export default ImageScreen