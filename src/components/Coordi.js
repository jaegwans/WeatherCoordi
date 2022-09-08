import React,{useState} from 'react'
import {Text,View,StyleSheet} from 'react-native'
import styled from 'styled-components/native';
import PropTypes from 'prop-types'
import { keyframes } from 'styled-components';
//코디와 날씨 온도, 기상 출력

//styled
const Container = styled.View`
  justify-content: space-evenly;
  align-items: center;
  flex:1;
  background-color: #FFFFFF;
  flex-wrap: wrap;


 
 
  `;
const ClothText = styled.Text`
font-size: 18px;
font-weight: 400;
align-items: flex-start;


`;
const Cloth = styled.View`
font-size: 18px;
font-weight: 400;
padding: 5px;
display: flex;
align-items: flex-start;



`;
//data
const coordis ={
  above28 :["민소매","반팔","반바지","원피스"],
  above23 : ["반팔","얇은셔츠","반바지","면바지"],
  above20 : ["얇은 가디건","긴팔 면바지","청바지"],
  above17 : ["얇은 니트","맨투맨","가디건","청바지",],
  above12 : ["자켓","가디건","야상","면바지","청바지"],
  above9 : ["자켓","트랜치코트","야상","니트","청바지"],
  above5 : ["코트","가죽자켓","히트텍","니트","레깅스"],
  under4 : ["패딩","두꺼운코트","목도리","기모제품"],
}
const needUmb=['rain','shower rain','thunderstorm','snow'];


//function
function returnCoordi(temp){
console.log(temp+"?");
  if(temp>=28){
    return coordis.above28;
  }else if(temp>=23){
    return coordis.above23;
  }
  else if(temp>=20){
    return coordis.above20;
  }
  else if(temp>=17){
    return coordis.above17;
  }
  else if(temp>=12){
    return coordis.above12;
  }
  else if(temp>=9){
    return coordis.above9;
  }
  else if(temp>=5){
    return coordis.above5;
  }
  else{
    return coordis.under4;
  }
  
 
}
function takeUmb(condition){
  if(needUmb.includes(condition)){
    return true;
  }
  else{
    return false;
  }
  
}



function Coordi(props) {
  const [coordi, setCoordi] = useState("");
  console.log(props.weather);
  console.log(returnCoordi(props.weather.temp))
  console.log(takeUmb(props.weather.condition))

  const umb = takeUmb(props.weather.condition)

  return (
    <Container>
     
      {returnCoordi(props.weather.temp).map((cloth)=>{
      return <Cloth><ClothText>{cloth}</ClothText></Cloth>
      }
      )}

      { umb ? <Cloth><ClothText>우산</ClothText></Cloth> : <></> }
    </Container>
  )
}

Coordi.propTypes={
  weather:PropTypes.object.isRequired,
}

export default Coordi;
