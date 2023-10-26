import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { env } from "./config";
import { useFormik } from "formik";

function EditUser() {
  const params = useParams();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      age: "",
      startdate: "",
      salary: "",
    },
    validate: (values) => {
      let errors = {};

      if (values.name === "") {
        errors.name = "Please Enter name";
      }
      if (values.position === "") {
        errors.position = "Please Enter Position";
      }

      if (values.office === "") {
        errors.office = "Please Enter Office";
      }

      if (values.age === "") {
        errors.age = "Please Enter Age";
      }

      if (values.startdate === "") {
        errors.startdate = "Please Enter Startdate";
      }

      if (values.salary === "") {
        errors.salary = "Please Enter Salary";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        await axios.put(`${env.api}/user/${params.id}`, values, {
          headers: {
            Authorization: window.localStorage.getItem("app-token"),
          },
        });
        navigate("/portal/users"); // Redirect after successful update
      } catch (error) {
        console.error(error);
      }
    },
  });

  useEffect(() => {
    loadUser();
  }, []);

  let loadUser = async () => {
    try {
      let user = await axios.get(`${env.api}/user/${params.id}`, {
        headers: {
          Authorization: window.localStorage.getItem("app-token"),
        },
      });
      formik.setValues({
        name: user.data.name,
        position: user.data.position,
        office: user.data.office,
        age: user.data.age,
        startdate: user.data.startdate,
        salary: user.data.salary,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                name="name"
              />
              <span style={{ color: "red" }}>{formik.errors.name}</span>
            </div>
            <div className="col-lg-6">
              <label>Position</label>
              <input
                className="form-control"
                type="text"
                value={formik.values.position}
                onChange={formik.handleChange}
                name="position"
              />
              <span style={{ color: "red" }}>{formik.errors.position}</span>
            </div>
            <div className="col-lg-6">
              <label>Office</label>
              <input
                className="form-control"
                type="text"
                value={formik.values.office}
                onChange={formik.handleChange}
                name="office"
              />
              <span style={{ color: "red" }}>{formik.errors.office}</span>
            </div>
            <div className="col-lg-6">
              <label>Age</label>
              <input
                className="form-control"
                type="text"
                value={formik.values.age}
                onChange={formik.handleChange}
                name="age"
              />
              <span style={{ color: "red" }}>{formik.errors.age}</span>
            </div>
            <div className="col-lg-6">
              <label>Start Date</label>
              <input
                className="form-control"
                type="text"
                value={formik.values.startdate}
                onChange={formik.handleChange}
                name="startdate"
              />
              <span style={{ color: "red" }}>{formik.errors.startdate}</span>
            </div>
            <div className="col-lg-6">
              <label>Salary</label>
              <input
                className="form-control"
                type="text"
                value={formik.values.salary}
                onChange={formik.handleChange}
                name="salary"
              />
              <span style={{ color: "red" }}>{formik.errors.salary}</span>
            </div>
            <div className="col-lg-6">
              <button
                className="btn btn-primary mt-2"
                type="submit"
                value="submit"
                disabled={!formik.isValid}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditUser;
