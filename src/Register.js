import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { env } from "./config";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

function Register() {
  let navigate = useNavigate();

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        let registrationData = await axios.post(`${env.api}/register`, values);
        if (registrationData.status === 200) {
          setRegistrationSuccess(true); // Set registration success state
          formik.resetForm(); // Clear form fields
        }
        console.log(registrationData);
      } catch (error) {
        alert(error.response.data.message);
      }
    },
  });

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-100 w-md-75 w-lg-50 m-4">
        <h2>Register</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="form-control rounded-0"
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="form-control rounded-0"
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="form-control rounded-0"
            ></input>
          </div>
          <div className="d-flex justify-content-center">
            {" "}
            {/* Centering div */}
            <button type="submit" className="btn btn-success mb-3">
              Register
            </button>
          </div>
          <p className="text-center">Already have an account?</p>
          <div className="d-flex justify-content-center">
            {" "}
            {/* Centering div */}
            <Link to="/" className="btn btn-primary mb-3">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
