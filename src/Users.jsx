import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Users() {
    const [users,setUsers]=useState([{
        Name:"sathish",
        Email:"sathishfreelanc5@gmail.com",
        Age:26
    }])
  return (
    <>
        <section>
            <div className='container'>
                 <div className='row'>
                     <div className='col-md-12'>
                            <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
                                <div className='w-50 bg-white round p-3'>
                                    <Link to="/create" className='btn btn-success'>Add +</Link>
                                    <table className='table'>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Age</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                users.map((user)=>{
                                                return <tr>
                                                        <td>{user.Name}</td>
                                                        <td>{user.Email}</td>
                                                        <td>{user.Age}</td>
                                                        <td>
                                                            <Link to="/update" className='btn btn-success'>EDIT</Link>
                                                            <button className='btn btn-danger'>DELETE</button>
                                                        </td>
                                                    </tr>
                                                })
                                           
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                     </div>
                 </div>
            </div>
        </section>
    </>
  )
}

export default Users;