import React from 'react'
import { Text, View, Image, Pressable } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { useNavigation } from '@react-navigation/native'

const Navbar = ({textColor, icon, title, search, onHandlePress, bgColor, home}) => {

    const navigation = useNavigation();
    
  return (
    <View style={{ backgroundColor: bgColor ? bgColor : '#FFFFFF', paddingHorizontal: WIDTH*0.05, paddingTop: WIDTH*0.1, paddingBottom: WIDTH*0.03, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Pressable onPress={home ? ()=>navigation.openDrawer():()=>navigation.goBack()}>
        <Image style={{ marginLeft:WIDTH*0.02, height: HEIGHT*0.03, width: HEIGHT*0.03}}
        source={icon}/>
        </Pressable>
        <Text style={{ fontSize: HEIGHT*0.022, color: textColor ? textColor : '#3F5265'}}>{title}</Text>
        <Pressable onPress={onHandlePress}>
        <Image style={{ height: HEIGHT*0.03 }}
        source={search ? search : null}/>
        </Pressable>
    </View>
  )
}

export default Navbar