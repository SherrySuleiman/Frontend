
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function UpdateOfficer() {
    const navigate = useNavigate();
    const { oid } = useParams();
    const [data, setData] = useState({});
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/Officer/getbyId/${oid}`);
          setData(response.data);
        } catch (error) {
          console.log(error)
        }
      };
  
      fetchData();
    }, [oid]);
  
    function handleSubmit(event) {
      event.preventDefault();
      axios.put(`http://localhost:8080/Station/update/${oid}`, data);
      navigate("/Officer");
    }

  return (
    <div>
   <form onSubmit={handleSubmit} >
    <div class="form-group">
      <label for="name">name</label>
      <input type="text" id="name" name="name" value={data.name} onChange={event => setData({...data,name:event.target.value})}/>
    </div>
    <div class="form-group">
      <label for="address">address</label>
      <textarea id="address" name="address"  value={data.address} onChange={event => setData({...data,address:event.target.value})} rows="6"></textarea>
    </div>
    <div class="form-group">
      <label for="phone">phone</label>
      <textarea id="phone" name="phone"   value={data.phone} onChange={event => setData({...data,phone:event.target.value})}  rows="10"></textarea>
    </div>
    <button type="submit">update</button>
  </form>      
    </div>
  )
}
export default UpdateOfficer;