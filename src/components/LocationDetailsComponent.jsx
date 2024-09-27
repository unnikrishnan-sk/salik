import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { clockIcon, distanceIcon, locationCloseIcon, mapLocationImage } from '../assets'

const LocationDetailsComponent = ({addressVisible,setAddressVisible}) => {
  return (
    <View style={{ height: HEIGHT*0.25 }}>
          <Image style={{position: 'absolute', height:HEIGHT*0.12, borderRadius:HEIGHT*0.02, zIndex: 1, top: 0, paddingBottom: HEIGHT*0.03 }}
            source={mapLocationImage} /> 
    <View style={{ height: HEIGHT*0.2, marginTop: HEIGHT*0.03, width: WIDTH*0.7, paddingHorizontal: WIDTH*0.05, borderRadius: HEIGHT*0.02, backgroundColor: '#FFFFFF', overflow: 'hidden' }}>
        <View style={{ height: HEIGHT*0.08, flexDirection: 'row' }}>
            <View style={{ marginLeft: WIDTH*0.22 }}>
             <View style={{ flexDirection: 'row', marginTop: HEIGHT*0.015 }}>
                <Image 
                source={distanceIcon} />
                <Text style={{ marginLeft: WIDTH*0.03, fontSize: 11, fontWeight: 600 }}>3.5km</Text>
            </View> 
            <View style={{ flexDirection: 'row', marginTop: HEIGHT*0.01 }}>
                <Image 
                source={clockIcon} />
                <Text style={{ marginLeft: WIDTH*0.03, fontSize: 11, color: '#8AA8C7' }}>8:00 am - 12:00 am</Text>
            </View>
            </View>
            <Pressable
            onPress={()=>setAddressVisible(false)}>
            <Image style={{ margin: HEIGHT*0.01 }}
            source={locationCloseIcon}/> 
            </Pressable>
        </View>
        <View>
            <Text style={{ fontSize: 16, fontWeight: 600, lineHeight: HEIGHT*0.045, color:'#3F5265' }}>AL MIRQAB BRANCH</Text>
            <View style={{ width: WIDTH*0.35 }}>
                <Text style={{ color:'#8AA8C7', fontSize: 10 }}>3rd Floor, Section K Mirqab Mall Al Mirqab Al Jadeed St, Doha, Qatar</Text>
            </View>
        </View>
    </View>
    </View>
  )
}

export default LocationDetailsComponent