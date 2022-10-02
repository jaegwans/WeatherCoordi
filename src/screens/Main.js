import React, { useState, useEffect,useLayoutEffect } from "react";
import { Button, SafeAreaView ,TouchableOpacity } from "react-native";
import styled from "styled-components";
import * as Location from "expo-location";
import axios from "axios";
import { Alert } from "react-native";
import getLocation from "../getLocation";
import Coordi from "../components/Coordi";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  margin-bottom:40px;
 
  /* background-color: #ffffff; */
`;

const MainContainer = styled.View`
  flex: 0.5;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  margin-top: 15px;
  
`;

const MidContainer = styled.View`
 border-bottom-width: 1px;
 border-color: ${({theme}) => theme.main};
 width: 250px;
 align-self: center;
 `;

const SubContainer = styled.View`
  flex: 1;
  
  background-color: #ffffff;
 
  align-self: center;
`;
const StyledText = styled.Text`
  font-size: 18px;

 
`;

const MusicText = styled.Text`
font-size: 15px;
margin-top:10px;
margin-bottom:5px;
  
`;
const MusicContainer = styled.TouchableOpacity`
  
`;

const TempText = styled(StyledText)`

  font-weight: 200;
  font-size: 75px;
  padding-left: 10px;
  padding-bottom: 0px;



`;

const Main = () => {
  const [weather, setWeather] = useState({ temp: 0, condition: "" ,name:"",max:0,min:0});

  useLayoutEffect(() => {
    async function wth() {
      const weatherValue = await getLocation();
      setWeather(weatherValue);
    }
    wth();
  }, []);

  return (
    <Container>
      
      <MainContainer>
        <StyledText style={{fontSize:25,fontWeight:'200'}}>{weather.name}</StyledText>
        <TempText>{Math.round(weather.temp)}º</TempText>
        <StyledText>{weather.condition}</StyledText>
        <StyledText style={{marginTop:10}}>최고:{weather.max}º 최저:{weather.min}º</StyledText>{/*최대 최저*/}
      </MainContainer>

        <MidContainer></MidContainer>
        <MusicText>현재 날씨에 맞는 음악 들으러 가기</MusicText>
      <SubContainer>
        <Coordi style={{flex:1}}weather={weather}></Coordi>
      </SubContainer>

    </Container>
  );
};

export default Main;
