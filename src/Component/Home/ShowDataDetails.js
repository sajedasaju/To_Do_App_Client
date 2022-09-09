import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ShowDataDetails = ({student}) => {
  const {_id,studentName,studenId,motherName,fatherName,dept,address}=student;


  const navigate=useNavigate();
  const navigateToEdit=()=>{
      navigate(`/editData/${_id}`);
  }

 
  const handleDetele=(s_id)=>{
    
    axios.delete(`http://localhost:5000/student/${s_id}`)
    .then(function (response) {
      console.log("delete done")
      toast('Successfully Deleted')
    })
  }
  const handleEdit=(s_id)=>{
    
    axios.delete(`http://localhost:5000/student/${s_id}`)
    .then(function (response) {
      console.log("delete done")
      toast('Successfully Deleted')
    })
  }
    // console.log(student)
    return (
        <tr>
      <td data-column="Full Name">{studentName}</td>
      <td data-column="Mother Name">{motherName}</td>
      <td data-column="Father Name">{fatherName}</td>
      <td data-column="Address">{address}</td>
      <td data-column="Student ID">{studenId}</td>
      <td data-column="Dept">{dept}</td>
      <td data-column="Activity">
        {/* <Link to='/dataEdit'>
        <button  className='delete'><i class="uil uil-edit"></i></button>
        </Link> */}
        <button onClick={()=>{navigateToEdit()}} className='delete'><i class="uil uil-edit"></i></button>
        <button onClick={()=>{handleDetele(_id)}} className='delete'><i class="uil uil-trash-alt"></i></button>
        </td>
    </tr>
    );
}

export default ShowDataDetails;
