import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = ({display,update}) => {
  useEffect(()=>{
  setinput({title:update.title,body:update.body})
  },[update]);

  const[input,setinput]=useState({title:"",body:""});
  const change =(e)=>{
           const {name,value}=e.target;
           setinput({...input,[name]:value});
  }
  const sumbit=async()=>{
    // console.log(input);
    await  axios.put(`http://localhost:3000/api/v2/updatetask/${update._id}`,input)
    .then(()=>toast.success("your task is updated"));
    display("none");
  }
  return (
    <div className='p-5 d-flex justify-content-center align-items-start flex-column update'>
      <h4>Update your task </h4>
      <input type="text" className='todo-input my-4 w-100 p-3' value={input.title} onChange={change} name='title' />
      <textarea className='todo-input w-100 p-3' value={input.body} onChange={change} name='body'/>
      <div>
      <button className='btn btn-dark my-4 ' onClick={sumbit}> Update </button>
      <button className='btn btn-primary my-4 mx-4' onClick={()=>{display("none")}}> close </button>
      </div>
    </div>
  )
}

export default Update
