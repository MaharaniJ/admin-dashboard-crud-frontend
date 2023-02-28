import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


function Users() {
    const [users, setUsers] = useState([])
    const [isLoading, setLoading] = useState(false)
    
    useEffect(() => {
        loaddata()

    }, [])

    let loaddata = async () => {
        setLoading(true)
        let users = await axios.get(`https://63fcaeb9859df29986c21a62.mockapi.io/mockapi/users`)
        setUsers(users.data)
        setLoading(false)
    }
    let userDelete = async (id)=>{
        try{
            let ask  = window.confirm("Do you want to delete?")
            if(ask){
                await axios.delete(`https://63fcaeb9859df29986c21a62.mockapi.io/mockapi/users/${id}`)
                loaddata()
            }
   
        }
        catch (error){

        }
    }

    return (
        <div className="container-fluid">
            {/* <!-- Page Heading --> */}
            <div className='d-sm-flex align-items-center justify-content-between mb-4'>
               <h1 className="h3 mb-0 text-gray-800">Users</h1>
                <Link to="/portal/createuser" className={"d-none d-sm-inline-block btn-sm btn-primary shadow-sm"}>
                        <li className='fas fa-download fa-sm text-white-50'></li>Create User</Link>
            </div>
            {/* <!-- DataTales --> */}
            {
                isLoading? <span>Loading...</span>:
                <div className="card shadow mb-4">
                <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">DataTables</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>#Sl</th>
                                        <th>Name</th>
                                        <th>Position</th>
                                        <th>Office</th>
                                        <th>Age</th>
                                        <th>Start date</th>
                                        <th>Salary</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>#Sl</th>
                                        <th>Action</th>
                                        <th>Name</th>
                                        <th>Position</th>
                                        <th>Office</th>
                                        <th>Age</th>
                                        <th>Start date</th>
                                        <th>Salary</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {
                                        users.map((user, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.position}</td>
                                                    <td>{user.office}</td>
                                                    <td>{user.age}</td>
                                                    <td>{user.startdate}</td>
                                                    <td>${user.salary}</td>
                                                   <td> <Link to={`/portal/users/${user.id}`} className='btn btn-sm btn-warning mr-2'>View</Link>
                                                    <Link to={`/portal/users/edit/${user.id}`} className='btn btn-sm btn-primary mr-2'>Edit</Link>
                                                    <button onClick={()=>userDelete(user.id)} className='btn btn-sm btn-danger mr-2'>Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            }
        </div>
        // <!-- /.container-fluid -->


    )
}

export default Users;
