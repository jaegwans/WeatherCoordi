import React from "react"
import { View, Text } from "react-native"
import { WebView } from "react-native-webview"

const MusicWeb = ({ route }) => {
    console.log(route.params.condition)

    const conditionKoreanObject = {
        Thunderstorm: "날씨 안 좋을 때 듣기 좋은 노래",
        Drizzle: "이슬비 내릴 때 듣기 좋은 노래",
        Rain: "비 올 때 듣기 좋은 노래",
        Snow: "눈 올 때 듣기 좋은 노래",
        Clear: "화창할 때 듣기 좋은 노래",
        Clouds: "흐릴 때 듣기 좋은 노래",
    }
    let conditionString = conditionKoreanObject[route.params.condition]

    if (conditionKoreanObject[route.params.condition] == undefined) {
        conditionString = "안개 낄 때 듣기 좋은 노래"
    }

    console.log(conditionKoreanObject[route.params.condition])

    return (
        <WebView
            source={{
                uri:
                    "https://www.youtube.com/results?search_query=" +
                    conditionString,
            }}
        />
    )
}

export default MusicWeb
