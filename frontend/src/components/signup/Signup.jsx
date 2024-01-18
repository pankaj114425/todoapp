// import React from 'react'
// import './signup.css'
// const Signup = () => {
//   return (
//     <div className='signup'>
//      <div className="container">
//         <div className="row">
//             <div className="col-lg-8 column d-flex justify-content-center align-items-center">  
//                <div className='d-flex flex-column w-100 p-5'>
//                 <input 
//                 className='p-2 my-3 input-signup'
//                  type='email'
//                  name='email'
//                   placeholder='enter your email'
//                   />
//                   <input 
//                 className='p-2 my-3 input-signup'
//                  type='username'
//                  name='username'
//                   placeholder='enter username'
//                   />
//                   <input 
//                 className='p-2 my-3 input-signup'
//                  type='password'
//                  name='password'
//                   placeholder='enter password'
//                   />
//                   <button className=' btn-signup p-2'> Sign Up</button>
//                </div>
//              </div>
//             <div className="col-lg-4 column col-left  d-flex justify-content-center align-items-center"> 
//             <h2 className='text-center sign-up-heading'>SIGN <br/> UP</h2> 
//              </div>
              
//         </div>
//      </div>
//     </div>
//   )
// }

// export default Signup


import React, { useState } from 'react';
import './signup.css';
import Heading from './Heading'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate=useNavigate();
  const[input,setinput]=useState(
    {email:"" ,
     username:"",
    password:""
  });
  const change=(e)=>{
     const {name,value} =e.target;
     setinput({...input,[name]:value})
  }
  const sumbit=async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:3000/api/v1/register",input)
             .then((res)=>{
              if(res.data.message === "user already exist"){
                alert(res.data.message);
              }
              else{
                alert(res.data.message);
      setinput({email:"" ,
      username:"",
     password:""
 });
 navigate("/signin");
}
   })
    
  }
  return (
    <div className='signup'>
      <div className="container ">
        <div className="row">
          <div className="column d-flex justify-content-center align-items-center">
            <div className='d-flex flex-column sign-up-content p-5'>
              <Heading first="SIGN" second="UP"/>
              <input
                className='p-2 my-3 input-signup'
                type='email'
                name='email'
                placeholder='Enter your email'
                onChange={change}
                value={input.email}
              />
              <input
                className='p-2 my-3 input-signup'
                type='username'
                name='username'
                placeholder='Enter username'
                onChange={change}
                value={input.username}
              />
              <input
                className='p-2 my-3 input-signup'
                type='password'
                name='password'
                placeholder='Enter password'
                onChange={change}
                value={input.password}
              />
              <button className='btn-signup p-2' onClick={sumbit}>Sign Up</button>
            </div>
          </div>
          {/* <div className="col-lg-4 column col-left d-flex justify-content-center align-items-center"> */}
            {/* Leave this column empty */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Signup;
