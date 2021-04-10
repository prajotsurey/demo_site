import React from 'react'
import {
  Container,Row,Col
} from 'react-bootstrap'

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
      alignItems:"center"
    }
  }
  return(
    <Container fluid>
      <Row style={style.flexRow} className="justify-content-md-center">
        <Col md="auto" style={style.centerHeading}>
        سلام  
        </Col>
      </Row>
    </Container>
  )
}

export default LandingPage