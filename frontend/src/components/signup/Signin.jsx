import React from 'react'
import './signup.css';
import Heading from './Heading';
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { authActions } from '../../store/slice';
const Signin = () => {
  const navigate=useNavigate();
  const dispatch= useDispatch();
  const[input,setinput]=useState(
    {email:"" ,
    password:""
  });

  const change=(e)=>{
    const {name,value} =e.target;
    setinput({...input,[name]:value})
 }
 const sumbit=async(e)=>{
   e.preventDefault();
   await axios.post("http://localhost:3000/api/v1/login",input)
            .then((res)=>{
          
               sessionStorage.setItem("id",res.data.others._id)
               dispatch(authActions.login());
               navigate('/todo')
             
             
     setinput({email:"" ,password:""});

  })
   
 }

  return (
    <div className='signup'>
    <div className="container ">
      <div className="row">
        <div className="column d-flex justify-content-center align-items-center">
          <div className='d-flex flex-column sign-up-content p-5'>
            <Heading first="SIGN" second="IN"/>
            <input
              className='p-2 my-3 input-signup'
              type='email'
              name='email'
              value={input.email}
              onChange={change}
              placeholder='Enter your email'
            />
           
            <input
              className='p-2 my-3 input-signup'
              type='password'
              name='password'
              value={input.password}
              onChange={change}
              placeholder='Enter password'
            />
            <button className='btn-signup p-2'onClick={sumbit}>Sign In</button>
          </div>
        </div>
        {/* <div className="col-lg-4 column col-left d-flex justify-content-center align-items-center"> */}
          {/* Leave this column empty */}
        {/* </div> */}
      </div>
    </div>
  </div>
  )
}

export default Signin
