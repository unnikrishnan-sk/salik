import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { bookingBackground } from '../assets/index'
import { bookingShadowStyles } from '../constants/shade'
import moment from 'moment'

const Booking = ({start,end,picktime,droptime}) => {

  return (
    <View style={{ backgroundColor: '#FFFFFF', height: HEIGHT*0.25, paddingHorizontal: WIDTH*0.05 }}>
        <ImageBackground imageStyle={{ height: HEIGHT*0.25, width:WIDTH*0.5, paddingLeft: WIDTH*0.6, marginLeft: WIDTH*0.565, position: 'absolute', marginTop: HEIGHT*0.005 }}
        style={{ marginTop: HEIGHT*0.02 }}
        source={bookingBackground} >
            <View>
            <Text style={{ width: WIDTH*0.7, fontSize: HEIGHT*0.02, fontWeight: 500, color: '#2E2E2E' }}>Please Choose The Date You Want To Book The Car</Text>
            <View style={{ ...bookingShadowStyles, height: HEIGHT*0.135, marginTop: HEIGHT*0.02, borderRadius: HEIGHT*0.02, opacity: 0.93, flexDirection: 'row', backgroundColor: '#FFFFFF', paddingVertical: HEIGHT*0.015 }}>
                <View style={{ width: WIDTH*0.45, padding: HEIGHT*0.005, borderRightWidth: 2, borderColor: '#C8D5E2', paddingHorizontal: WIDTH*0.05 }}>
                    <Text style={{ color:'#C8D5E2', fontSize: HEIGHT*0.02, fontWeight: 500 }}>From</Text>
                        {start ? (<Text style={{ color:'#2E2E2E', fontSize: HEIGHT*0.02, paddingTop: HEIGHT*0.007 }}>{moment(start).format('DD, MMMM YYYY')}</Text>) : (<Text style={{ color:'#2E2E2E', fontSize: HEIGHT*0.023, fontWeight: 600, paddingTop: HEIGHT*0.007 }}>Pick up</Text>)}
                    {picktime ? (<Text style={{ color:'#2E2E2E', fontSize: HEIGHT*0.02,  fontWeight: 400, paddingTop: HEIGHT*0.007 }}>{picktime}</Text>) : (<Text style={{ color:'#2E2E2E', fontSize: HEIGHT*0.02, fontWeight: 400, paddingTop: HEIGHT*0.007 }}>Time</Text>)}
                </View>
                <View style={{ width: WIDTH*0.45, padding: HEIGHT*0.005, paddingHorizontal: WIDTH*0.05 }}>
                    <Text style={{ color:'#C8D5E2', fontSize: HEIGHT*0.02, fontWeight: 500 }}>To</Text>
                    {end ? (<Text style={{ color:'#2E2E2E', fontSize: HEIGHT*0.02, paddingTop: HEIGHT*0.007 }}>{moment(end).format('DD, MMMM YYYY')}</Text>) : (<Text style={{ color:'#2E2E2E', fontSize: HEIGHT*0.023, fontWeight: 600, paddingTop: HEIGHT*0.007 }}>Return</Text>)}
                    {droptime ? (<Text style={{ color:'#2E2E2E', fontSize: HEIGHT*0.02, fontWeight: 400,
                        paddingTop: HEIGHT*0.007
                    }}>{droptime}</Text>): (<Text style={{
                        color:'#2E2E2E',
                        fontSize: HEIGHT*0.02,
                        fontWeight: 400,
                        paddingTop: HEIGHT*0.007
                    }}>Time</Text>)}
                </View>
            </View>
            </View> 
        </ImageBackground>
        <View style={{ backgroundColor: '#FFFFFF', height:HEIGHT*0.04, position: 'absolute', width: WIDTH*0.5, marginTop: HEIGHT*0.25 }}>
        </View>
    </View>
  )
}

export default Booking