import React from 'react'
import {useState} from 'react';
import  './Addofficer.css'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Addofficer() {
const[inputname, setName] = useState('');
const[inputaddress, setaddress] = useState('');
const[inputphone,setphone] = useState('');
const navigate =useNavigate();

const handleSubmit = (event) => {
  event.preventDefault();
  const requestdata = {
    name:inputname,
    address:inputaddress,
    phone:inputphone,
  };
  axios.post("http://localhost:8080/Officer/save",requestdata).then(response =>{
    console.log(response.data);
    navigate("/Officer");
  }).catch(error => {
    console.error(error);
  })
}

  return (
    <div>
   <form onSubmit={handleSubmit} >
    <div class="form-group">
      <label for="name">name</label>
      <input type="text" id="name" name="name" value={inputname} onChange={event => setName(event.target.value)}/>
    </div>


    <div class="form-group">
      <label for="address">address</label>
      <textarea id="address" name="address" value={inputaddress} onChange={event => setaddress(event.target.value)} rows="6"></textarea>
    </div>


    <div class="form-group">
      <label for="phone">phone</label>
      <textarea id="phone" name="phone"  value={inputphone} onChange={event => setphone(event.target.value)}  rows="10"></textarea>
    </div>

    <button type="submit">Addofficer</button>
  </form>      
    </div>
  )
 }
export default Addofficer;






