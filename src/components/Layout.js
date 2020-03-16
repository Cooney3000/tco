import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

export class Layout extends Component {
  
  render() {
    const props = this.props;
    return (
      <Container>
        {props.children}
      </Container>
    )
  }
}
