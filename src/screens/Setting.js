import React from 'react';
import {Button,View,Text,FlatList,StyleSheet,Alert,TouchableOpacity,Linking} from 'react-native';

import styled from 'styled-components';

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
padding: 10px;
width: 100%;



`;

const data=[
    {id:1,title:'문의사항'},
    {id:2,title:'오픈소스 라이센스'}

]


const _onPress = (id) =>{
    if(id == 1){
    try{
      Linking.openURL('mailto:skhu201811140@gmail.com') 
    }catch(e){
        console.log(e)
    }
}else{
    alert("pressed"+ id);
}
}

const Item = ({ title,id }) => (
    <TouchableOpacity onPress={()=> _onPress(id)}>
   <View style={[ListContainer,{borderTopWidth: id==1 ? 1 : 0}]}  >

      <StyledText>{title}</StyledText>
     
      </View>
      </TouchableOpacity>
  
  );

const Setting = () =>{



    const renderItem = ({ item }) => (
    <Item title={item.title} id={item.id}  />
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



export default Setting;