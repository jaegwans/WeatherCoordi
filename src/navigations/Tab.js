import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../screens/Main';
import Setting from '../screens/Setting';
// import { Main, Setting} from '../screens/TabScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const TabIcon = ({ name, size, color }) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
  {console.log({name})}
};

const Tab = createBottomTabNavigator();

const TabNavigation = () => { // 기본 화면은 맨 위 스크린컴포넌트거나 네비게이터 속성에 inintialRouteName으로 지정된다.)
  return (
    <Tab.Navigator> 
    <Tab.Screen name="Main" component={Main} options={{headerTitle:'Weather Coordi',tabBarIcon: props => TabIcon({...props, name:'home'})}}
    
    /> 
        <Tab.Screen name="Setting" component={Setting} options={{tabBarIcon: props => TabIcon({...props, name:'cog'})}}/>
    
    </Tab.Navigator>
   
  )
} //스크린의 각 구성요소는 navigation 객체가 같이 전달됨 

export default TabNavigation;