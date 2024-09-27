import React, { useCallback, useState } from 'react'
import Navbar from '../components/Navbar'
import { backIcon, closeImage } from '../assets'
import { Image, ImageBackground, Modal, Pressable, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native'
import * as ImagePicker from 'react-native-image-picker'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { paymentMethods, requiredDoc} from '../constants/dummyData'
import ButtonComponent from '../components/ButtonComponent'
import { shadowStyles } from '../constants/shade'
import { useDispatch, useSelector } from 'react-redux'
import { colors } from '../constants/color'
import VehicleDelivery from '../components/VehicleDelivery'
import { addbookingData } from '../redux/slice/bookingSlice'
import LoggedDatas from '../components/LoggedDatas'

const BookingScreen = () => {

    const [response, setResponse] = useState([]);
    const [selected,setSelected] = useState(paymentMethods[0]?.id)
    const [deliveryVisible,setDeliveryVisible] = useState(false)
    const loggedData = useSelector((state)=>state.login.loginData)
    const profileDatas = useSelector((state)=>state.login.profileData) 
    const dispatch = useDispatch();  

     const BookingFn = () => {
        let selectedPayment;
        if(selected === 0){
            selectedPayment = 'Cash Payment'
        }else if(selected === 1){
            selectedPayment = 'Online Payment'
        }
        if(response?.length>1 && selectedPayment){
        const bookingData = {
            "driver_name": profileDatas[0]?.name,
            "email": profileDatas[0]?.email,
            "country_code": loggedData[0]?.code,
            "mobile_number": loggedData[0]?.number,
            "driving_license_image": response[0],
            "qatari_id_image": response[1],
            "payment_type": selectedPayment,
            }
            setDeliveryVisible(true);
            dispatch(addbookingData(bookingData));
        }
    }

    const onButtonPress = useCallback((type,options,index) => {
        const callback = (res) => {
            if(res.didCancel || res.error){
                console.log('user cancelled', res);
            }else{
                setResponse(prev => {
                    const newResponse = [...prev]
                    newResponse[index] = res.assets[0].uri
                    return newResponse
                })
                }
            }
            ImagePicker.launchImageLibrary(options,callback);
    },[])

    const handleImagedelete = (index) => {
        const newResponse = [...response];
        newResponse[index] = ""
        setResponse(newResponse)
    }
    
  return (
    <>  
        <Navbar icon={backIcon} title="BOOKING FORM"/>
        <ScrollView style={{ backgroundColor: colors.backgroundShade, paddingBottom: HEIGHT*0.03 }}>
       <LoggedDatas loggedDatas={loggedData} profileDatas={profileDatas}/>
       <View style={{ backgroundColor: colors.white, marginTop: HEIGHT*0.02, borderRadius:HEIGHT*0.02, paddingHorizontal: WIDTH*0.05 }}>
        <Text style={{ marginTop: HEIGHT*0.03, fontWeight: 600, fontSize: HEIGHT*0.02, color: colors.blue }}>REQUIRED DOCUMENTS</Text>
        <View style={{ paddingTop: HEIGHT*0.01, width: WIDTH*0.9, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
        {requiredDoc.map((item,index)=>(
            <View style={{ width: WIDTH*0.3, height: WIDTH*0.3, padding: HEIGHT*0.015, alignItems: 'center', justifyContent: 'center', borderRadius: HEIGHT*0.02 }}>
               
            <Pressable onPress={()=>onButtonPress('library',ImagePicker.ImageLibraryOptions,index)}>
            {response && response[index] && response[index] !=="" ? (
                <>
                <ImageBackground imageStyle={{borderRadius: HEIGHT*0.02}}
                style={{ borderRadius: HEIGHT*0.02,width: WIDTH*0.21, height: WIDTH*0.21}}
            source={{uri : response[index]}}>
                <Pressable onPress={()=>handleImagedelete(index)}>
                <Image
                 style={{ marginTop: HEIGHT*0.005, marginLeft: WIDTH*0.15}}
                 source={closeImage}/>
                 </Pressable>
            </ImageBackground>
                </>) : (<Image style={{ borderRadius: HEIGHT*0.02 }}
            source={item?.image} />)}
            </Pressable>
            <View style={{ alignItems: 'center', width: WIDTH*0.35, padding: WIDTH*0.015 }}>
            <Text style={{ color: colors.textLight, fontWeight: 600, fontSize: HEIGHT*0.018 }}>{item?.title}</Text>
            </View>
        </View>
        ))}
        </View>
        </View>

        <View style={{ backgroundColor: colors.white, marginTop: HEIGHT*0.02, borderRadius:HEIGHT*0.02, paddingHorizontal: WIDTH*0.05 }}>
        <Text style={{ marginTop: HEIGHT*0.03, fontWeight: 600, fontSize: HEIGHT*0.02, color: '#0091D9' }}>PAYMENT METHOD</Text>
        <View style={{ height: HEIGHT*0.17, marginTop: HEIGHT*0.01, justifyContent: 'space-around', alignItems: 'center'}}>
            {paymentMethods?.map((item)=>(
                <View style={{ borderWidth:0.5, borderColor: selected === item?.id? colors.blue : colors.lightGray, width: WIDTH*0.9, flexDirection: 'row', height: HEIGHT*0.07, borderRadius: HEIGHT*0.035, alignItems: 'center' }}>
                    {selected===item?.id  ? (<Pressable
                    onPress={()=>setSelected(item?.id)} 
                    style={{ borderColor: colors.blue, height: HEIGHT*0.026, width: HEIGHT*0.026, borderRadius: HEIGHT*0.6, marginLeft: WIDTH*0.05, alignItems: 'center', borderWidth: 2, justifyContent: 'center' }}><View style={{ borderWidth:1, borderColor: colors.blue, height: HEIGHT*0.017, width: HEIGHT*0.017, borderRadius: HEIGHT*0.2, backgroundColor: colors.blue }}>
                    </View>
                    </Pressable>): (
                        <Pressable 
                        onPress={()=>setSelected(item?.id)}
                        style={{ borderWidth:1, borderColor: colors.lightGray, height: HEIGHT*0.025, width: HEIGHT*0.025, borderRadius: HEIGHT*0.4, marginLeft: WIDTH*0.05 }}>
                        </Pressable>
                    )}
                    <Image 
                    style={{ height: HEIGHT*0.055, width: HEIGHT*0.05, padding: HEIGHT*0.02, borderRadius: HEIGHT*0.02, marginLeft: WIDTH*0.04 }}
                    source={item?.image} />
                    <Text style={{ width: WIDTH*0.3, padding: WIDTH*0.01, marginLeft: WIDTH*0.04, color: selected===item.id ? colors.blue : colors.textLight }}>{item?.title}</Text>
                </View>
            ))}
        </View>
        </View>
        </ScrollView>
        <View style={{ position:'absolute', bottom: 0, top: HEIGHT*0.85, width: WIDTH, height: HEIGHT*0.15, borderTopLeftRadius: HEIGHT*0.03, borderTopRightRadius: HEIGHT*0.03, backgroundColor: colors.white, justifyContent: 'center', ...shadowStyles }}>
    <ButtonComponent title="CONFIRM" width={WIDTH*0.9} bthgt={HEIGHT*0.07} onPressHandler={()=>BookingFn()}/>
    </View>

      <Modal animationType="slide" transparent={true} visible={deliveryVisible} onRequestClose={() => {setDeliveryVisible(false);
        }}>
            <TouchableWithoutFeedback onPress={()=>setDeliveryVisible(false)}>
            <View style={{ marginTop: HEIGHT*0.45 }}>
            <VehicleDelivery deliveryVisible={deliveryVisible} setDeliveryVisible={setDeliveryVisible} />
            </View>
            </TouchableWithoutFeedback>
        </Modal> 
        </>
  )
}

export default BookingScreen