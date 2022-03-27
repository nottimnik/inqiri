import React from "react";
import {
  Navbar as Navbarr,
  Container,
  NavDropdown,
  Nav,
} from "react-bootstrap";
import styled from "styled-components";

export default function Navbar() {
  return (
    <Navbarr bg="light" expand="sm">
      <Container>
        <Navbarr.Brand href="/">
          <Title>Inqiri</Title>
        </Navbarr.Brand>
        <Navbarr.Toggle aria-controls="basic-navbar-nav" />
        <Navbarr.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/explore">Explore</Nav.Link>
            <Nav.Link href="/">Search</Nav.Link>
          </Nav>
        </Navbarr.Collapse>
      </Container>
    </Navbarr>
  );
}

const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 50px;
  font-weight: 700;
  font-size: 30px;
  padding: 0px;
  margin-top: 0px;
  margin-bottom: 0px;

  &:hover {
    color: #383838;
  }
`;
