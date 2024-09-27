import React, { useState } from 'react'
import { Image, Modal, Text, View } from 'react-native'
import Navbar from '../components/Navbar'
import { backIcon, cash, filledButton, onlinePay, optionsIcon, sendIcon } from '../assets'
import { HEIGHT, WIDTH } from '../constants/dimension'
import ButtonBackground from '../components/ButtonBackground'
import AddressComponent from '../components/AddressComponent'
import RequestSuccess from '../components/RequestSuccess'
import { useSelector } from 'react-redux'
import { baseUrl, endpoints } from '../http/configApi'
import { networkApi } from '../http/api'
import moment from 'moment'
import LoadingComponent from '../components/LoadingComponent'

const SummaryScreen = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [loading,setLoading] = useState(false)

    const carDetails = useSelector((state)=>state?.car?.car)
    const calendarDetails = useSelector((state)=>state?.calendar?.calendarData)
    const pickupDetails = useSelector((state)=>state?.pickup?.pickupType)
    const branchDetails = useSelector((state)=>state?.branch?.branchData)
    const locationDetails = useSelector((state)=>state?.location?.locationData)
    const bookingDetails = useSelector((state)=>state?.booking?.bookingFormData)

    const bookingData = {
        pickup_type: pickupDetails,
        ...(branchDetails && {branch_id: branchDetails?.branch_id, office_id: branchDetails?.office_id, latitude: branchDetails?.latitude, longitude: branchDetails?.longitude}),
        ...(locationDetails?.location_id && {location_id: locationDetails?.location_id, latitude: locationDetails?.latitude, longitute: locationDetails?.longitude}),
        car_id: carDetails.carId,
        pickup_date: calendarDetails[0]?.pickup_date,
        pickup_time: calendarDetails[0]?.pickup_time,
        return_date: calendarDetails[0]?.return_date,
        return_time: calendarDetails[0]?.return_time,
        driver_name: bookingDetails[0]?.driver_name,
        country_code: bookingDetails[0]?.country_code,
        mobile_number: bookingDetails[0]?.mobile_number,
        driving_license_image: bookingDetails[0]?.driving_license_image,
        qatari_id_image: bookingDetails[0]?.qatari_id_image,
        payment_type: bookingDetails[0]?.payment_type,
        membership_id:2223,
        driving_license_back_image: bookingDetails[0]?.driving_license_image,
        qatari_id_back_image: bookingDetails[0]?.qatari_id_image,
        wallet_payment: 0,
        location_name: 'test location'
    }

    const handleOnPress = async () => {
        try {
            setLoading(true);
        const url = `${baseUrl}/${endpoints.bookings}`
        const res = await networkApi(url, 'POST', bookingData);
        if (res.status === 200) {
            setModalVisible(true);
        } else {
            console.error("Unexpected response status:", res.status);
        }
        } catch (error) {
            console.log(error?.response?.data);
        }  finally{
            setLoading(false)
        }
    }

  return (
    <>
    <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => { setModalVisible(false)}}>
        <View style={{ marginTop: HEIGHT*0.25 }}>
            <RequestSuccess modalVisible={modalVisible} setModalVisible={setModalVisible}/>
            </View>
        </Modal>

    <View style={{ backgroundColor: '#F3F8FB'}}>
        <Navbar icon={backIcon} title="SUMMARY"/>
        { loading ? <LoadingComponent/> : null}
        <View style={{height: HEIGHT*0.28,marginTop: HEIGHT*0.02,borderRadius:HEIGHT*0.02,backgroundColor: '#FFFFFF'}}>
        <View style={{alignItems: 'center',paddingTop: HEIGHT*0.01}}>
        <Image style={{width: WIDTH*0.25,height: WIDTH*0.18,borderRadius: HEIGHT*0.02}}
            source={{uri: carDetails?.carImage}}/>
        <Text style={{color: '#3F5265',fontWeight: 600, fontSize: HEIGHT*0.02}}>{carDetails?.car_brand.toUpperCase() +" "+ carDetails?.car_model.toUpperCase()}</Text>
        </View>
        <View style={{ paddingHorizontal: WIDTH*0.05, flexDirection: 'row', marginTop: HEIGHT*0.02,}}>
                <View style={{ width: WIDTH*0.45, height:HEIGHT*0.1, borderRightWidth:  0.5, borderColor: '#C8D5E2' }}>
                <Text style={{color:'#0091D9', lineHeight: HEIGHT*0.04, fontWeight: 400, fontSize: HEIGHT*0.021 }}>PICK-UP</Text>
                <Text style={{ fontSize: HEIGHT*0.018, fontWeight: 400, lineHeight: HEIGHT*0.04, color: '#2E2E2E' }}>{moment(calendarDetails[0]?.pickup_date).format('DD, MMMM YYYY')}</Text>
                <Text style={{ fontSize: HEIGHT*0.016, fontWeight: 400, color:'#2E2E2E' }}>{calendarDetails[0]?.pickup_time}</Text>
                </View>
                <View style={{ width: WIDTH*0.45, height:HEIGHT*0.1, borderRightWidth:  0.5 , marginLeft: WIDTH*0.2, borderColor: '#C8D5E2' }}>
                <Text style={{color:'#0091D9', lineHeight: HEIGHT*0.04, fontWeight: 400, fontSize: HEIGHT*0.021 }}>DROP-OFF</Text>
                <Text style={{ fontSize: HEIGHT*0.018, fontWeight: 400, lineHeight: HEIGHT*0.04, color: '#2E2E2E' }}>{moment(calendarDetails[0]?.return_date).format('DD, MMMM YYYY')}</Text>
                <Text style={{ fontSize: HEIGHT*0.016, fontWeight: 400, color:'#2E2E2E' }}>{calendarDetails[0]?.return_time}</Text>
                </View>
        </View>
        </View>
            <View style={{marginTop: HEIGHT*0.02,height: HEIGHT*0.2,borderRadius: HEIGHT*0.03,backgroundColor: '#FFFFFF',paddingHorizontal: WIDTH*0.05,paddingVertical: WIDTH*0.03}}>
                <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                    <Text style={{fontSize: HEIGHT*0.02,fontWeight: 600,color: '#0091D9'}}>PICK-UP LOCATION</Text>
                    <Image source={sendIcon}/>
                </View>
               <AddressComponent />
            </View>

            <View style={{backgroundColor: '#FFFFFF',marginTop: HEIGHT*0.02,borderRadius:HEIGHT*0.03,paddingHorizontal: WIDTH*0.05}}>
            <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingTop: HEIGHT*0.03}}>
            <Text style={{fontWeight: 600,fontSize: HEIGHT*0.02,color: '#0091D9'}}>PAYMENT METHOD</Text>
        <Image source={optionsIcon}/>
        </View>
        
        <View style={{ height: HEIGHT*0.1,justifyContent: 'space-around',alignItems: 'center'}}>
            { bookingDetails[0]?.payment_type==='Online Payment' ? (<View style={{borderWidth:1,borderColor: '#0091D9',width: WIDTH*0.9,flexDirection: 'row',height: HEIGHT*0.07,borderRadius: HEIGHT*0.035,alignItems: 'center',marginTop: HEIGHT*0.005}}>
                    <Image style={{height: HEIGHT*0.025,width: HEIGHT*0.025,marginLeft: WIDTH*0.06}}
                    source={filledButton}/>
                    <Image style={{height: HEIGHT*0.05,width: HEIGHT*0.055,padding: HEIGHT*0.02,marginLeft: WIDTH*0.06}}
                    source={onlinePay}/>
                    <Text style={{width: WIDTH*0.3,padding: WIDTH*0.01,marginLeft: WIDTH*0.05,fontWeight: 300,color: '#0091D9'}}>Online Payment</Text>
                </View>) : (<View style={{borderWidth:1,borderColor: '#0091D9',width: WIDTH*0.9,flexDirection: 'row',height: HEIGHT*0.07,borderRadius: HEIGHT*0.035,alignItems: 'center', marginTop:HEIGHT*0.005}}>
                    <Image style={{height: HEIGHT*0.025,width: HEIGHT*0.025,marginLeft: WIDTH*0.06}}
                    source={filledButton}/>
                    <Image style={{height: HEIGHT*0.05,width: HEIGHT*0.055,padding: HEIGHT*0.02,marginLeft: WIDTH*0.06}}
                    source={cash}/>
                    <Text style={{width: WIDTH*0.3,padding: WIDTH*0.01,marginLeft: WIDTH*0.05,fontWeight: 300,color: '#0091D9'}}>Cash Payment</Text>
                </View>)}
                </View>
                </View>
                <ButtonBackground title="BOOK NOW" total="TOTAL" totalAmnt={`${carDetails?.total_price} QAR`} width={WIDTH*0.9} bthgt={HEIGHT*0.07} onPressHandler={()=>handleOnPress()} />
    </View>
    </>
  )
}

export default SummaryScreen