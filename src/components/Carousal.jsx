import React from 'react'
import { Image, Text, View } from 'react-native'
import { birds, carousalHome, cloud } from '../assets/index'
import { HEIGHT, WIDTH } from '../constants/dimension'

const Carousal = () => {
  return (
    <>
    <View style={{ backgroundColor: '#FFFFFF',borderWidth:1, paddingHorizontal: WIDTH*0.05, height: HEIGHT*0.35, width:WIDTH, borderBottomLeftRadius: HEIGHT*0.06 }}>
        <Text style={{ width: WIDTH*0.55, paddingLeft: WIDTH*0.02, paddingTop: HEIGHT*0.05, fontSize: HEIGHT*0.03, fontWeight: 400, color: '#000000' }}>OWN YOUR DREAM CAR FOR A DAY . . .</Text>
    <Image style={{ position: 'absolute', top: HEIGHT*0.215, marginLeft: WIDTH*0.22 }}
        source={birds} />
        <Image style={{ position: 'absolute', top: HEIGHT*0.23, marginLeft: WIDTH*0.2 }}
        source={birds} />
         <Image style={{ position: 'absolute', top: HEIGHT*0.255, marginLeft: WIDTH*0.16 }}
        source={birds} />

        <Image style={{ position: 'absolute', top: HEIGHT*0.125, marginLeft: WIDTH*0.94 }}
        source={birds} />
        <Image style={{ position: 'absolute', top: HEIGHT*0.115, marginLeft: WIDTH*0.88 }}
        source={birds} />
        <Image style={{ position: 'absolute', top: HEIGHT*0.122, marginLeft: WIDTH*0.85 }}
        source={birds} />
         <Image style={{ position: 'absolute', top: HEIGHT*0.145, marginLeft: WIDTH*0.82 }}
        source={birds} />
        <Image style={{ position: 'absolute', top: HEIGHT*0.16, marginLeft: WIDTH*0.92 }}
        source={cloud} />
        <Image style={{ position: 'absolute', top: HEIGHT*0.183, alignSelf: 'flex-end' }}
        source={carousalHome} />
    </View>
    </>
  )
}

export default Carousal