import React, { useState } from 'react'
import Back from "../common/back/Back"
import "../contact/contact.css"
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from './login-illus.jpg'
import { AiFillEye } from "react-icons/ai";

const Login = () => {
  const navigate = useNavigate();
  const [btnLoading, setBtnLoading] = useState(false);
  const [passShow, setPassShow] = useState(false);
  const [formDetails, setFormDetails] = useState({
    inputField: "",
    password: "",
  });
  return (
    <>
      <></>
      <Back title='Login' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <img alt="" className="il" src={image}></img>
          </div>
          <div className='right row'>
            <h1 className='login_header'>Login with us</h1>
            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Email'
                  name='inputField'
                  value={formDetails.inputField}
                  //onChange={inputChange}
                  required
                />

              </div>
              <input placeholder='Password'
                type={passShow ? "text" : "password"}
                name="password"
                value={formDetails.password}
                //onChange={inputChange}
                className="input-field"
                minLength="5"
                required
              />

              <button type="submit" className={` primary-btn btn auth-btn
               ${btnLoading ? "disable-btn" : ""}`}>
               {/* {btnLoading ? "Logging In..." : "Login"} */}
                LOGIN</button>
            </form>

            <p>
              Don't have an account?{" "}
              <Link to='/register'>Register</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
