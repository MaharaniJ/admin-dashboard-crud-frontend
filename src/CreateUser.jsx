import { useFormik } from 'formik';
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { env } from './config';

function CreateUser() {
    const navigate = useNavigate()
    const formik = useFormik({

        initialValues: {
            name: '',
            position: '',
            office: '',
            age: '',
            startdate: '',
            salary: ''
        },
        validate: (values) => {
            let errors = {}

            if (values.name === "") {
                errors.name = "Please Enter name"
            }
            if (values.position === "") {
                errors.position = "Please Enter Position"
            }

            if (values.office === "") {
                errors.office = "Please Enter Office"
            }


            if (values.age === "") {
                errors.age = "Please Enter Age"
            }


            if (values.startdate === "") {
                errors.startdate = "Please Enter Startdate"
            }

            if (values.salary === "") {
                errors.salary = "Please Enter Salary"
            }
            return errors;
        },
        //https://63fcaeb9859df29986c21a62.mockapi.io/mockapi
        onSubmit: async (values) => {
            let user = await axios.post(`${env.api}/user`, values,{
                headers:{
                    'Authorization': window.localStorage.getItem("app-token")
                }
            })
            alert("User Created")
            navigate("/portal/users")
        }
    }

    )

    return (
        <>

            <div className='container'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='row'>

                        <div className='col-lg-6'>
                            <label>name</label>
                            <input
                                className='form-control'
                                type={"text"}
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                name="name">
                            </input>
                            <span style={{ color: 'red' }}>{formik.errors.name}</span>
                        </div>
                        <div className='col-lg-6'>
                            <label>Position</label>
                            <input className='form-control'
                                value={formik.values.position}
                                onChange={formik.handleChange}
                                name="position"
                                type={"text"}>
                            </input>
                            <span style={{ color: 'red' }}>{formik.errors.position}</span>
                        </div>
                        <div className='col-lg-6'>
                            <label>Office</label>
                            <input className='form-control'
                                type={"text"}
                                value={formik.values.office}
                                onChange={formik.handleChange}
                                name="office"
                            ></input>
                            <span style={{ color: 'red' }}>{formik.errors.office}</span>
                        </div>
                        <div className='col-lg-6'>
                            <label>Age</label>
                            <input className='form-control'
                                value={formik.values.age}
                                onChange={formik.handleChange}
                                name="age"
                                type={"text"}></input>
                            <span style={{ color: 'red' }}>{formik.errors.age}</span>
                        </div>
                        <div className='col-lg-6'>
                            <label>Start Date</label>
                            <input className='form-control'
                                value={formik.values.startdate}
                                onChange={formik.handleChange}
                                name="startdate"
                                type={"text"}></input>
                            <span style={{ color: 'red' }}>{formik.errors.startdate}</span>
                        </div>

                        <div className='col-lg-6'>
                            <label>Salary</label>
                            <input className='form-control'
                                value={formik.values.salary}
                                onChange={formik.handleChange}
                                name="salary"
                                type={"text"}></input>
                            <span style={{ color: 'red' }}>{formik.errors.salary}</span>
                        </div>

                        <div className='col-lg-6'>
                            <button className='btn btn-primary mt-2'
                                type={"submit"} value={"submit"} disabled={!formik.isValid}>submit</button>
                        </div>

                    </div>
                </form>
            </div>
        </>


    )
}

export default CreateUser;