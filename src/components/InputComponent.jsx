import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'

const InputComponent = ({unique,placeholder,topPlaceholder,width, otp, onChangeText, value, error, maxLength, align}) => {
  const [focus,setFocus] = useState(false);

  return (
    <>
    <View key={unique} style={{ marginLeft: WIDTH*0.05, height: HEIGHT*0.05, marginTop: HEIGHT*0.03, position: 'relative', display: 'flex', flexDirection: 'column' 
    }}>
      <Text style={{marginBottom: HEIGHT*0.02,position:'absolute', left:0, top: !focus && !value ? 3:1,marginBottom:focus || value ? HEIGHT*0.02: 0, fontSize: !focus && !value ? HEIGHT*0.02:HEIGHT*0.015, color: '#8AA8C7' }}>{topPlaceholder}</Text>
    <TextInput style={{ marginTop: HEIGHT*0.02, height: HEIGHT*0.03, borderBottomWidth: 1, width: width, borderBottomColor: focus ? '#0091D9' : '#C8D5E2', textAlign: align ? 'center' : null }}
    onFocus={()=>setFocus(true)}
    onBlur={()=>setFocus(false)}
    maxLength={maxLength}
     placeholder={placeholder} placeholderTextColor='#C8D5E2'
     onChangeText={onChangeText}
    value={value}/>

    { !otp && error ? (<Text style={{ marginTop: HEIGHT*0.01, color: '#C40055' }}>{error}</Text>) : null}
    </View>
    {otp && error ? (<Text style={{ borderWidth:1, marginTop: HEIGHT*0.02, color: '#C40055', marginRight: WIDTH*0.2 }}>{error}</Text>) : null}
    </>
  )
}

export default InputComponent