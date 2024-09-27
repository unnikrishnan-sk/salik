import React from 'react'
import { Image, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { birds, cloud, welcomeLogo } from '../assets/index'
import GetStarted from '../components/GetStarted'
import { colors } from '../constants/color'
import { welcomeData } from '../constants/dummyData'

const WelcomeScreen = () => {
  return (
    <>
    <View style={{ alignItems: 'center', backgroundColor: colors.backgroundShade }}>
        <Text style={{ fontSize: 18, fontWeight:400, color: '#000000', paddingTop: HEIGHT*0.05 }}>Welcome to Salik</Text>
        <View style={{ width: WIDTH, flexDirection:'row', justifyContent: 'space-between' }}>
        <Image style={{ position: 'absolute', top: HEIGHT*0.09, marginLeft: WIDTH*0.1 }}
        source={birds}/>
        <Image style={{ position: 'absolute', top: HEIGHT*0.105, marginLeft: WIDTH*0.08 }}
        source={birds} />
        <Image style={{ position: 'absolute', top: HEIGHT*0.14, marginLeft: WIDTH*0.04 }}
        source={birds} />
        <Image style={{ position: 'absolute', top: HEIGHT*0.1, marginLeft: WIDTH*0.88 }}
        source={birds} />
        <Image style={{ position: 'absolute', top: HEIGHT*0.11, marginLeft: WIDTH*0.8 }}
        source={birds} />
        <Image style={{ marginLeft: WIDTH*0.1 }}
        source={cloud}
        resizeMode='contain' />
        <Image style={{ position: 'absolute', marginLeft: WIDTH*0.92 }}
        source={cloud} />
        </View>
        
        <Image
        source={welcomeLogo} />
    </View>
    <View style={{ borderTopLeftRadius: HEIGHT*0.03, borderTopRightRadius: HEIGHT*0.03, height:HEIGHT*0.04, width: WIDTH, backgroundColor: '#FFFFFF', position: 'absolute', marginTop: HEIGHT*0.43 }}></View>
    <GetStarted data={welcomeData} />
    </>
  )
}

export default WelcomeScreen