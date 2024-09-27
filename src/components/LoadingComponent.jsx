import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { colors } from '../constants/color'
import { HEIGHT } from '../constants/dimension'

const LoadingComponent = () => {
  return (
    <View style={{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: HEIGHT*0.1,
        // borderWidth:1,
        height: HEIGHT
    }}>
    <ActivityIndicator size='large' color={colors?.blue} animating={true} />
    </View>
  )
}

export default LoadingComponent