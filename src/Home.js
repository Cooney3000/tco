import React, { Component } from 'react'
import styled from 'styled-components'

const Styles = styled.div`

`;



export class Home extends Component {
  render() {
    return (
      <Styles>
        <div>
          <h1>Hello TCO!</h1>
          <p>Am Wochenende des 27. und 28. Aprils fanden auf der Anlage des Tennisclub Olching e.V. 
            die diesjährigen Jugendclubmeisterschaften statt. Bei kühlen Temperaturen kämpften 22 
            Kinder und Jugendliche zwischen 8 und 15 Jahren in vier Altersgruppen um den Titel. 
            Vereinsmeister bei den Knaben 16 wurde nach spannenden Duellen Rico Streif, vor Mario 
            Michalsky und Nico Hochholzer. Der Clubmeistertitel bei den Knaben 14 ging an 
            Niklas Vogt. 
          </p>
        </div>
      </Styles>    )
  }
}