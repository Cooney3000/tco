import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import { auth } from './components/_functions'
import { Redirect } from 'react-router'

export class Login extends Component {
  state = {
    redirectToReferrer: false
  }
  login = () => {
    auth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state
    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <div>
        <h1>Zugang zum Mitgliederbereich</h1>
        <Button variant="success" size="lg" className="my-3" onClick={this.login}>Log in</Button>{' '}
      </div>
    )
  }
}