import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView, View } from 'react-native'
import Navbar from '../components/Navbar'
import Carousal from '../components/Carousal'
import Cards from '../components/Cards'
import { arrow, search } from '../assets/index'
import { networkApi } from '../http/api'
import { baseUrl, endpoints } from '../http/configApi'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { TabView, SceneMap } from 'react-native-tab-view';
import CustomTabBar from '../components/CustomTabBar'
import { colors } from '../constants/color'
import LoadingComponent from '../components/LoadingComponent'

const HomeScreen = () => {

  const [datas,setDatas] = useState();
  const [index, setIndex] = useState(0);
  const [loading,setLoading] = useState(false);
  const [routes] = useState([{ key: 'first', title: 'First' },{ key: 'second', title: 'Second' },{ key: 'third', title: 'First' },{ key: 'fourth', title: 'Second' }]);

  const FirstRoute = () => (
       <Carousal />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: FirstRoute,
    third: FirstRoute,
    fourth: FirstRoute,
  });

  useEffect(()=>{
   fetchData();
  },[])

  const fetchData = async () => {
    try {
      setLoading(true)
      const url = `${baseUrl}/${endpoints?.categories}`
      const res = await networkApi(url);
      if(res?.data){
        setDatas(res?.data?.response?.result?.categories)
      }else{
        setDatas([])
      }
    } catch (error) {
      console.log("error_fetchData_homepage", error);
    } finally {
      setLoading(false)
    }
    
  }

  return (
   
    <View style={{ backgroundColor: '#F3F8FB', flex:1 }}>
        <Navbar icon={arrow} home="home" title="Salik" search={search}/>
        <View style={{flex:2}}>
          <View style={{flex:0.8, height:HEIGHT*0.2,borderBlockColor:'blue' }}>
        <TabView lazy={true} bounces={false} style={{flex:1,width:WIDTH}} tabBarPosition='bottom' navigationState={{ index, routes }} renderScene={renderScene} onIndexChange={setIndex} renderTabBar={(props)=><CustomTabBar {...props} />} lazyPreloadDistance={4} initialLayout={{ width: WIDTH }} />
    </View>
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false} style={{flex:1.2}}>
          {loading===true ? <LoadingComponent /> : null}
        <Cards data={datas} />
        </ScrollView>
        </View>
    </View>
   
  )
}

export default HomeScreen