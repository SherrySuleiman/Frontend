import React from 'react'
import { Link } from 'react-router-dom';
import Nav from '../model/component/Nav'

 function Home() {
  return (
    <div>
    <Nav/>
          <h1>PUBLIC TRANSPORT</h1>
    <div class="nav">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#login">News</a></li>
            <li><a href="#registration">Contact</a></li>
            <li><a href="#about">About</a></li>
              <li><a href="#passenger register">Passenger Register</a></li>
            <li><a href="#passenger"> Passenger</a></li>
          </ul>
    </div>
    </div>
  )
}
export default Home