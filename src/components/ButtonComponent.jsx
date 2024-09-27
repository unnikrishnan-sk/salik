import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { buttonShadowStyles } from '../constants/shade'
import { colors } from '../constants/color'

const ButtonComponent = ({title, bthgt ,fntSize, width, onPressHandler}) => {
  return (
    <View style={{ width: WIDTH, height: HEIGHT*0.065, paddingHorizontal: WIDTH*0.05, justifyContent: 'center', alignItems: 'center' }}>
    <Pressable 
    onPress={onPressHandler}
    style={{ ...buttonShadowStyles, width: width, height: bthgt ? bthgt : HEIGHT*0.065, borderRadius: HEIGHT*0.02, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.buttonBlue }}>
    <Text style={{color: colors.white, fontSize: fntSize ? fntSize : HEIGHT*0.022}}>{title}</Text>
    </Pressable>
    </View>
  )
}

export default ButtonComponent