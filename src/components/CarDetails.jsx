import React from 'react'
import { Image, Text, View } from 'react-native'
import { colors } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimension'

const CarDetails = ({carData}) => {
    console.log("carData",carData);
  return (
    <View style={{
        borderTopWidth: 0.5, borderTopColor: colors.lightGray, borderBottomColor: colors.lightGray }}>
      <View style={{ height: HEIGHT*0.1, width: WIDTH*0.45, paddingTop: HEIGHT*0.014 }}>
        <View style={{ 
            borderRightColor: colors.lightGray, 
            width: WIDTH*0.44, flexDirection: 'row' }}>
            <Image 
            source={carData.vehicle_type.image}/>
        <View 
        style={{ 
          }}>
        <Text 
        style={{ 
          fontSize: HEIGHT*0.016, 
          color: colors.textLight, 
          fontWeight: 400 
          }}>{name_en}</Text>
        <Text style={{ 
          marginTop: HEIGHT*0.01 
          }}>{door_count? `${door_count} Doors` : (seating_capacity ? `${seating_capacity} Persons` : (available ? available : (amount_per_day ? `${amount_per_day} QAR` : `${total} QAR`)))}{id===5? (<Text style={{ 
            fontSize: HEIGHT*0.016, 
            color: colors.textLight, 
            fontWeight: 400}}>/day</Text>) : null}</Text>
        </View>
        </View> 
      </View>
      </View> 
  )
}

export default CarDetails