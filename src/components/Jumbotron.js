import React, { Component } from 'react'
import { Jumbotron as Jumbo, Container } from 'react-bootstrap'
import styled from 'styled-components'
import clubheim from '../assets/Clubheim.jpg'


// .jumbotron {
  //   background: url(${clubheim}) no-repeat center; 
  //   background-size: cover;
  // }
  
  const Styles = styled.div`
  .jumbotron {
    background: url(${clubheim}) no-repeat center;
    background-size: cover;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: -2;
    padding-top: 0.3rem;
   }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
  .logotext
  {
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

export class Jumbotron extends Component {
  render() {
    return (
      <Styles>
        <Jumbo fluid className="Jumbo">
          <Container>
            <span className="logotext d-block d-sm-none">TC Olching e. V.</span>
          </Container>
          <div className="overlay"></div>
        </Jumbo>
      </Styles>
    )
  }
}