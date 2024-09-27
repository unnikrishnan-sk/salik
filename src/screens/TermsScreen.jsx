import React, { useEffect, useRef, useState } from 'react'
import { View } from 'react-native'
import Navbar from '../components/Navbar'
import { backIcon, search } from '../assets'
import { HEIGHT, WIDTH } from '../constants/dimension'
import ButtonComponent from '../components/ButtonComponent'
import { useNavigation } from '@react-navigation/native'
import { networkApi } from '../http/api'
import { baseUrl, endpoints } from '../http/configApi'
import WebView from 'react-native-webview'
import { shadowStyles } from '../constants/shade'
import LoadingComponent from '../components/LoadingComponent'
import { colors } from '../constants/color'

const TermsScreen = () => {

  const [terms,setTerms] = useState();
  const [loading,setLoading] = useState(false);
  const navigation = useNavigation();
  const webviewRef = useRef();

  useEffect(()=>{
    fetchData();
   },[])   

  const fetchData = async () => {
    try {
      setLoading(true)
      const url = `${baseUrl}/${endpoints.terms}`
      const res = await networkApi(url);
      if(res?.data){
        setTerms(res?.data?.response?.result?.url)
      }else{
        setTerms([])
      }
    } catch (error) {
      console.log("error_fetchData_terms", error);
    }finally{
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar icon={backIcon} title="TERMS & CONDITIONS" search={search}/>   
      <View style={{ height: HEIGHT }}>
        { loading ? <LoadingComponent /> : null}
      <WebView ref={webviewRef} source={{ uri: terms }} style={{flex: 1, backgroundColor: colors.backgroundShade}} />
      </View>
      <View style={{ position:'absolute', 
      bottom: 0, 
      width: WIDTH, height: HEIGHT*0.15, borderTopLeftRadius: HEIGHT*0.03, borderTopRightRadius: HEIGHT*0.03, ...shadowStyles, backgroundColor: '#FFFFFF', justifyContent: 'center'
    }}>
    <ButtonComponent title="I AGREE" width={WIDTH*0.9} bthgt={HEIGHT*0.07} onPressHandler={()=>navigation.navigate('summary')}/>
    </View>   
    </>
  )
}

export default TermsScreen