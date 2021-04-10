import React from 'react'
import {
  Link
} from "react-router-dom"
import {
  Nav,
} from "react-bootstrap"

const Navbar = ({ changeBg }) => {
  const style={
    sidebar:{
      position:'fixed',
      color: 'black',
    },
    links:{
      color: 'grey',
      fontFamily: 'Serif',
      fontWeight: '400',
      fontSize: '1.1rem'

    },
    title:{
      color: 'black',
      fontFamily: 'sabon',
      fontWeight: '400',
      fontSize: 'normal',
      fontSize: '1.2rem',
      marginBottom: '10px'
    }
  }
  
  return(
    <Nav style={style.sidebar} defaultActiveKey="/home" className="flex-column">
      <Nav.Link style={style.title} as={Link} to="/" onClick={()=>{changeBg('home')}}> ali monis naqvi </Nav.Link>
      <Nav.Link style={style.links} as={Link} to="/work" onClick={()=>{changeBg('work')}}>work</Nav.Link>
      <Nav.Link style={style.links} as={Link} to="/contact" onClick={()=>{changeBg('contact')}}>contact</Nav.Link>
      <Nav.Link style={style.links} as={Link} to="/blog" onClick={()=>{changeBg('blog')}}>blog</Nav.Link>
      <Nav.Link style={style.links} as={Link} to="/about" onClick={()=>{changeBg('about')}}>about</Nav.Link>
    </Nav>
  )
}

export default Navbar