import React from 'react'
import { FlatList, Text, View, Image } from 'react-native'
import { tickIcon } from '../assets/index'
import { HEIGHT, WIDTH } from '../constants/dimension'
import ButtonComponent from './ButtonComponent'
import { useNavigation } from '@react-navigation/native'

const GetStarted = ({data}) => {

    const navigation = useNavigation();

    const RenderItem = ({data}) => {
        const { id,logo,title } = data;
        return(
            <View key={id} style={{ paddingHorizontal: WIDTH*0.08, marginTop: HEIGHT*0.02, flexDirection: 'row' }}>
            {logo ? ( <Image style={{ height: HEIGHT*0.03, width: HEIGHT*0.03 }}
                source={tickIcon}
                resizeMode='contain' />) : null}   
            <Text style={{ fontSize: HEIGHT*0.02, fontWeight: 400, color: '#000000', paddingLeft: WIDTH*0.03 }}>{title}</Text>
            </View>
        )}
    
  return (
    <View style={{ height: HEIGHT*0.55, borderTopRightRadius: HEIGHT*0.03,  borderTopLeftRadius: HEIGHT*0.03, backgroundColor: '#FFFFFF' }}>
    <FlatList
    style={{ paddingVertical: WIDTH*0.05, backgroundColor: '#FFFFFF', paddingBottom: HEIGHT * 0.3 }}
    showsVerticalScrollIndicator={false}
    data={data}
    renderItem={({item}) => <RenderItem data={item}/>}
    keyExtractor={item => item.id} />
    <View style={{ marginBottom: HEIGHT*0.06 }}>
    <ButtonComponent title="GET STARTED" onPressHandler={()=>navigation.navigate('calendar')} width={WIDTH*0.9} bthgt={HEIGHT*0.08}/>
    </View>
    </View>
  )
}

export default GetStarted