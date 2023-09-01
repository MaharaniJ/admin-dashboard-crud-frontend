// import React from 'react';
// import { useFormik } from 'formik';
// import {  useNavigate } from 'react-router-dom';
// import { env } from './config';
// import axios from 'axios';

//  function Login() {
//      let navigate = useNavigate();
// //     let login = () => {
// //         navigate("/")

// //     }
// let formik = useFormik({
// initialValues : {
//     email :"",
//     password : ""
// },
// onSubmit : async (values)=>{
// try{
//    let loginData = await axios.post(`${env.api}/login`,values)
//   if(loginData.status === 200){
//     navigate('/portal/dashboard')
//     window.localStorage.setItem("app-token",loginData.data.token)
    
//   }
//    console.log(loginData)
// }
// catch(error){
// alert(error.response.data.message)
// }
// }
// })
// return (
//         <div>
//             <div className="container">

//                 {/* <!-- Outer Row --> */}
//                 <div className="row justify-content-center">

//                     <div className="col-xl-10 col-lg-12 col-md-9">

//                         <div className="card o-hidden border-0 shadow-lg my-5">
//                             <div className="card-body p-0">
//                                 {/* <!-- Nested Row within Card Body --> */}
//                                 <div className="row">
//                                     <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
//                                     <div className="col-lg-6">
//                                         <div className="p-5">
//                                             <div className="text-center">
//                                                 <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
//                                             </div>
//                                             <form className="user" onSubmit={formik.handleSubmit}>
//                                                 <div className="form-group">
//                                                     <input type="email" className="form-control form-control-user"
//                                                            value={formik.values.email} onChange={formik.handleChange} name="email"
//                                                          />
//                                                 </div>
//                                                 <div className="form-group">
//                                                     <input type="password" className="form-control form-control-user"
//                                                      value={formik.values.password} onChange={formik.handleChange}
//                                                         name="password"  />
//                                                 </div>
//                                                 <div className="form-group">
//                                                     <div className="custom-control custom-checkbox small">
//                                                         <input type="checkbox" className="custom-control-input" id="customCheck" />
//                                                         <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
//                                                     </div>
//                                                 </div>
//                                                 <button type='submit'  className="btn btn-primary btn-user btn-block">
//                                                     Login
//                                                 </button>
//                                                 <hr />
//                                                 <a href="index.html" className="btn btn-google btn-user btn-block">
//                                                     <i className="fab fa-google fa-fw"></i> Login with Google
//                                                 </a>
//                                                 <a href="index.html" className="btn btn-facebook btn-user btn-block">
//                                                     <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
//                                                 </a>
//                                             </form>
//                                             <hr />
//                                             <div className="text-center">
//                                                 <a className="small" href="forgot-password.html">Forgot Password?</a>
//                                             </div>
//                                             <div className="text-center">
//                                                 <a className="small" href="register.html">Create an Account!</a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>

//                 </div>

//             </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { env } from './config';
import axios from 'axios';

function Login() {
  let navigate = useNavigate();

  let formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (values) => {
      try {
        let loginData = await axios.post(`${env.api}/login`, values);
        if (loginData.status === 200) {
          navigate('/portal/dashboard');
          window.localStorage.setItem('app-token', loginData.data.token);
        }
        console.log(loginData);
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form className="user" onSubmit={formik.handleSubmit}>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-user"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          name="email"
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          name="password"
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-user btn-block"
                      >
                        Login
                      </button>
                    </form>
                    <hr />
                    <a
                      href="index.html"
                      className="btn btn-google btn-user btn-block"
                    >
                      <i className="fab fa-google fa-fw"></i> Login with Google
                    </a>
                    <a
                      href="index.html"
                      className="btn btn-facebook btn-user btn-block"
                    >
                      <i className="fab fa-facebook-f fa-fw"></i> Login with
                      Facebook
                    </a>
                    <hr />
                    <div className="text-center">
                      <a className="small" href="forgot-password.html">
                        Forgot Password?
                      </a>
                    </div>
                    <div className="text-center">
                      <a className="small" href="register.html">
                        Create an Account!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
