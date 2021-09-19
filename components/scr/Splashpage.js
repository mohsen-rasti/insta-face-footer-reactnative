import * as React from 'react';
import {Text,View,ActivityIndicator} from 'react-native';

export default function Splash (){
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text style={{fontSize:15,marginBottom:15}}>Splash Screen</Text>
    <ActivityIndicator 
    
    size={'large'}
    />
    </View>
  )
}