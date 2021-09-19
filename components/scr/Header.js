import React from 'react';
import {View,Text,StyleSheet,ImageBackground,Button,TouchableOpacity} from 'react-native';



const ImBack = ({Duri}) => {
    return (
     <View>
     <ImageBackground style={{overflow:'hidden',
  height:60,
  width:60,
  borderRadius: 30,
  
 }}

//source={{uri:Duri}} 
source={ require('../../assets/p.jpg')} 
/>

</View>  
 );
  };

export default function Header(){
  return(
    

    <View style={{height:80,width:'90%', alignSelf:'center',alignItems:'center',flexDirection:'row'}}>

<View style={{flex:1}}>
<View style={{height:60,width:'100%',backgroundColor:'white'}}>
<View style={{flexDirection:"row",justifyContent: 'space-between',paddingLeft:10,paddingRight:10}}>
<View style={{alignItems:'center'}}><Text>12K</Text><Text>Falowing</Text></View>

<View style={{alignItems:'center'}}><Text>3,652</Text><Text>Falower</Text></View>

<View style={{alignItems:'center'}}><Text> 123</Text><Text>Post</Text></View>

</View>
 <TouchableOpacity style={{backgroundColor:'white',borderWidth:.5, height:25,width:'80%',alignSelf:'center',borderRadius:12.5,marginTop:3,alignItems:'center',alignContent:'center'}}> 
 <Text>Edit Profile</Text>
 </TouchableOpacity>

</View>
</View>

        <View style={{marginLeft:'10%'}}>
          <ImBack/>    
     
        </View>





</View>

  );
}

const styles = StyleSheet.create({
  

});