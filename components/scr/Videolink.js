import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Video } from 'expo-av';
import { Card } from 'react-native-paper';




export default function Videolink() {
  return (
    <View style={styles.container}>
      <Video
  source={{ uri: 'https://aspb22.cdn.asset.aparat.com/aparat-video/3b455656bb6a871ba892353b2122929628214121-1080p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjA0Y2Q1NTI0ZjI5NzUyZTAzNGM2ZmY2NDcxNWZlZGFkIiwiZXhwIjoxNjA4NzUzMDMyLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.vONdypwUyzBPknJvHAs6Gc0tx99V2MZX1jRgUyvY--A' }}
  rate={1.0}
  volume={1.0}
  isMuted={false}
  resizeMode="cover"
  useNativeControls
  style={{ width: 300, height: 150 }}
/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
    alignItems:'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    
    paddingTop:10,
  },

});
