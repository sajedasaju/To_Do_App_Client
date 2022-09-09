import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditData = () => {
  const { dataId } = useParams();
  const [studentDetails, setStudentDetails] = useState();
  console.log(studentDetails);
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const url = `http://localhost:5000/allStudent/${dataId}`;
    const url2 = `http://localhost:5000/student/${dataId}`;
    axios.get(url).then(function (response) {
      setStudentDetails(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = {
    //   studentName: e.target.fullname.value,
    //   motherName: e.target.mothername.value,
    //   fatherName: e.target.fathername.value,
    //   address: e.target.address.value,
    //   studenId: e.target.studenId.value,
    //   dept: e.target.dept.value,
    // };

    axios.patch(`http://localhost:5000/student/${dataId}`,
    {
        "studentName": e.target.fullname.value,
        "motherName": e.target.mothername.value,
        "fatherName": e.target.fathername.value,
        "address": e.target.address.value,
        "studenId": e.target.studenId.value,
        "dept": e.target.dept.value,
      },
            // { "edited_field": "email", "email": email },

            // { headers: { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': crsfToken }, }
        ).then((response) => {
            console.log(response)
            toast.success('successfully updated')
        }).catch((error) => {
            console.log(error)
        })
  };



  return (
    <div>
      <div className="container">
        <button onClick={navigateToHome} type="button" className="createButton">
          <span>
            <i class="uil uil-arrow-left"></i>
          </span>
        </button>

        <form onSubmit={handleSubmit} className="formContainer">
          {/* full name */}
          <label for="fullname">Student name:</label>
          <input
            className="inputFieldStyle"
            type="text"
            id="fullname"
            name="fullname"
            required
            defaultValue={studentDetails?.studentName}
          />
          <br />

          {/* mother name */}
          <label for="mothername">Mother name:</label>
          <input
            type="text"
            id="mothername"
            name="mothername"
            placeholder="Mother Name"
            required
            defaultValue={studentDetails?.motherName}
          />
          <br />
          {/* father name */}

          <label for="fathername">Father name:</label>
          <input
            type="text"
            id="fathername"
            name="fathername"
            placeholder="Father Name"
            required
            defaultValue={studentDetails?.fatherName}
          />
          <br />
          {/* address */}

          <label for="address">Address:</label>
          <input
            type="text"
            id="addrss"
            name="address"
            placeholder="Address"
            required
            defaultValue={studentDetails?.address}
          />
          <br />
          {/* student id */}
          <label for="studenId">Student ID:</label>
          <input
            type="number"
            id="studenId"
            name="studenId"
            placeholder="Student ID"
            required
            defaultValue={studentDetails?.studenId}
          />
          <br />
          {/* dept  */}
          <label for="dept">Department:</label>
          {/* <input type="text" id="dept" name="dept" value="Doe" /><br /> */}
          <select name="dept" id="dept" defaultValue={studentDetails?.dept}>
            <option value="short-courses">{studentDetails?.dept}</option>
            <option value="featured-courses">Featured courses</option>
            <option value="undergraduate">Undergraduate</option>
            <option value="diploma">Diploma</option>
            <option value="certificate">Certificate</option>
            <option value="masters-degree">Masters degree</option>
            <option value="postgraduate">Postgraduate</option>
          </select>

          <br />
          <input  type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default EditData;
