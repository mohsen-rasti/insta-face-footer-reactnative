import * as React from 'react';
import {ScrollView, Image, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Videolink from './Videolink';


export default function Videoplayer() {
  return (
    <View style={{flex:1}}>
<ScrollView>
<Videolink/>

    </ScrollView>
    </View>
  );
}