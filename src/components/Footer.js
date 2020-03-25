import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import sand from '../assets/ressources/sandkachel2.png';
import Card from 'react-bootstrap/Card'
import Carddeck from 'react-bootstrap/Carddeck'

const Styles = styled.div`
.foot {
    background-color: #333;
    background-image: url(${sand});
    background-repeat: repeat;
    background-size: contain;
    background-position: center;
    border-top: 0.1rem solid #f5dcb0;
    padding: 0.1rem 1rem;
  }
  a {
    text-decoration:none;
    text-transform:uppercase;
    text-shadow: 1px 1px Sienna;
    color: white;
    transition:all .25s ease;

    &:hover {
      color:DarkSlateGrey;
    }
  }
  .card {
    font-size: 0.7rem;
    background-color: initial;
    border-color: transparent;
  }
  .card-body {
    padding: 0;
  }
  .card-title {
    font-size: 0.9rem;
    font-weight: bold;
  }
  .pagebottom {
    background-color: #333;
    background-image: url(${sand});
    background-repeat: repeat;
    background-size: contain;
    background-position: center;
    border-top: 0;
    border-bottom: 0.3rem solid MediumSeaGreen;
    padding: 0.1rem 1rem;
 }
  
`;

export class Footer extends Component {
  
  render() {
    return (
      <Styles>
          <Container fluid className="foot">
            <Container>
              <p className="pt-2">Kontakt und Impressum</p>
              <Carddeck>
                <Card>
                  <Card.Body>
                    <Card.Title>Anschrift</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title>Kontakt</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title>Bankverbindung</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carddeck>
            </Container>
          </Container>
          <Container fluid className="pagebottom ">
            <Container>
            <p className="pt-2">Sitemap</p>
            </Container>
          </Container>
            
      </Styles>
    )
  }
}
