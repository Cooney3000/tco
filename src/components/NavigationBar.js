import React, { Component } from 'react'
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import sand from '../assets/ressources/sandkachel2.png'

const Styles = styled.div`
  .navbar {
    background-color: #333;
    background-image: url(${sand});
    background-repeat: repeat;
    background-size: contain;
    background-position: center;
    border-top: 0.3rem solid MediumSeaGreen;
    border-bottom: 0.1rem solid #f5dcb0;
    padding: 0.1rem 1rem
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    text-decoration:none;
    text-transform:uppercase;
    text-shadow: 1px 1px Sienna;
    color: white;
    transition:all .25s ease;

    &:hover {
      color:DarkSlateGrey;
    }
  }
  .navbar-brand .col {
    padding-left: 0;
    padding-right: 0;
  }
  .navbar-toggler {
    background-color: Sienna;
    opacity: 0.8;
  }
  .logotext
  {
    vertical-align: middle;
    display: inline-block;
    margin-left: 15px;

    color:white;
    text-decoration:none;
    text-transform:none;
    
    font-size: 1.8rem;
    font-weight:bold;
    font-style:italic;
    text-shadow: 0.05rem 0.05rem #333;
    font-family:'PT Sans', sans-serif;
  }
`;

export class NavigationBar extends Component {
  render() {
    return (
      <Styles>
        <Navbar expand="lg">
          <Navbar.Brand href="/">
            <Container fluid>
              <Row>
                <Col><img src={require("../assets/ressources/tcoplain.png")} height="45" className="d-inline-block align-top" alt="TC Olching Logo" /></Col>
                <Col><span className="logotext d-none d-sm-block">TC Olching e. V.</span></Col>
              </Row>
            </Container>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link href="/">Aktuelles</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/verein">Verein</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/mannschaften">Mannschaften</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/jugend">Jugend</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/training">Training</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-warning" href="/intern/platzbuchung">Platzbuchung</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-warning" href="/intern/home">Intern</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    )
  }
}