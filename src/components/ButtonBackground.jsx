import React from 'react'
import { Text, View } from 'react-native'
import ButtonComponent from './ButtonComponent'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { shadowStyles } from '../constants/shade' 

const ButtonBackground = ({modalVisible,setModalVisible,title,total,totalAmnt, width, bthgt, onPressHandler}) => {
  return (
    
    <View style={{width: WIDTH,...shadowStyles,height: HEIGHT*0.19,paddingBottom: HEIGHT*0.03,borderTopLeftRadius: HEIGHT*0.03,borderTopRightRadius: HEIGHT*0.03,backgroundColor: '#FFFFFF',justifyContent: 'center'}}>
        <View style={{flexDirection: 'row',paddingHorizontal: WIDTH*0.05,justifyContent: 'space-between',marginBottom: HEIGHT*0.018}}>
            <Text style={{fontSize: HEIGHT*0.02,fontWeight: 600,color:'#2E2E2E',marginLeft:WIDTH*0.02}}>{total}</Text>
            <Text style={{color:'#0091D9',fontWeight: 600,fontSize: HEIGHT*0.02,marginRight: WIDTH*0.025}}>{totalAmnt}</Text>
        </View>
    <ButtonComponent title={title} onPressHandler={onPressHandler} width={width} bthgt={bthgt}/>
    </View>
  )
}

export default ButtonBackground