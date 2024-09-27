import React from 'react'
import Navbar from '../components/Navbar'
import { backIcon, locationMarker, mapBackground, search, selectLocation } from '../assets'
import { Image, ImageBackground, Text, View } from 'react-native'
import ButtonBackground from '../components/ButtonBackground'
import { useNavigation } from '@react-navigation/native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colors } from '../constants/color'
import { useDispatch } from 'react-redux'
import { addlocationData } from '../redux/slice/locationSlice'

const locationData = { location_id: 1, latitude: '25.274020356561856', longitude: '51.534271915283206' }

const SelectLocation = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleOnPress = () => {
        dispatch(addlocationData(locationData))
        navigation.navigate('terms')
    }

  return (
    <>
      <Navbar icon={backIcon} title="SELECT LOCATION" search={search}/>
      <ImageBackground imageStyle={{ height: HEIGHT, width: WIDTH }} style={{ paddingHorizontal: WIDTH*0.05 }}
        source={mapBackground}>
            <View style={{ height: HEIGHT*0.1, marginTop: HEIGHT*0.05, borderRadius: HEIGHT*0.02, backgroundColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Image source={selectLocation}
                style={{ height: HEIGHT*0.04, width: WIDTH*0.06, marginLeft: WIDTH*0.1 }} >
                </Image>
                <View style={{ marginRight: WIDTH*0.1 }}>
                    <Text style={{ fontSize: HEIGHT*0.02, fontWeight: 700, color: colors.textDark }}>Mirqab Mall</Text>
                    <Text style={{ fontSize: HEIGHT*0.02, color: colors.textLight, paddingTop: HEIGHT*0.01 }}>Al Mirqab Al Jadeed St. Doha, Qatar</Text>
                </View>
            </View>
            <Image
            style={{ position:'absolute', height: HEIGHT*0.082, marginTop: HEIGHT*0.6, marginLeft: WIDTH*0.3 }}
            source={locationMarker} />
            <View style={{ position: 'absolute', marginTop: HEIGHT*0.72 }}>
            <ButtonBackground onPressHandler={()=>handleOnPress()} width={WIDTH*0.9} title="NEXT"/>
            </View>  
        </ImageBackground>
    </>
  )
}

export default SelectLocation