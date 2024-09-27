import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { HEIGHT, WIDTH } from '../constants/dimension';
import { colors } from '../constants/color';
import { shadowStyles } from '../constants/shade';

const CustomTabBar = ({ navigationState, jumpTo, radius , bgColor, detail}) => {
  return (
    <>
    {detail ? (<View style={{ height: HEIGHT*0.1, position: 'absolute', top: HEIGHT*0.256, width: WIDTH, backgroundColor: '#FFFFFF' }}>
    </View>) : null}
    <View style={{ borderWidth:0.25, borderTopWidth:radius ? 0.05 : 0, borderColor:'#FFFFFF', flexDirection: 'row', justifyContent: 'center', paddingVertical: HEIGHT*0.02,  backgroundColor: bgColor ? bgColor : colors.backgroundShade, width: WIDTH, borderTopLeftRadius: radius, borderTopRightRadius: radius, ...(detail ? shadowStyles : {}) }}>
      {navigationState.routes.map((route, index) => {
        const isActive = navigationState.index === index;
        return (
          <TouchableOpacity key={route.key} onPress={() => jumpTo(route.key)}
            style={{width: HEIGHT*0.008,
                height: HEIGHT*0.008,
                borderRadius: HEIGHT*0.05,
                backgroundColor:isActive? colors.blue: colors.lightGray,
                marginHorizontal: HEIGHT*0.005,
            }}
          />
        );
      })}
    </View>
    </>
  );
};

export default CustomTabBar;