import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
const NavbarItem = () => {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#"> React Assignment </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarItem;