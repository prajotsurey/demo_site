import React from 'react'
import {
  Link
} from "react-router-dom"
import {
  Nav,
} from "react-bootstrap"
const Navbar = () => {
  return(
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/work">Work</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
    </Nav>
  )
}

export default Navbar