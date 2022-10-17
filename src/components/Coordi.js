import React, { useState } from "react"
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from "react-native"
import styled from "styled-components/native"
import PropTypes from "prop-types"
import { keyframes } from "styled-components"
//코디와 날씨 온도, 기상 출력

//styled
const Container = styled.View`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    background-color: #ffffff;
    width: 300px;
    flex-wrap: wrap;
    margin-top: 60px;
`

const Scroll = styled.ScrollView``

const ClothText = styled.Text`
    font-size: 22px;
    font-weight: 400;
    align-items: flex-start;
`
const Cloth = styled.TouchableOpacity`
    border-color: #7882a4;
    border-width: 1.5px;
    border-radius: 5px;
    padding: 7px 10px;
    margin: 6px 5px;
    display: flex;
    align-items: flex-start;
`
//data
const coordis = {
    above28: ["민소매", "반팔", "반바지", "원피스"],
    above23: ["반팔", "얇은셔츠", "반바지", "면바지"],
    above20: ["얇은 가디건", "긴팔 면바지", "청바지"],
    above17: ["얇은 니트", "맨투맨", "가디건", "청바지"],
    above12: ["자켓", "가디건", "야상", "면바지", "청바지"],
    above9: ["자켓", "트랜치코트", "야상", "니트", "청바지", "스타킹"],
    above5: ["코트", "가죽자켓", "히트텍", "니트", "레깅스"],
    under4: ["패딩", "두꺼운코트", "목도리", "기모제품"],
}
const needUmb = ["rain", "shower rain", "thunderstorm", "snow"]

//function
function returnCoordi(temp) {
    console.log(temp + "?")
    if (temp >= 28) {
        return coordis.above28
    } else if (temp >= 23) {
        return coordis.above23
    } else if (temp >= 20) {
        return coordis.above20
    } else if (temp >= 17) {
        return coordis.above17
    } else if (temp >= 12) {
        return coordis.above12
    } else if (temp >= 9) {
        return coordis.above9
    } else if (temp >= 5) {
        return coordis.above5
    } else {
        return coordis.under4
    }
}
function takeUmb(condition) {
    if (needUmb.includes(condition)) {
        return true
    } else {
        return false
    }
}

function Coordi(props) {
    const [coordi, setCoordi] = useState("")
    console.log(props.weather)
    console.log(returnCoordi(props.weather.temp))
    console.log(takeUmb(props.weather.condition))

    const umb = takeUmb(props.weather.condition)

    return (
        <Scroll>
            <Container>
                {returnCoordi(props.weather.temp).map((cloth, index) => {
                    return (
                        <Cloth
                            key={index}
                            onPress={() => {
                                console.log(props.navi)
                                props.navi.navigate("CoordiWeb", {
                                    cloth: cloth,
                                })
                            }}
                        >
                            <ClothText>{cloth}</ClothText>
                        </Cloth>
                    )
                })}

                {umb ? (
                    <Cloth>
                        <ClothText>우산</ClothText>
                    </Cloth>
                ) : (
                    <></>
                )}
            </Container>
        </Scroll>
    )
}

Coordi.propTypes = {
    weather: PropTypes.object.isRequired,
}

export default Coordi
