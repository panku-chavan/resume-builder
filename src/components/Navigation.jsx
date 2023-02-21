import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from 'react-router-dom';

function Navigation() {
  const [show,setShow]=useState(false);
  return (
    <Navbar bg="light" variant="light" className="border-bottom" sticky="top">
      <Container>
        <Navbar.Brand>
          <NavLink to="/resume" className="text-decoration-none text-black" onClick={()=>setShow(true)}><h4 style={!show ?{color:"blue"}:null}>{show ?"Resume Builder":"Click to open App"}</h4></NavLink>
        </Navbar.Brand>
       
      </Container>
    </Navbar>
  );
}

export default Navigation;
