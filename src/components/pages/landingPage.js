import React from 'react'
import {
  Row,Col
} from 'react-bootstrap'
import landingBackground from '../../static/Ali_00022.jpg'
import { useSpring, animated } from 'react-spring'

const LandingPage = () => {
  const style={
    centerHeading:{
      fontSize:"6.9rem",
      color:"#6d9fa4",
      align:"middle"
    },
    flexRow:{
      height:"100vh",
      display:"flex",
      alignItems:"center",
      padding:"0px",
    },
    landingBackground:{ 
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundImage: `url(${landingBackground})`,
    }
  }
  const props = useSpring({config:{ duration:650 },opacity: 1, from: {opacity: 0}})

  return(
      <Row as={animated.div} style={{...style.flexRow, ...style.landingBackground, ...props}} className="justify-content-center">
        <Col xs="auto" style={style.centerHeading}>
        سلام  
        </Col>
      </Row>
  )
}

export default LandingPage