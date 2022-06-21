import React,{useState,useEffect} from 'react';
import {Button} from 'react-native';
import styled from 'styled-components';
import * as Location from 'expo-location'
import axios from 'axios';
import { Alert } from 'react-native';

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
    
    const getLocation = async() =>{
 
        // const [weather, setWeather] = useState({temp:0,condition:""});
       
        try{
          //위치권한 가져오기
         const {status} =  await Location.requestForegroundPermissionsAsync();
         if(status!='granted'){
          alert("권한이 필요합니다. 허용해주세요.")
          BackHandler.exitApp();
         }
      
      //현 위치 정보 얻기
      const locationData = await Location.getCurrentPositionAsync();
      const lati = locationData['coords']['latitude']; //위도
      const long = locationData['coords']['longitude']; //경도
      
      
      const API_KEY = '6d8d483888bfaacc8026a5cd44bff2ce';
      const result = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=${API_KEY}&units=metric`
      );
      
      const temp = result.data.main.temp
      const condition = result.data.weather[0].main
      
      await setWeather({temp,condition}) // useState도 비동기적으로 작동한다 
   
      
      
        } catch(e){
          alert("위치를 찾을 수 없습니다."+e)
      
        }
      }

useEffect(() => {
    

    getLocation();
 

}, []);



 
    return(
        <Container>
            <StyledText>{weather.temp}℃</StyledText>
            <StyledText>{weather.condition}</StyledText>
        </Container>
    )
}



export default Main;