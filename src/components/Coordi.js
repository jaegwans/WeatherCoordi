import React,{useState} from 'react'
import {Text,View,StyleSheet} from 'react-native'
import styled from 'styled-components/native';
import PropTypes from 'prop-types'
import { keyframes } from 'styled-components';


const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex:1;
  `;

function Coordi(props) {
  const [coordi, setCoordi] = useState("")

  return (
    <Container>
      <Text>{props.temp}</Text>
    </Container>
  )
}

Coordi.propTypes={
  temp:PropTypes.number.isRequired,
}

export default Coordi;
