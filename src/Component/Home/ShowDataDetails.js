import React from 'react';

const ShowDataDetails = ({student}) => {
    const {studentName,studenId,motherName,fatherName,dept,address}=student;
    console.log(student)
    return (
        <tr>
      <td data-column="Full Name">{studentName}</td>
      <td data-column="Mother Name">{motherName}</td>
      <td data-column="Father Name">{fatherName}</td>
      <td data-column="Address">{address}</td>
      <td data-column="Student ID">{studenId}</td>
      <td data-column="Dept">{dept}</td>
    </tr>
    );
}

export default ShowDataDetails;
