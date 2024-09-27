import React from 'react'
import { Image, Text, View } from 'react-native'
import Navbar from './Navbar'
import { backIcon } from '../assets'
import { HEIGHT, WIDTH } from '../constants/dimension'

const HeaderComponent = ({title,desc,image}) => {
  return (
    <View>
    <Navbar icon={backIcon}/>

<View style={{ paddingHorizontal: WIDTH*0.05, backgroundColor: '#FFFFFF', borderBottomLeftRadius: HEIGHT*0.06, paddingBottom: HEIGHT*0.06 }}>
        <Text style={{ fontSize: HEIGHT*0.04, color: '#3F5265', fontWeight:400, marginTop: HEIGHT*0.02 }}>{title}</Text>
        <Text style={{ fontSize: HEIGHT*0.02, color: '#3F5265', marginTop: HEIGHT*0.02, width: WIDTH*0.8 }}>{desc}</Text>
        <Image style={{ height: HEIGHT*0.12, width: HEIGHT*0.15, alignSelf: 'center', marginTop: HEIGHT*0.05 }}
        source={image} />
        </View>
        </View>
  )
}

export default HeaderComponent