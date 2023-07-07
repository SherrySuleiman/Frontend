import React from 'react'
import'./index.css'
import Home from './home';
import { Link } from 'react-router-dom';

 function Index() {
  return (
    <div>
  
  <div className="d1">
    <center><h2 style={{color:'blue'}}>login to Public Transport</h2></center>
      
      <form action="/officer">
          <label htmlFor="username">username:</label><br/>
          <input type="text" name="firstname"/><br/>
          <label htmlFor="pass">password:</label><br/>
          <input type="text" name="lastname"/><br/><br/>

          <Link to={"/Officer"}><center><button> submit </button></center></Link>
        </form>
  </div>
  
   </div>
  )
}
export default Index