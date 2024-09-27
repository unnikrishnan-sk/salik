import React, { useEffect, useState } from 'react'
import { FlatList, Pressable, Text, View } from 'react-native'
import Navbar from '../components/Navbar'
import { backIcon, search, doors, heart, manual, seats, solar } from '../assets/index'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { imageShadowStyles } from '../constants/shade'
import { baseUrl, endpoints } from '../http/configApi'
import { networkApi } from '../http/api'
import { useSelector } from 'react-redux'
import LoadingComponent from '../components/LoadingComponent'
import { colors } from '../constants/color'

const RenderItem = ({ data}) => {

  const [favourite,setFavourite] = useState(false)
    const navigation = useNavigation();

    const {id, vehicle_type, brand_en, model_en, transmission_en, door_count, seating_capacity, fuel_en, amount_per_day} = data

    return(
        <View style={{ paddingHorizontal: WIDTH*0.05 }}>
        <Pressable 
        onPress={()=>navigation.navigate('cardetail',{car_id: id})}
        style={{ backgroundColor: colors.white, height: HEIGHT*0.29,  marginTop: HEIGHT*0.02, borderRadius: HEIGHT*0.02 }}>
        <Image style={{ marginTop:HEIGHT*0.01,borderRadius:HEIGHT*0.02, height: HEIGHT*0.15, width: WIDTH*0.89, ...imageShadowStyles }}
        source={{uri: vehicle_type.image}}/>
        <View style={{ flexDirection: 'row', paddingHorizontal: WIDTH*0.07, marginTop: HEIGHT*0.01, justifyContent: 'space-between' }}>
        <Text style={{ fontSize: HEIGHT*0.024, color: colors.textDark, fontWeight: 700 }}>{brand_en.toUpperCase() +" "+model_en.toUpperCase()}</Text>
        <Pressable onPress={()=>setFavourite(!favourite)}>
        <Image style={{ height: HEIGHT*0.021, width:HEIGHT*0.025 ,tintColor : favourite ? colors.red : colors.lightGray}}
        source={heart}/>
        </Pressable>
        </View>
    
        <View style={{ paddingHorizontal: WIDTH*0.02, flexDirection: 'row', marginLeft: WIDTH*0.05, marginRight: WIDTH*0.05, marginTop: HEIGHT*0.005, justifyContent: 'space-between', borderBlockColor: colors.lightGray, paddingBottom: HEIGHT*0.01, borderBottomWidth: 0.3 }}>
        <View style={{ flexDirection: 'row', marginTop: HEIGHT*0.01, color: colors.white }}>
        <Image style={{ height: HEIGHT*0.02, width: HEIGHT*0.02 }}
        source={manual}/>
        <Text style={{ fontSize: HEIGHT*0.015, fontWeight: 300, marginLeft: WIDTH*0.02 }}>{transmission_en}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: HEIGHT*0.01, color: colors.white }}>
        <Image style={{ height: HEIGHT*0.02, width: HEIGHT*0.02 }}
        source={doors} />
        <Text style={{ fontSize: HEIGHT*0.015, fontWeight: 300, marginLeft: WIDTH*0.02 }}>{door_count} Doors</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: HEIGHT*0.01, color: colors.white }}>
        <Image style={{ height: HEIGHT*0.02, width: HEIGHT*0.02 }}
        source={seats} />
        <Text style={{ fontSize: HEIGHT*0.015, fontWeight: 300, marginLeft: WIDTH*0.02}}>{seating_capacity} Seats</Text>
        </View>
        </View>
        <View style={{ flexDirection: 'row', paddingHorizontal: WIDTH*0.055, justifyContent: 'space-between', paddingTop: HEIGHT*0.01 }}>
        <Text style={{ color: colors.blue, fontWeight: 500, fontSize: HEIGHT*0.022 }}>{amount_per_day}QAR<Text style={{ fontSize: HEIGHT*0.014, fontWeight: 300 }}>/day</Text></Text>
        <View style={{ flexDirection: 'row', marginRight: WIDTH*0.02 }}>
        <Image style={{ height: HEIGHT*0.02, width: HEIGHT*0.02 }}
        source={solar} />
        <Text style={{ fontSize: HEIGHT*0.015, fontWeight: 300, marginLeft: WIDTH*0.02 }}>{fuel_en}</Text>
        </View>
    </View>          
    </Pressable>
    </View>
    )
}

const CarList = ({route}) => {
  
  const [carList, setCarList] = useState();
  const [loading,setLoading] = useState(false);
  const {categoryId} = route.params;
  const calendarData = useSelector((state)=>state?.calendar?.calendarData)

  useEffect(()=>{
    fetchData();
   },[])

   const fetchData = async () => {
    try {
      setLoading(true)
      if(categoryId && calendarData[0]?.pickup_date && calendarData[0]?.pickup_time && calendarData[0]?.return_date && calendarData[0].return_time){
        const url = `${baseUrl}/${endpoints.carlist}?category_id=${categoryId}&pickup_date=${calendarData[0]?.pickup_date}&pickup_time=${calendarData[0]?.pickup_time}&return_date=${calendarData[0]?.return_date}&return_time=${calendarData[0].return_time}`
        const res = await networkApi(url);
        if(res?.data) {
          setCarList(res?.data?.response?.result?.cars)
          }else{
            setCarList([])
          }
        }
      }catch (error) {
        console.log("error_fetchData_carList", error);
      }finally {
        setLoading(false)
      }
    } 
    

  return (
    <>
    <Navbar icon={backIcon} title="CARS" search={search}/>
    <View style={{backgroundColor: colors.backgroundShade}}>
    {loading===true ? <LoadingComponent /> : null}
    <FlatList style={{ paddingBottom: HEIGHT*0.4 }}  showsVerticalScrollIndicator={false} data={carList} renderItem={({item}) => <RenderItem data={item}/>} keyExtractor={item => item.id} />
    </View>
    </>
    
  )
}

export default CarList