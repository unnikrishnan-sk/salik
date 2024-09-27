import React, { useRef, useState } from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import {Calendar} from 'react-native-calendars';
import Navbar from '../components/Navbar';
import { backIcon } from '../assets/index';
import Booking from '../components/Booking';
import { HEIGHT, WIDTH } from '../constants/dimension';
import DatePicker from 'react-native-date-picker'
import ButtonComponent from '../components/ButtonComponent';
import { shadowStyles } from '../constants/shade'
import { useNavigation } from '@react-navigation/native';
import { colors } from '../constants/color';
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { addcalendarData } from '../redux/slice/calendarSlice';

const CalendarScreen = () => {

    const [markedDates, setMarkedDates] = useState({});
    const [start,setStart] = useState();
    const [end,setEnd] = useState();
    const [time, setTime] = useState(new Date())
    const [picktime,setPicktime] = useState(null)
    const [droptime, setDroptime] = useState(null)
    const [modalVisible, setModalVisible] = useState(false);
    const startDateRef = useRef();
    const endDateRef = useRef();
    const navigation = useNavigation();
    const dispatch = useDispatch()

    const handleDayPress = (day) => {
      if(!startDateRef.current) {
        startDateRef.current = day.dateString
        let startDate = new Date(startDateRef.current)
        setStart(moment(startDate).format('YYYY-MM-DD'))
        const newMarkedDates = {
          [startDateRef.current]: {startingDay: true, endingDay:true,selected: true,color: colors.maroon,textColor: colors.white,}}
        setMarkedDates(newMarkedDates)
        setModalVisible(true)
      }else{
        endDateRef.current = day.dateString
        setModalVisible(true)
      }

      if(startDateRef.current && endDateRef.current){
        const pickedDate = new Date(day.dateString)
        let startDate = new Date(startDateRef.current)
        let endDate = new Date(endDateRef.current)
        setStart(moment(startDate).format('YYYY-MM-DD'))
        setEnd(moment(endDate).format('YYYY-MM-DD'))

        if(pickedDate.getTime() < startDate.getTime()){
          endDate = new Date(startDateRef.current)
          startDateRef.current = day.dateString
          startDate = new Date(startDateRef.current)
          setStart(moment(startDate).format('YYYY-MM-DD'))
          setEnd(moment(endDate).format('YYYY-MM-DD'))
        }

        const betweenDates = {}
        for(const dt = new Date(startDate);dt<=new Date(endDate);dt.setDate(dt.getDate()+1)){
          betweenDates[dt.toISOString().split('T')[0]]={selected : true,marked : false,color: colors.red,textColor: colors.white,startingDay: false,endingDay: false,}}
   
        Object.keys(betweenDates).forEach((x,i)=>{
          if(i===0){
            betweenDates[x].startingDay = true
            betweenDates[x].color = colors.maroon
            betweenDates[x].textColor = colors.white
          }
          if(i===Object.keys(betweenDates).length-1){
            betweenDates[x].endingDay = true
            betweenDates[x].color = colors.maroon
            betweenDates[x].textColor = colors.white
          }
        })
        setMarkedDates({...betweenDates})
      }
    }

    const onConfirm = () => {
      const getTime = moment(time).format('h:mm A');
      if(picktime === null){
        setPicktime(getTime);
        setModalVisible(false);
      }else{
        setDroptime(getTime);
        setModalVisible(false)
      }
    }
    
    const handleFindCars = () => {
      if(start && end && picktime && droptime){
        dispatch(addcalendarData({"pickup_date":start, "pickup_time": picktime, "return_date": end, "return_time": droptime}))
        navigation.navigate('home');
      }
    }

  return (
    <>
    <Navbar icon={backIcon} title="CHOOSE DATE"/>
    <Booking start={start} end={end} picktime={picktime} droptime={droptime}/>
    <Calendar style={{ ...shadowStyles, borderColor: colors.lightBlue, height: HEIGHT*0.48, borderTopLeftRadius: HEIGHT*0.03, borderTopRightRadius: HEIGHT*0.03}}
    theme={{ backgroundColor: colors.white, calendarBackground: colors.white, selectedDayTextColor: colors.white, selectedDayColor: colors.maroon, todayTextColor: colors.blue, dayTextColor: colors.textDark, textDisabledColor: colors.textDisabledColor, selectedDayBackgroundColor: colors.maroon, selectedDotColor: colors.maroon, arrowColor: colors.black, disabledArrowColor: colors.lightGray, monthTextColor: colors.textDark, indicatorColor: colors.black, textDayFontFamily: 'monospace', textMonthFontFamily: 'monospace', textDayHeaderFontFamily: 'monospace', textDayFontSize: HEIGHT*0.02,textMonthFontSize: HEIGHT*0.024, textDayHeaderFontSize: HEIGHT*0.018 }} firstDay={6} onDayPress={ handleDayPress } markingType='period' markedDates={ markedDates } minDate={moment().format('YYYY-MM-DD')}/>
    <View style={{ height: HEIGHT*0.06, width: WIDTH,backgroundColor: colors.white, position: 'absolute', marginTop: HEIGHT*0.83 }}></View>
    <View style={{ height: HEIGHT*0.17, borderTopLeftRadius: HEIGHT*0.03, borderTopRightRadius: HEIGHT*0.03, backgroundColor: colors.white, justifyContent: 'center', ...shadowStyles}}>
    <ButtonComponent title="FIND CARS" onPressHandler={handleFindCars} width={WIDTH*0.9} bthgt={HEIGHT*0.075}/>
    </View>
    <Modal style={{borderWidth:1}}
    animationType="slide" transparent={true} visible={modalVisible}>
      <View style={{ height: HEIGHT*0.3,borderTopLeftRadius: HEIGHT*0.03,borderTopRightRadius: HEIGHT*0.03,marginTop: HEIGHT*0.7,backgroundColor: colors.white,...shadowStyles}}>
      <View style={{flexDirection: 'row',paddingHorizontal: WIDTH*0.05,paddingVertical: HEIGHT*0.02,justifyContent: 'space-between'}}>
        <TouchableOpacity onPress={()=>setModalVisible(false)}>
          <Text style={{ color: colors.lighblue, fontSize: HEIGHT*0.02}}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onConfirm}>
          <Text style={{  color: colors.blue, fontSize: HEIGHT*0.02 }}>Confirm</Text>
        </TouchableOpacity>
        </View>
        <View style={{ alignItems:'center', justifyContent: 'center', marginBottom: HEIGHT*0.29 }}>
        <DatePicker style={{height:HEIGHT*0.25,marginTop:HEIGHT*0.03, width: WIDTH*0.6}} mode="time" date={time} is24hourSource='locale' popperPlacement="right-start" dividerColor={colors.lightGray} minuteInterval={15} onDateChange={(time)=>setTime(time)} /> 
      </View>
      </View>
    </Modal>
    </>
  )
}

export default CalendarScreen