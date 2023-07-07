import React, { useEffect, useState } from 'react'
import axios from "axios"
import './officer.css'
import {Link} from 'react-router-dom'

const Officer = () => {
    const deleteOfficer = (oid) =>{
        const PopMessage = window.confirm("Are you sure you want to delete Officer?");
        if (PopMessage){
            axios.delete(`http://localhost:8080/Officer/delete/${oid}`)
            .then((res)=>{
                window.location.reload();
            })
            .catch((error)=>
            console.log(error));
        }
    };


    const [officerData,SetOfficerData] =useState([]);
    useEffect (()=>{
        fetchOfficer();
    },[])

    const fetchOfficer= async ()=>{
        try {
           const response =await axios.get("http://localhost:8080/Officer/list");
           SetOfficerData(response.data);
           
    }catch(error){
        console.log(error);
       }
}
  return (
    <div>

    <table className="table">
                <thead>
                    <tr>
                    {/* <th scope="col">s/n0   </th> */}
                    <th scope="col">Name    </th>
                    <th scope="col">Address  </th>
                    <th scope="col">Phone   </th>
                    </tr>
                </thead>
                <tbody>
                        {
                            officerData.length > 0 ? (
                                officerData.map((data)=>(
                                    <tr key={data.oid}>

                                    <td> {data.name}</td>

                                    <td>  {data.address}  </td>

                                    <td> {data.phone}</td>
<td>
<button onClick={()=>deleteOfficer(data.oid)}> DeleteOfficer</button>
</td>
<td>
<Link to ={'/Addofficer'}><button> Addofficer</button></Link>
</td>
<td>
<Link to ={`/UpdateOfficer/${data.oid}`}><button> UpdateOfficer</button></Link>
</td>
                                    </tr>
                                ))
                            ):
                            (
                                <tr>
                                    <td>no data available</td>
                                </tr>
                            )
                        }                  
                </tbody>
                </table>
    </div>
  )
}

export default Officer;
