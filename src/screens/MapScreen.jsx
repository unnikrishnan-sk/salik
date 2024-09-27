import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Image, ImageBackground, Modal, View } from 'react-native'
import { backIcon, locationMarker, mapBackground, search } from '../assets'
import { HEIGHT, WIDTH } from '../constants/dimension'
import BranchLocation from '../components/BranchLocation'
import ButtonBackground from '../components/ButtonBackground'
import LocationDetailsComponent from '../components/LocationDetailsComponent'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { addbranchData } from '../redux/slice/branchSlice'

const MapScreen = () => {

    const [addressVisible,setAddressVisible] = useState(false);
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const handleNavigate = () => {
      dispatch(addbranchData(branchDetails))
        navigation.navigate('terms')
    }

    const branchDetails = { branch_id: 1, office_id: 4, latitude: '25.274020356561856', longitude: '51.534271915283206' }

  return (
    <View style={{flex:1}}>
       <Navbar icon={backIcon} title="CHOOSE A BRANCH" search={search}/>
       <ImageBackground imageStyle={{ height: HEIGHT }}
        source={mapBackground}
        style={{flex:1}}>
           <BranchLocation cordinateX={HEIGHT*0.1} cordinateY={WIDTH*0.09}/>
            <BranchLocation cordinateX={HEIGHT*0.01} cordinateY={WIDTH*0.8} />
            <BranchLocation cordinateX={HEIGHT*0.35} cordinateY={WIDTH*0.45} addressVisible={addressVisible} setAddressVisible={setAddressVisible}/>
            <BranchLocation cordinateX={HEIGHT*0.5} cordinateY={WIDTH*0.9}/>
            <BranchLocation cordinateX={HEIGHT*0.5} cordinateY={WIDTH*0.01}/>
            <BranchLocation cordinateX={HEIGHT*0.6} cordinateY={WIDTH*0.6}/>

            <Image style={{ position:'absolute', height: HEIGHT*0.084, marginTop: HEIGHT*0.6, marginLeft: WIDTH*0.3 }}
            source={locationMarker} />

        <Modal animationType="fade" transparent={true} visible={addressVisible} onRequestClose={() => {setAddressVisible(false)}} >
            <View style={{ flex:1, justifyContent: 'center', alignItems: 'center', marginBottom: HEIGHT*0.25 }}>
          <LocationDetailsComponent addressVisible={addressVisible} setAddressVisible={setAddressVisible}/>
            </View>
        </Modal>
        <View style={{ position: 'absolute', bottom: 0 }}>
            <ButtonBackground onPressHandler={handleNavigate} width={WIDTH*0.9} bthgt={HEIGHT*0.07} title="NEXT"/>
            </View> 
        </ImageBackground>
    </View>
  )
}

export default MapScreen