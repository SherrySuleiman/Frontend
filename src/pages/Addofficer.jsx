import React, { useState } from 'react';
import './Addofficer.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Addofficer() {
  const [inputname, setName] = useState('');
  const [inputaddress, setAddress] = useState('');
  const [inputphone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestData = {
      name: inputname,
      address: inputaddress,
      phone: inputphone,
    };
    axios
      .post("http://localhost:8080/Officer/save", requestData)
      .then((response) => {
        console.log(response.data);
        navigate("/Officer");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={inputname} onChange={(event) => setName(event.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type='text' id="address" name="address" value={inputaddress} onChange={(event) => setAddress(event.target.value)} rows="6"/>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" name="phone" value={inputphone} onChange={(event) => setPhone(event.target.value)} />
        </div>

        <button type="submit">Add Officer</button>
      </form>
    </div>
  );
}

export default Addofficer;
