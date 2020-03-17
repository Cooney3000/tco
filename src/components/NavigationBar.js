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
  .navbar-light .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='#{$navbar-light-color}' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
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