import react from 'react'
import Contact from './components/pages/contact'
import LandingPage from './components/pages/landingPage'
import Work from './components/pages/work'
import Navbar from './components/navbar'
import { 
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"
import {
  Container, Col, Row
} from "react-bootstrap"


const App = () => {

  return (
      <Router>
        <Container fluid>
          <Row>
            <Col xs={2}>
              <Navbar/>
            </Col>
            <Col xs={10}>
              <Switch>
                <Route path='/work'>
                  <Work/>
                </Route>
                <Route path='/contact'>
                  <Contact />
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