import React from 'react'
import { FlatList, Image, ImageBackground, Pressable, Text, View } from 'react-native'
import { economyCar, homeBackground1, suvCar } from '../assets/index'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { useNavigation } from '@react-navigation/native'

const Cards = ({data}) => {

    const navigation = useNavigation();

    const RenderItem = ({data}) => {
        const {id,name_en,media} = data;
        return (
            <Pressable 
                onPress={()=>navigation.navigate('carlist',{categoryId:id})}
                style={{ backgroundColor:'#F3F8FB', alignItems: 'center'}}>

             <ImageBackground style={{ flexDirection: 'row-reverse', marginLeft: WIDTH*0.04,  justifyContent: 'center', height: HEIGHT*0.25, width: WIDTH*1.1, transform: id%2===1 ? [{scaleX: -1}] : [], marginRight: id%2===1 ? WIDTH*0.08 : 0 }}
             source={homeBackground1}>
                {id%2===1 ? (<View style={{ width: WIDTH*0.9, flexDirection: 'row-reverse', justifyContent: 'space-between' }}>
                    <Image style={{ height: HEIGHT*0.18, marginTop: HEIGHT*0.025, transform: [{scaleX: -1}] }}
                 source={ media ? media : economyCar} />
                    <Text style={{ fontSize: HEIGHT*0.022, fontWeight: 400, marginLeft: WIDTH*0.5, paddingLeft: WIDTH*0.15, paddingTop:HEIGHT*0.03, transform: [{scaleX: -1}], color: '#000000' }}>{name_en.toUpperCase()}</Text>
                </View>) : (<View style={{ width: WIDTH*0.9, flexDirection: 'row-reverse', justifyContent: 'space-between' }}>
                    <Image style={{ height: HEIGHT*0.18, marginTop: HEIGHT*0.025,  borderBottomRightRadius: HEIGHT*0.02 }}
                 source={ media ? media : suvCar} />
                    <Text style={{ fontSize: 16, fontWeight: 400, marginLeft: WIDTH*0.4, paddingRight: WIDTH*0.15, paddingTop:HEIGHT*0.03, color: '#000000' }}>{name_en?.toUpperCase()}</Text>
                </View>)}
             </ImageBackground> 
            </Pressable>
           )
        }

    return(
        <FlatList
        style={{ backgroundColor: '#F3F8FB'}}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => <RenderItem data={item}/>}
        keyExtractor={item => item.id} />
    )
 
}

export default Cards