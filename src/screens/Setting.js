import React from 'react';
import {Button,View,Text,FlatList,StyleSheet,Alert,TouchableOpacity,Linking} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components';
import License from './License';


// css

const Container = styled.View`
flex:1;
/* align-items: stretch 가 기본값(자동 전체 값)
flex-start end 로 할 시  */

background-color: #ffffff;

`
const ListContainer = StyleSheet.create(
    {
        alignItems: 'flex-start',
backgroundColor: '#ffffff',
borderBottomWidth: 1,

borderColor: 'gray',


    }
)

const StyledText = styled.Text`
font-size: 20px;
padding: 15px;
width: 100%;



`;
// data

const data=[
    {id:1,title:'문의사항'},
    {id:2,title:'오픈소스 라이센스'}

]



//function

const _onPress = (id,navi) =>{
    if(id == 1){
    try{
      Linking.openURL('mailto:skhu201811140@gmail.com') 
    }catch(e){
        console.log(e+err)
    }
}else{
    navi.navigate('License')
 
}
}

const Item = ({ title,id, navi }) => (
    <TouchableOpacity onPress={()=> _onPress(id,navi)}>
   <View style={[ListContainer,{borderTopWidth: id==1 ? 1 : 0}]}  >

      <StyledText>{title}</StyledText>
     
      </View>
      </TouchableOpacity>
  
  );

const SettingHome = ({navigation}) =>{

const navi = navigation;

    const renderItem = ({ item }) => (
    <Item title={item.title} id={item.id} navi = {navi}  />
     );


    return(
        <Container>
           <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
       
      />
        </Container>
    )
}

const Stack = createStackNavigator();

const Setting = () =>{

    return(
  

    <Stack.Navigator>
      <Stack.Screen name="SettingHome" component={SettingHome} options={{headerTitle:"Settings"}} />
      <Stack.Screen name="License" component={License} />
      
    </Stack.Navigator>


    )
}



export default Setting;