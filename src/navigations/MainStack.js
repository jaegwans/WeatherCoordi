import { createStackNavigator } from '@react-navigation/stack';
import Main from '../screens/Main';
import WeatherWeb from '../screens/WebView/WeatherWeb';
import MusicWeb from '../screens/WebView/MusicWeb'

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} options={{headerShown:false}} />
      <Stack.Screen name="WeatherWeb" component={WeatherWeb} />
      <Stack.Screen name="MusicWeb" component={MusicWeb} />
    </Stack.Navigator>
  );
}

export default MainStack