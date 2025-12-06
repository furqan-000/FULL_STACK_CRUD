import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UpdateUser() {
   const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const { id } = useParams();
    const navigate = useNavigate();

    function handelSubmit(event) {
        event.preventDefault();
        axios.put('http://localhost:8081/update/'+ id, {firstname, lastname, email})
        .then(res => {
            console.log(res);
            navigate('/');
        }).catch(err => console.log(err));
    }

  return (
     <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handelSubmit}>
                <h2>Update Student</h2>
                <div className='mb-2'>
                    <label htmlFor=''>First Name</label>
                    <input type="text" placeholder='Enter Name'className='form-control' 
                    onChange = {e => setFirstName(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Last Name</label>
                    <input type="text" placeholder='Enter Name'className='form-control' 
                    onChange = {e => setLastName(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Email</label>
                    <input type="text" placeholder='Enter Email'className='form-control' 
                    onChange = {e => setEmail(e.target.value)}
                    />
                </div>
                <button className='btn btn-success'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateUser