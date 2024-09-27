import React, { useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { vehicleReceive } from '../constants/dummyData'
import ButtonComponent from './ButtonComponent'
import { shadowStyles } from '../constants/shade'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { addpickuptype } from '../redux/slice/PickupSlice'

const VehicleDelivery = ({deliveryVisible, setDeliveryVisible}) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const onHandleDelivery = (id) => {
        try {if(id){
            setDeliveryVisible(false)
            if(id===0){
                dispatch(addpickuptype('branch-pickup'))
                navigation.navigate('map');
            }else if(id===1){
                dispatch(addpickuptype('home-pickup'))
                navigation.navigate('selectlocation')
            }
        }   
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <View style={{ height :HEIGHT*0.55, borderTopRightRadius: HEIGHT*0.03, borderTopLeftRadius: HEIGHT*0.03, paddingHorizontal: WIDTH*0.07, paddingVertical: WIDTH*0.05, alignItems: 'center', ...shadowStyles, backgroundColor: '#FFFFFF' }}>
        <View style={{ width: WIDTH*0.6, marginTop: HEIGHT*0.015, alignItems: 'center' }}>
        <Text style={{ textAlign:'center', color:'#3F5265' }}>Please choose how you want to receive the vehicle</Text>

        {vehicleReceive.map((item)=>(
            <Pressable 
            onPress={()=>onHandleDelivery(item.id)} key={item.id} style={{ borderWidth: 1, borderColor: '#C8D5E2', width:WIDTH*0.9, backgroundColor: '#FFFFFF', height: HEIGHT*0.11, marginTop: HEIGHT*0.04, flexDirection: 'row', alignItems: 'center', borderRadius: HEIGHT*0.02 }}>
                <Image style={{ marginLeft: WIDTH*0.03 }}
                source={item.image} />
                <Text style={{ marginLeft: WIDTH*0.04, color: '#3F5265' }}>{item.title}</Text>
            </Pressable>
        ))}
        </View> 
        <View style={{ marginTop: HEIGHT*0.05 }}>
        <ButtonComponent title="NEXT" bthgt={HEIGHT*0.08} width={WIDTH*0.9} onPressHandler={()=>onHandleDelivery()}/>
        </View>  
    </View>
  )
}

export default VehicleDelivery