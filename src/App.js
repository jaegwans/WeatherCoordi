import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, BackHandler } from 'react-native';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './navigations/Tab'
import React,{useEffect,useState} from 'react'
import * as Location from 'expo-location'
import axios from 'axios';




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
 

  useEffect(
    ()=>{

    },[]
  )
  return (
    <NavigationContainer>
    <TabNavigation/>
  </NavigationContainer>
  )
}

export default App

