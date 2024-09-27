import React from 'react'
import { locationSelectedIcon, mapBranchLocation } from '../assets'
import { Image, Pressable, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'

const BranchLocation = ({cordinateX,cordinateY,addressVisible,setAddressVisible}) => {
  return (
   <Pressable
   onPress={()=>setAddressVisible(true)}
   >
    <Image style={{ position: 'absolute', marginTop: cordinateX, marginLeft: cordinateY }}
            source={addressVisible ? locationSelectedIcon : mapBranchLocation} />
   </Pressable>
  )
}

export default BranchLocation