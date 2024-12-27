import React from "react";
import { Container, Navbar } from "react-bootstrap";

const MenuBar = () => {
  return (
    <Navbar className="sticky-top nav" bg="light">
      <Container>
        <Navbar.Brand>
          <a href="#" className="nav-logo" style={{textDecoration:'none' ,color:"#000000" , fontWeight:'bold'}} >Asad</a>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default MenuBar;
