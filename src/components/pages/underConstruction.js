import React from 'react'
import { Container } from 'react-bootstrap';
import TextLoop from "react-text-loop";
const UnderConstruction = () => {
const style={
  text:{
    fontFamily:'serif',
    color:'grey',
    display: 'flex',
    fontSize:'55px',
    width:'500px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textloopContainer:{
    height:'100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}
return(
  <Container fluid>
    <div style={style.textloopContainer}>
      <TextLoop fade={true} mask={false} interval={550}>
        <div style={style.text} >This</div>
        <div style={style.text} >Page</div>
        <div style={style.text} >Is</div>
        <div style={style.text} >Under</div>
        <div style={style.text} >Construction</div>
      </TextLoop>
    </div>
  </Container>
) 

}

export default UnderConstruction