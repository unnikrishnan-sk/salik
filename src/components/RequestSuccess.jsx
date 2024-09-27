import React from 'react'
import { Image, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { successIcon } from '../assets'
import ButtonComponent from './ButtonComponent'
import { useNavigation } from '@react-navigation/native'
import { shadowStyles } from '../constants/shade'
import { colors } from '../constants/color'

const RequestSuccess = ({modalVisible,setModalVisible}) => {

    const navigation = useNavigation();

    const onCompleteRequest = () => {
        try {
            setModalVisible(false);
            navigation.navigate('calendar')
        } catch (error) {
            throw new error
        }
    }

  return (
   <View style={{ height: HEIGHT*0.44, paddingHorizontal: WIDTH*0.05 }}>
    <View style={{ ...shadowStyles, backgroundColor: '#FFFFFF', height: HEIGHT*0.44,  borderRadius: HEIGHT*0.02, alignItems: 'center', paddingVertical: WIDTH*0.05 }}>
        <Image
        style={{height:HEIGHT*0.09, width: HEIGHT*0.09, marginTop: HEIGHT*0.005}}
        source={successIcon} />
        <View style={{ width: WIDTH*0.4, paddingTop: HEIGHT*0.025 }}>
        <Text style={{ textAlign: 'center', fontSize: HEIGHT*0.024, fontWeight: 400, color: colors.textLight }}>REQUEST CREATED SUCCESSFULLY</Text>
        </View>
        <Text style={{ width:WIDTH*0.6, paddingTop: HEIGHT*0.02, textAlign: 'center', color: '#8AA8C7', fontSize: HEIGHT*0.014 }}>Lorem Ipsum dolor sit amet, consetetur sadipscing elitr, sed dia</Text>
        <View style={{ marginTop: HEIGHT*0.035, width: WIDTH*0.9, paddingTop: HEIGHT*0.03,  alignItems: 'center', justifyContent: 'center' }}>
        <ButtonComponent title="DONE" bthgt={HEIGHT*0.07} width={WIDTH*0.5} onPressHandler={onCompleteRequest}/>
        </View>
    </View>
   </View>
  )
}

export default RequestSuccess