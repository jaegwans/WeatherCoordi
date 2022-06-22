import React,{useState,useEffect} from 'react';
import {Button} from 'react-native';
import styled from 'styled-components';
import * as Location from 'expo-location'
import axios from 'axios';
import { Alert } from 'react-native';
import getLocation from '../getLocation'

const Container = styled.View`
flex:1;
align-items: center;
justify-content: center;
background-color: #ffffff;
`;
const StyledText = styled.Text`
font-size: 30px;
margin-bottom: 10px;
`;






  const Main = () =>{


    const [weather, setWeather] = useState({temp:0,condition:""});
    
    

useEffect(() => {
    
    
    async function wth(){
      const weatherValue = await getLocation();
      setWeather(weatherValue);
    }
    wth();
    
   

 
}, []);



 
    return(
        <Container>
            <StyledText>{weather.temp}℃</StyledText>
            <StyledText>{weather.condition}</StyledText>
        </Container>
    )
}



export default Main;