import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colors } from '../constants/color'
import { backgroundDrawerImage, proPic } from '../assets'
import { removeData } from '../constants/loggedInData'
import { drawerData } from '../constants/dummyData'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const DrawerScreen = () => {

  const loggedData = useSelector((state)=>state.login.loginData)
  const profileDatas = useSelector((state)=>state.login.profileData) 
  const navigation = useNavigation();

  return (
    <View style={{ height:HEIGHT,backgroundColor: colors.backgroundShade, width: WIDTH*0.75}}>
    <View style={{ backgroundColor: colors.backgroundShade, paddingHorizontal: WIDTH*0.05, paddingVertical: WIDTH*0.05 }}>
        <Image style={{ marginTop: HEIGHT*0.025 }}
        source={proPic} />
      <Text style={{ marginTop: HEIGHT*0.02, fontSize: HEIGHT*0.02, fontWeight: 500,
      }}>{profileDatas[0]?.name || "Guest"}</Text>
      <Text style={{ color: '#8AA8C7', marginTop: HEIGHT*0.01, fontSize: HEIGHT*0.018,
      }}>{loggedData[0]?.code || "Guest"+" "+loggedData[0]?.number || "Number"}</Text>

      {drawerData.map((item)=>(
        <View style={{
          marginTop: item?.title==='Logout' ? HEIGHT*0.1 : HEIGHT*0.034, flexDirection: 'row'}}>
          <Image style={{height: HEIGHT*0.026,width: HEIGHT*0.028}}
          source={item?.icon} />
          <Pressable
          onPress={()=>{
            if(item?.title==='Logout'){
              removeData('loggedIn')
              navigation.navigate('drawer')
              }else if(item?.title==='Favourite'){
                navigation.navigate('favourites')
              }
          }}>
        <Text style={{marginLeft: WIDTH*0.04, color: item?.title==='Home' ? '#0091D9' : '#8AA8C7', fontSize: HEIGHT*0.018}}>{item?.title}</Text>
        </Pressable>
        </View>
      ))}
    </View>
    <Image 
      style={{position:'absolute',bottom:0}}
      source={backgroundDrawerImage}
      />
    </View>
  )
}

export default DrawerScreen