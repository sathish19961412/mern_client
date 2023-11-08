import React from 'react'

function UpdateUser() {
  return (
    <section>
            <div className='container'>
                 <div className='row'>
                     <div className='col-md-12'>
                            <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
                                <div className='w-50 bg-white round p-3'>
                                     <form>
                                        <h2>Update Users</h2>
                                        <div className='mb-2'>
                                            <label htmlFor=''>Name</label>
                                            <input type="text" placeholder='Enter Name' className='form-control'/>
                                        </div>
                                        <div className='mb-2'>
                                            <label htmlFor=''>Email</label>
                                            <input type="email" placeholder='Enter Email' className='form-control'/>
                                        </div>
                                        <div className='mb-2'>
                                            <label htmlFor=''>Age</label>
                                            <input type="text" placeholder='Enter Age' className='form-control'/>
                                        </div>
                                        <button className='btn btn-success'>Update</button>
                                     </form>
                                </div>
                            </div>
                     </div>
                 </div>
            </div>
        </section>
  )
}

export default UpdateUser;