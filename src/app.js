import react from 'react'
import Contact from './components/pages/contact'
import LandingPage from './components/pages/landingPage'
import Work from './components/pages/work'
import Navigation from './components/navbar'
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

  const style = {
    container:{
      minHeight:"100vh",
      color:'black',
      fontFamily:'sabon',
      fontWeight:'400',
      fontSize:'1.1em',
    }
  }

  return (
      <Router>
        <Container fluid >
          <Row>
            <Col xs={2} style={{zIndex:'2'}}>
              <Navigation/>
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