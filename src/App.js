import { StatusBar, StyleSheet, Text, View, BackHandler,SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './navigations/Tab'
import React,{useEffect,useLayoutEffect,useState} from 'react'
import * as Location from 'expo-location'
import axios from 'axios';
import * as SplashScreen from 'expo-splash-screen';




const Container = styled.View`
flex:1;
text-align: center;
align-items: center;
justify-content: center;
`;

const Title = styled.Text`
text-align: center;
  
`;





function App() {

 
  useLayoutEffect(
    ()=>{
      StatusBar.setBackgroundColor('white');
      StatusBar.setBarStyle('dark-content');
    },[]
  )
  return (
   
    <NavigationContainer style={{backGroundColor:"#ffffff"}}>
    <TabNavigation/>
  </NavigationContainer>

  )
}

export default App

