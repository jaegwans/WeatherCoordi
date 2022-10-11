import React from "react"
import { View, Text } from "react-native"
import { WebView } from "react-native-webview"

const ActivityIndicatorElement = () => {
    //making a view to show to while loading the webpage
    return <Text>loading...</Text>
}

const WeatherWeb = ({ route }) => {
    const cloth = route.params.cloth
    return (
        <WebView
            renderLoading={ActivityIndicatorElement}
            source={{
                uri:
                    "https://www.youtube.com/results?search_query=" +
                    cloth +
                    " 코디",
            }}
        />
    )
}

export default WeatherWeb
