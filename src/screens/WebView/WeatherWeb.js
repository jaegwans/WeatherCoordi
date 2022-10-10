import React from 'react'
import { View,Text } from 'react-native'
import { WebView } from 'react-native-webview';


const WeatherWeb = () => {
  return (
    <WebView
      source={{ uri: 'https://www.weather.go.kr/w/index.do' }}
    />
  )
}

export default WeatherWeb