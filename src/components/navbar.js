import React from 'react'
import {
  Link
} from "react-router-dom"
import {
  Nav,Navbar,
} from "react-bootstrap"

const Navigation = ({ changeBg }) => {
  const style={
    links:{
      color: 'grey',
      fontFamily: 'Serif',
      fontWeight: '400',
      fontSize: '14px'

    },
    title:{
      color: 'black',
      fontFamily: 'sabon',
      fontWeight: '400',
      fontSize: '16px',
      marginBottom: '10px'
    },
    navbarHamburgerContainer:{
      color:'Black',
      border: '1px solid black',
      borderRadius: '50%',
      padding: '4px',
      fontSize: '1rem',
    },
  }

  return(
    <>
    <Navbar collapseOnSelect fixed="top" expand="sm">
      <Navbar.Toggle aria-controls="responsive-navbar-nav"  style={style.navbarHamburgerContainer}/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="flex-column" >
          <Nav.Item >
            <Nav.Link eventKey="1" style={style.title} as={Link} to="/" > ali monis naqvi </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2" style={style.links} as={Link} to="/work" >work</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="4" style={style.links} as={Link} to="/blog" >blog</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="5" style={style.links} as={Link} to="/about" >about</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
    </>
  )
}

export default Navigation