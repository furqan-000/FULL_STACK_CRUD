import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function User() {
    const [Users, setUsers] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:8081/users')
        .then(res => setUsers(res.data))
        .catch(err => console.log(err));
    }, [])

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <Link to="/create" className='btn btn-success'>Add +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>email</th>
                            <th>first_name</th>
                            <th>last_name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Users.map((data, i) => (
                            <tr key={i}>
                                <td>{data.id}</td>
                                <td>{data.email}</td>
                                <td>{data.first_name}</td>
                                <td>{data.last_name}</td>
                                <td>
                                    <Link to={`update/${data.id}`} className='btn btn-primary'>Update</Link>
                                    <button className='btn btn-danger ms-2'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default User