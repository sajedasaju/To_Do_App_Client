import axios from 'axios';
import React, { useEffect, useState } from 'react';
import usedata from '../../hooks/usedata';
import ShowDataDetails from './ShowDataDetails';

const ShowData = () => {
  
    const [allData,setAllData]=useState([]);   


useEffect(() => {
    axios.get('http://localhost:5000/allStudent')
    .then(function (response) {
      setAllData(response.data)
    
    })
}, []);


    return (
        <div className='dataContainer'>
<div>
<table>
  <thead>
    <tr>
      <th>Full Name</th>
      <th>Mother Name</th>
      <th>Father Title</th>
      <th>Address</th>
      <th>Student Id</th>
      <th>Dept</th>
      <th>Activity</th>
    </tr>
  </thead>
  <tbody>
    {
        allData.map(data=><ShowDataDetails
        key={data._id}
        student={data}
        ></ShowDataDetails>)
    }
   
  
  </tbody>
</table>
</div>
        </div>
    );
}

export default ShowData;
