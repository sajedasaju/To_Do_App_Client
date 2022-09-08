import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
    </tr>
  </thead>
  <tbody>
    {
        allData.map(data=><ShowDataDetails
        key={data._id}
        student={data}
        ></ShowDataDetails>)
    }
    {/* <tr>
      <td data-column="First Name">James</td>
      <td data-column="Last Name">Matman</td>
      <td data-column="Job Title">Chief Sandwich Eater</td>
      <td data-column="Twitter">@james</td>
      <td data-column="Twitter">@james</td>
      <td data-column="Twitter">@james</td>
    </tr>
    <tr>
      <td data-column="First Name">James</td>
      <td data-column="Last Name">Matman</td>
      <td data-column="Job Title">Chief Sandwich Eater</td>
      <td data-column="Twitter">@james</td>
      <td data-column="Twitter">@james</td>
      <td data-column="Twitter">@james</td>
    </tr>
    <tr>
      <td data-column="First Name">James</td>
      <td data-column="Last Name">Matman</td>
      <td data-column="Job Title">Chief Sandwich Eater</td>
      <td data-column="Twitter">@james</td>
      <td data-column="Twitter">@james</td>
      <td data-column="Twitter">@james</td>
    </tr> */}
  
  </tbody>
</table>
</div>
        </div>
    );
}

export default ShowData;
