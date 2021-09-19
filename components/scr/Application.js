import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button } from "react-native";
import Splash from './Splashpage';
var z=0;

const App = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
const fade =()=>{
if (z==0){
    z=1;
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000
    }).start();

} else {
    z=0;
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000
    }).start();
}
}
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim 
          }
        ]}
      >
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>


      <View style={styles.buttonRow}>
        <Button title="Fade Out" onPress={fade}/>
         
         
      </View>
    <Splash />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "powderblue"
  },
  fadingText: {
    fontSize: 28,
    textAlign: "center",
    margin: 10
  },
  buttonRow: {
    flexDirection: "row",
    marginVertical: 16
  }
});

export default App;