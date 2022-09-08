import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CreateData = () => {
    const navigate=useNavigate();
    const navigateToHome=()=>{
        navigate('/');
    }
   
    const handleSubmit=(e)=>{
e.preventDefault();

axios.post('http://localhost:5000/student', {
    studentName:e.target.fullname.value,
    motherName:e.target.mothername.value,
    fatherName: e.target.fathername.value,
    address: e.target.address.value,
    studenId:e.target.studenId.value,
    dept: e.target.dept.value,
  })
  .then(function (response) {
    if(response.data.acknowledged){
        toast.success("Successfully added");
    }

    console.log(response.data.acknowledged);


  })
  .catch(function (error) {
    console.log(error);

    toast.error("Failed to added");
  });

    }

    return (
        <div>
            
            <div className='container'>
            <form onSubmit={handleSubmit}  className='formContainer'>
             
                {/* full name */}
                <label for="fullname">Student name:</label>
                <input  className='inputFieldStyle' type="text" id="fullname" name="fullname" placeholder='Jhon Miya' required /><br />
             
                {/* mother name */}
                <label for="mothername">Mother name:</label>
                <input type="text" id="mothername" name="mothername" placeholder='Mother Name' required /><br />
                {/* father name */}

                <label for="fathername">Father name:</label>
                <input type="text" id="fathername" name="fathername"  placeholder='Father Name' required/><br />
                {/* address */}

                <label for="address">Address:</label>
                <input type="text" id="addrss" name="address"  placeholder='Address' required/><br />
                {/* student id */}
                <label for="studenId">Student ID:</label>
                <input type="number" id="studenId" name="studenId"  placeholder='Student ID' required/><br />
                {/* dept  */}
                <label for="dept">Department:</label>
                {/* <input type="text" id="dept" name="dept" value="Doe" /><br /> */}
                <select name='dept' id='dept'>
                    <option value="course-type" selected>Course type*</option>
                    <option value="short-courses">Short courses</option>
                    <option value="featured-courses">Featured courses</option>
                    <option value="undergraduate">Undergraduate</option>
                    <option value="diploma">Diploma</option>
                    <option value="certificate">Certificate</option>
                    <option value="masters-degree">Masters degree</option>
                    <option value="postgraduate">Postgraduate</option>
                </select>


                <br />
                <input onClick={navigateToHome} type="submit" value="Submit" />
            </form>
            </div>
        </div>


    );
}

export default CreateData;
