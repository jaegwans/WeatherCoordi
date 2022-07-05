import React, { useState, useEffect } from "react";
import { Button, SafeAreaView } from "react-native";
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
 
  /* background-color: #ffffff; */
`;

const MainContainer = styled.View`
  flex: 0.5;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  
`;

const MidContainer = styled.View`
  

 border-bottom-width: 1px;
 width: 250px;
 align-self: center;
 
  
`;

const SubContainer = styled.View`
  flex: 1;
  
  background-color: #ffffff;
 
  
`;
const StyledText = styled.Text`
  font-size: 18px;

 
`;

const TempText = styled(StyledText)`

  font-weight: 200;
  font-size: 75px;
  padding-left: 10px;
  padding-bottom: 0px;



`;

const Main = () => {
  const [weather, setWeather] = useState({ temp: 0, condition: "" });

  useEffect(() => {
    async function wth() {
      const weatherValue = await getLocation();
      setWeather(weatherValue);
    }
    wth();
  }, []);

  return (
    <Container>
      <MainContainer>
        <TempText>{Math.round(weather.temp)}º</TempText>
        <StyledText>{weather.condition}</StyledText>
      </MainContainer>
        <MidContainer></MidContainer>
      <SubContainer>
        <Coordi style={{flex:1}}weather={weather}></Coordi>
      </SubContainer>

    </Container>
  );
};

export default Main;
