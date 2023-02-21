import React from "react";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar bg="light" variant="light" className="border-bottom" sticky="top">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className="text-decoration-none text-black">Resume Builder</NavLink>
        </Navbar.Brand>
        
      </Container>
    </Navbar>
  );
}

export default Navigation;
