import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet ,Text, Platform,View,Card,TouchableWithoutFeedback} from 'react-native';
import { StatusBar as statusBar } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './routes'
export default function App() {
    return (
    <Navigator/>
  )
}
