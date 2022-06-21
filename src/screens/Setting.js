import React from 'react';
import {Button,View,Text} from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
flex:1;
align-items: center;
background-color: #ffffff;
`;
const StyledText = styled.Text`
font-size: 30px;
margin-bottom: 10px;
`;

const Setting = () =>{
    return(
        <Container>
            <StyledText>setting</StyledText>
        </Container>
    )
}



export default Setting;