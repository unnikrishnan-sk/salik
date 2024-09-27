import React, { useState, useEffect } from 'react'
import { FlatList, Image, ImageBackground, Pressable, ScrollView, StatusBar, Text, View } from 'react-native'
import { detailBackIcon, detailDoor, detailSeat, heart, imageViewIcon, rightArrow } from '../assets'
import { HEIGHT, WIDTH } from '../constants/dimension'
import ButtonComponent from '../components/ButtonComponent'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../constants/color'
import { networkApi } from '../http/api'
import { baseUrl, endpoints } from '../http/configApi'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { addcar } from '../redux/slice/carSlice'
import moment from 'moment'
import { TabView, SceneMap } from 'react-native-tab-view';
import CustomTabBar from '../components/CustomTabBar'
import { getData } from '../constants/loggedInData'
import LoadingComponent from '../components/LoadingComponent'

const RenderItem = ({data,index}) => {
  const { media,name_en} = data;
  return(
   
    <View style={{ borderBottomWidth:  0.5, borderBottomColor: colors.lightGray }}>
    <View style={{ height: HEIGHT*0.1, width: WIDTH*0.45, paddingTop: HEIGHT*0.014 }}>
    <View style={{ marginTop: HEIGHT*0.01, paddingLeft: index%2===1 ? WIDTH*0.1 : 0, borderRightWidth: 0.5, borderRightColor: colors.lightGray, width: WIDTH*0.44, flexDirection: 'row' }}>
    <Image style={{ height: HEIGHT*0.037, width: WIDTH*0.07 }}
    source={{uri : media }}/>
    <View style={{ marginLeft:  WIDTH*0.02 }}>
    <Text style={{ fontSize: HEIGHT*0.016, color: colors.textLight, fontWeight: 400 }}>{name_en}</Text>
    <Text style={{ fontSize: HEIGHT*0.023, color:  colors.black, fontWeight: 350, marginTop: HEIGHT*0.01 }}>Available</Text>
    </View>
    </View> 
    </View>
    </View> 
  )
}

const CarDetailScreen = ({route}) => {

  const [ car, setCar ] = useState();
  const [favourite,setFavourite] = useState(false)
  const [index, setIndex] = useState(0);
  const [routes] = useState([{ key: 'first', title: 'First' }, { key: 'second', title: 'Second' }, { key: 'third', title: 'First' }, { key: 'fourth', title: 'Second' }]);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [islogin,setIslogin] = useState(null);
  const { car_id } = route.params;
  const calendarDetails = useSelector((state)=>state?.calendar?.calendarData)
  const pickupDate = moment(calendarDetails[0]?.pickup_date,'YYYY-MM-DD')
  const returnDate = moment(calendarDetails[0]?.return_date, 'YYYY-MM-DD')
  let numberOfDays  = returnDate.diff(pickupDate, 'days')
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    isLoginFn()
    fetchData()
  },[])

  const isLoginFn = async () => {
    const loginStatus = await getData("loggedIn");
    setIslogin(loginStatus)
  }

  const fetchData = async () => {
    setLoading(true)
    try{
      if(car_id){
      const url = `${baseUrl}/${endpoints?.cardetail}?car_id=${car_id}`
      const res = await networkApi(url);
      if(res?.data){
          setCar(res?.data?.response?.result?.car);
        }else{
          setCar([]);
        }
      }
    }
    catch(error){
      setCar([])
      console.log("error_fetchData",error)
    } 
    finally{
      setLoading(false)
    }  
  }

  const handleOnpressHandler = () => {
    const carData = {
      carId: car_id,
      carImage: car?.vehicle_type?.image,
      car_brand: car?.brand_en ,
      car_model:car?.model_en,
      total_price: car?.amount_per_day*numberOfDays
    }
    dispatch(addcar(carData))
    islogin ? navigation.navigate('booking') :navigation.navigate('login')
  }

  const FirstRoute = () => (
    <ImageBackground imageStyle={{ height: HEIGHT*0.3 }}
    source={{uri: car?.vehicle_type?.image}}
    resizeMode='cover'></ImageBackground>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: FirstRoute,
  third: FirstRoute,
  fourth: FirstRoute,
});

  return (
    <>
      <StatusBar translucent backgroundColor='transparent' barStyle={'light-content'} />
      <View style={{flex:2}}>
      <Navbar icon={detailBackIcon} title="CARS" textColor={colors.white} search={imageViewIcon} bgColor={colors.textLight} onHandlePress={()=>navigation.navigate('imageview',{profile : car?.vehicle_type?.image})}/>
        <View style={{flex:0.52}}>
          { loading===true ? <LoadingComponent /> : null}
      <TabView lazy={true} bounces={false} style={{flex:1,width:WIDTH}} tabBarPosition='bottom' navigationState={{ index, routes }} renderScene={renderScene} onIndexChange={setIndex} renderTabBar={(props)=><CustomTabBar {...props} radius={HEIGHT*0.15} bgColor={colors.white} detail='detail' />} lazyPreloadDistance={4} initialLayout={{ width: WIDTH }} />
  </View>
  <View style={{flex:1}}>
        <View style={{ height: HEIGHT*0.62,  backgroundColor: colors.white, paddingHorizontal: WIDTH*0.06 }}>
        <View style={{ flexDirection:'row', justifyContent: 'space-between',  }}>
        <Text style={{ fontSize: HEIGHT*0.026, fontWeight: 600, color: colors.textDark }}>{car?.brand_en?.toUpperCase() +"  "+ car?.model_en?.toUpperCase()}</Text>
        <Pressable onPress={()=>setFavourite(!favourite)}>
        <Image style={{ height:  HEIGHT*0.024 , width:  HEIGHT*0.028, tintColor : favourite ? colors.red : colors.lightGray}}
        source={ heart}/>
        </Pressable>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: HEIGHT*0.01 }}>
        <Text style={{ color: colors.blue, fontWeight: 500, fontSize: HEIGHT*0.017 }}>Similar Cars</Text>
        <Image style={{ marginLeft: WIDTH*0.02 }}
        source={rightArrow}/>
        </View>
        <Text style={{ fontSize: HEIGHT*0.016, color: colors.textDark, fontWeight: 400, marginTop: HEIGHT*0.01}}>Lorem Ipsum is simply dummy, text of the printing, and type industry. Lorem Ipsum has been the industry's standard el dolore magna </Text>
        <View style={{ height: HEIGHT*0.315, marginTop: HEIGHT*0.02 }}>

        <ScrollView  showsVerticalScrollIndicator={false} style={{paddingBottom: HEIGHT*0.04}}>
          <View style={{ flexDirection: 'row', borderBottomWidth:  0.5,  borderTopWidth: 0.5, borderTopColor: colors.lightGray, borderBottomColor: colors.lightGray }}>
            <View style={{ height: HEIGHT*0.1, width: WIDTH*0.45, paddingTop: HEIGHT*0.014 }}>
            <View style={{ marginTop: HEIGHT*0.01, borderRightWidth:  0.5, borderRightColor: colors.lightGray, width: WIDTH*0.44, flexDirection: 'row' }}>
            <Image source={detailDoor}/>
            <View style={{ marginLeft: WIDTH*0.04 }}>
            <Text style={{ fontSize: HEIGHT*0.016, color: colors.textLight, fontWeight: 400 }}>Doors</Text>
            <Text style={{ fontSize: HEIGHT*0.023, color: colors.black,  fontWeight: 350, marginTop: HEIGHT*0.01 }}>{car?.door_count} Doors</Text>
        </View>
        </View> 
      </View>
      <View style={{ height: HEIGHT*0.1, width: WIDTH*0.45, paddingTop: HEIGHT*0.014 }}>
            <View style={{ marginTop: HEIGHT*0.01, paddingLeft: WIDTH*0.1, width: WIDTH*0.44, flexDirection: 'row' }}>
            <Image source={detailSeat}/>
            <View style={{ marginLeft: WIDTH*0.04 }}>
            <Text style={{ fontSize: HEIGHT*0.016, color: colors.textLight, fontWeight: 400 }}>Seats</Text>
            <Text style={{ fontSize: HEIGHT*0.023, color: colors.black, fontWeight: 350, 
              marginTop: HEIGHT*0.01 }}>{car?.seating_capacity} Persons</Text>
        </View>
        </View> 
      </View>
      </View> 

      <View style={{ flexDirection: 'row', borderBottomWidth: 0.5, borderTopColor: colors.lightGray, borderBottomColor: colors.lightGray }}>
              <FlatList numColumns={2} showsVerticalScrollIndicator={false} data={car?.facilities} renderItem={({item,index}) => <RenderItem data={item} index={index}/>} keyExtractor={item => item.id}/>
      </View> 
      <View style={{flexDirection: 'row', borderBottomColor: colors.lightGray }}>
            <View style={{ height: HEIGHT*0.1, width: WIDTH*0.45, paddingTop: HEIGHT*0.014 }}>
            <View style={{ marginTop: HEIGHT*0.01, borderRightWidth: 0.5, borderRightColor: colors.lightGray, width: WIDTH*0.44, flexDirection: 'row' }}>
            <View style={{ marginLeft: WIDTH*0.04 }}>
            <Text style={{ fontSize: HEIGHT*0.016, color: colors.textLight, fontWeight: 400 }}>Price/Day</Text>
            <Text style={{ fontSize: HEIGHT*0.023, color: colors.black, fontWeight: 350, 
              marginTop: HEIGHT*0.01 }}>{car?.amount_per_day} QAR<Text style={{ fontSize: HEIGHT*0.016, color: colors.textLight, fontWeight: 400}}>/day</Text></Text>
        </View>
        </View> 
      </View>
      <View style={{ height: HEIGHT*0.1, width: WIDTH*0.45, paddingTop: HEIGHT*0.014 }}>
            <View style={{ marginTop: HEIGHT*0.01, paddingLeft: WIDTH*0.1, width: WIDTH*0.44, flexDirection: 'row' }}>
            <View style={{ marginLeft: WIDTH*0.09 }}>
            <Text style={{ fontSize: HEIGHT*0.016, color: colors.textLight, fontWeight: 400 }}>{moment(calendarDetails[0]?.pickup_date).format('DD')}-{moment(calendarDetails[0]?.return_date).format('DD MMMM')}</Text>
           { car?.amount_per_day && <Text style={{ fontSize: HEIGHT*0.023, color: colors.red, fontWeight: 350, marginTop: HEIGHT*0.01 }}>{car?.amount_per_day*numberOfDays} QAR</Text>}
        </View>
        </View> 
      </View>
      </View> 
      </ScrollView>
    </View> 
    <View style={{ alignItems: 'center' }}>
    <ButtonComponent bthgt={HEIGHT*0.075} fntSize={HEIGHT*0.023} title="CHOOSE CAR" onPressHandler={()=>handleOnpressHandler()} width={WIDTH*0.89}/>
    </View>
    </View>   
</View>
</View>
  </>
  )
}

export default CarDetailScreen