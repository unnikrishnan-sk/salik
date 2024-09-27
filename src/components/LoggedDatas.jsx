import React from 'react'
import { Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colors } from '../constants/color'

const LoggedDatas = ({loggedDatas, profileDatas}) => {
  return (
    <View style={{ backgroundColor: '#FFFFFF', marginTop: HEIGHT*0.02, borderRadius: HEIGHT*.02, paddingVertical: WIDTH*0.05, paddingHorizontal: WIDTH*0.05 }}>
    <Text style={{ fontWeight: 600, fontSize: HEIGHT*0.02, color: '#0091D9' }}>DRIVER DETAILS</Text>
    <View style={{ height: HEIGHT*0.14 }}>
    <View style={{ marginLeft: WIDTH*0.05, borderBottomWidth: 1, height: HEIGHT*0.04, width: WIDTH*0.85, marginTop: HEIGHT*0.03, marginBottom: HEIGHT*0.03, borderColor: colors.lightGray }}>
    <Text style={{ fontSize :HEIGHT*0.02, fontWeight: 400 }}>{profileDatas[0]?.name}</Text>
    </View>
    <View style={{ flexDirection: 'row', height: HEIGHT*0.16 }}>
{loggedDatas.map((item)=>(
    <>
    <View style={{ marginLeft: WIDTH*0.05, borderBottomWidth: 1, height: HEIGHT*0.04, width: WIDTH*0.12, borderColor: colors.lightGray }}>
    <Text style={{ fontSize :HEIGHT*0.02, fontWeight: 400 }}>{item?.code}</Text>
    </View>
    <View style={{ marginLeft: WIDTH*0.05, borderBottomWidth: 1, height: HEIGHT*0.04, width: WIDTH*0.68, borderColor: colors.lightGray }}>
    <Text>{item?.number}</Text>
    </View>
    </>
 ))} 
 </View>
   </View>
    </View>
  )
}

export default LoggedDatas