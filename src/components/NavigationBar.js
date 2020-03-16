import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #333;
  }

  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color:white;
    }
  }
`;

export class NavigationBar extends Component {
  render() {
    return (
      <Styles>
        <Navbar expand="lg">
          <Navbar.Brand href="/">TC Olching</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link href="/">Aktuelles</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="verein">Verein</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="mannschaften">Mannschaften</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="jugend">Jugend</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="training">Training</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="login">Login</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    )
  }
}