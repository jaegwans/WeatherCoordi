import React from 'react'
import {  ScrollView,View,Text,FlatList,StyleSheet,Alert,TouchableOpacity,Linking} from 'react-native'
import { ossLisence } from '../licenses'
import styled from 'styled-components';
import { createStackNavigator } from '@react-navigation/stack';

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

borderColor: '#d9d9d9',



    }
)

const StyledText = styled.Text`
font-size: 20px;
padding: 15px;
width: 100%;



`;


const Item = ({ title,_license,_desc,key }) => (
  <TouchableOpacity>
 <View style={[ListContainer,{borderTopWidth: title=="@expo/ngrok" ? 1 : 0}]}  >

    <StyledText>{title}+{key}</StyledText>
   
    </View>
    </TouchableOpacity>

);


const License = ({navigation}) => {
  
    console.log(JSON.stringify(ossLisence));
    console.log(navigation)
    const data = ossLisence

    const renderItem = ({ item ,keyExtractor}) => (
      <Item title={item.libraryName} _license={item._license} _desc={item._description} key={item.keyExtractor}   />
       );
  
  
      return(
          <Container>
             <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item,index) => index.toString()}
         
        />
          </Container>
      )
    

}

export default License;