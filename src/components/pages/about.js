import React from 'react'
import aboutImage from '../../static/alimonisnaqvi-000029.jpg'
import{
  Container,Row,Col
} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

const About = () => {
  const style={
    image:{
      width:'100%',
    },
    flexRow:{
      height:"100vh",
      display:"flex",
      alignItems:"center"
    }
  }
  return(
    <Container fluid >
      <Row mt={3} style={style.flexRow} className="justify-content-center">
        <Col xs={12} sm={4}>
          <Image style={style.image} src={aboutImage} fluid/>
            <br/>
            <br/>
            b.1995, Kanpur
            <br/>
            <br/>
            Ali Monis Naqvi is an independent photographer and a visual-storyteller currently travelling between Mumbai and Delhi. Through his work, he seeks out the inconspicuous and the ephemeral.
            <br/>
            <br/>
            His work has been published in The Caravan, Berlingske-Denmark, The Wire, Burn, Firstpost, Kapital-Slovakia to name a few.
            <br/>
            <br/>
            write at <em>alimonisnaqvi@gmail.com</em>

        </Col>
      </Row>
    </Container>
  )
}

export default About