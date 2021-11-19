import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function HomeScreen() {
  return (
    <View/>
  );
}

function SettingsScreen() {
  return (
      <View/>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <TopTabAppBar/>
  );
}


function TopTabAppBar(){
  return(
    <NavigationContainer style={[{height:300}]}>
    <View style={[{flexDirection:'column',height:48,marginLeft:50,marginTop:100}]}>
    <Tab.Navigator
      style={[{width:265,borderRadius:12}]}
      
      screenOptions={{
        tabBarPressColor:'transparent',
        tabBarLabelStyle: {fontFamily:'Inter-SemiBold', lineHeight:18,letterSpacing:0.02,fontSize: 12,textTransform: 'none'},
        tabBarItemStyle: { width: 130 },
        tabBarStyle: { backgroundColor: '#F0F3F6' },
        tabBarIndicatorStyle:{
          backgroundColor: 'white',
          paddingBottom:42,
          margin:3,
          borderRadius:12
        },
      }}
    >
      <Tab.Screen name="Home Delivery" component={HomeScreen} />
      <Tab.Screen name="Store Pcikup" component={SettingsScreen} />
    </Tab.Navigator>
    </View>
  </NavigationContainer>
  )
}