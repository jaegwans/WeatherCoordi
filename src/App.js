import { StatusBar, StyleSheet, Text, View, BackHandler,SafeAreaView,} from 'react-native';
import styled,{ThemeProvider} from 'styled-components/native';
import { NavigationContainer} from '@react-navigation/native';
import TabNavigation from './navigations/Tab'
import React,{useEffect,useLayoutEffect,useState} from 'react'
import * as Location from 'expo-location'
import axios from 'axios';
import * as SplashScreen from 'expo-splash-screen';
import theme from './theme'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';




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
      
      StatusBar.setBarStyle('dark-content');
    },[]
  )
  return (
   <ThemeProvider theme={theme}>
    <NavigationContainer>
    <TabNavigation/>
  </NavigationContainer>
</ThemeProvider>
  )
}

export default App

