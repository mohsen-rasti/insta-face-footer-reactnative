import React from 'react';
import {Text,View,StatusBar,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from './Header';

import Videoplayer from './Video';
import Axios from './Axios';


const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <View style={{flex:1}}>

<View> <Header/> </View>

<NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="خانه"
               component={Axios}
              options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={40} />
              ),
            }}
          />
          <Tab.Screen
            name="جستجو"
            component={Videoplayer}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="magnify" color={color} size={40} />
              ),
            }}
          />
          <Tab.Screen
            name="غلاقه مندی"
            
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="heart" color={color} size={40} />
              ),
            }}
          />
          <Tab.Screen
            name="گزارشات"
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="calendar-month" color={color} size={40} />
              ),
            }}
          />
          <Tab.Screen
            name="پروفایل"
            
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="face" color={color} size={40} />
              ),
            }}
          />
          </Tab.Navigator>
    </NavigationContainer>
    </View>
  );
}

