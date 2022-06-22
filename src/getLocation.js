import React,{useState,useEffect} from 'react';
import {Button} from 'react-native';
import styled from 'styled-components';
import * as Location from 'expo-location'
import axios from 'axios';
import { Alert } from 'react-native';

//return temp,condition in object

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
  console.log(temp)
  console.log(condition)
  
//   await setWeather({temp,condition}) // useState도 비동기적으로 작동한다 
return ({temp:temp,condition:condition});
  
  
    } catch(e){
      alert("위치를 찾을 수 없습니다."+e)
  
    }
  }

  export default getLocation;