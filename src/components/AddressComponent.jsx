import React from 'react'
import { Image, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { locationImage, mapLocationImage } from '../assets'

const AddressComponent = () => {
  return (
    <View style={{flexDirection: 'row',alignSelf:'flex-start',height: HEIGHT*0.1}}>
    <Image
    style={{height: HEIGHT*0.1,width:WIDTH*0.12,marginRight:WIDTH*0.05}}
    source={mapLocationImage}/>
    <View style={{paddingTop: HEIGHT*0.01}}>
    <Text style={{fontSize: 15,fontWeight: 600,color:"#3F5265"}}>AL MIRQAB BRANCH</Text>
    <View style={{width: WIDTH*0.35,paddingTop: HEIGHT*0.01}}>
    <Text style={{fontSize: 10,color: '#8AA8C7',lineHeight: HEIGHT*0.02}}>3rd Floor, Section K Mirqab Mall Al Mirqab Al Jadeed St, Doha, Qatar</Text>
    </View>
    </View>
</View>
  )
}

export default AddressComponent