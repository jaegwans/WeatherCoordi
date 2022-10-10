import React from "react"
import { View, Text } from "react-native"
import { WebView } from "react-native-webview"

const ActivityIndicatorElement = () => {
    //making a view to show to while loading the webpage
    return <Text>loading...</Text>
}

const WeatherWeb = () => {
    return (
        <WebView
            renderLoading={ActivityIndicatorElement}
            source={{ uri: "https://www.weather.go.kr/w/index.do" }}
        />
    )
}

export default WeatherWeb
