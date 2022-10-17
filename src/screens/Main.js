import React, { useState, useEffect, useLayoutEffect } from "react"
import { Button, SafeAreaView, TouchableOpacity } from "react-native"
import styled from "styled-components"
import * as Location from "expo-location"
import axios from "axios"
import { Alert } from "react-native"
import getLocation from "../getLocation"
import Coordi from "../components/Coordi"
import { ScrollView } from "react-native-gesture-handler"
import * as Animatable from "react-native-animatable"

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #ffffff;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;

    /* background-color: #ffffff; */
`

const MainContainer = styled.TouchableOpacity`
    flex: 0.5;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    margin-top: 15px;
`

const MidContainer = styled.View`
    border-bottom-width: 1px;
    border-color: ${({ theme }) => theme.main};
    width: 250px;
    align-self: center;
    margin-top: 12px;
`

const SubContainer = styled.View`
    flex: 1;

    background-color: #ffffff;
    align-items: center;
    justify-self: flex-end;
`
const StyledText = styled.Text`
    font-size: 18px;
`

const MusicText = styled.Text`
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 5px;
`
const MusicContainer = styled.TouchableOpacity``

const TempText = styled(StyledText)`
    font-weight: 200;
    font-size: 75px;
    padding-left: 10px;
    padding-bottom: 0px;
`

const Main = ({ navigation }) => {
    const [weather, setWeather] = useState({
        temp: 0,
        condition: "",
        name: "",
        max: 0,
        min: 0,
    })

    useLayoutEffect(() => {
        async function wth() {
            const weatherValue = await getLocation()
            setWeather(weatherValue)
        }
        wth()
    }, [])

    const _onPressMain = (_navigation) => {
        _navigation.navigate("WeatherWeb")
    }

    const _onPressMusic = (_navigation, _condition) => {
        _navigation.navigate("MusicWeb", { condition: _condition })
    }

    return (
        <Container>
            <MainContainer onPress={() => _onPressMain(navigation)}>
                <StyledText style={{ fontSize: 25, fontWeight: "200" }}>
                    {weather.name}
                </StyledText>
                <TempText>{Math.round(weather.temp)}º</TempText>
                <StyledText>{weather.condition}</StyledText>
                <StyledText style={{ marginTop: 10 }}>
                    최고:{weather.max}º 최저:{weather.min}º
                </StyledText>
                {/*최대 최저*/}
            </MainContainer>

            <MidContainer></MidContainer>
            <TouchableOpacity
                onPress={() => _onPressMusic(navigation, weather.condition)}
            >
                <Animatable.View
                    animation="pulse"
                    iterationCount="infinite"
                    direction="alternate"
                >
                    <MusicText>현재 날씨에 어울리는 음악 들으러 가기</MusicText>
                </Animatable.View>
            </TouchableOpacity>
            <SubContainer>
                <Coordi
                    style={{ flex: 1 }}
                    weather={weather}
                    navi={navigation}
                ></Coordi>
            </SubContainer>
        </Container>
    )
}

export default Main
