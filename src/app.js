import react from 'react'
import Contact from './components/pages/contact'
import LandingPage from './components/pages/landingPage'
import Work from './components/pages/work'
import Navbar from './components/navbar'
import landingBackground from './static/Ali_00022.jpg'
import Blog from './components/pages/blog'
import About from './components/pages/about'

import { useState, useEffect } from 'react'

import { 
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"

import {
  Container, Col, Row
} from "react-bootstrap"


const App = () => {
  const [bg, setBg] = useState({
    backgroundImage: `url(${landingBackground})`
  })

  const pathname = window.location.pathname

  useEffect(()=>{
    if(pathname === '/'){
      setBg({ backgroundImage: `url(${landingBackground})` })
    } else {
      setBg({})
    }
  },[pathname])

  const containerStyle = {
    minHeight:"100vh",
    color:'black',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    fontFamily:'sabon',
    fontWeight:'400',
    fontSize:'1.1em',
  }

  const changeBg = (page) => {
    if(page === 'home'){
      setBg({ backgroundImage: `url(${landingBackground})` })
    } else{
      setBg({})
    }
  }  

  return (
      <Router>
        <Container fluid style={{...containerStyle, ...bg}}>
          <Row>
            <Col xs={2} style={{backgroundColor:'green', zIndex:'2'}}>
              <Navbar changeBg={changeBg}/>
            </Col>
            <Col xs={12}>
              <Switch>
                <Route path="/work">
                  <Work/>
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/blog">
                  <Blog />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/">
                  <LandingPage/>
                </Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
  )
}

export default App