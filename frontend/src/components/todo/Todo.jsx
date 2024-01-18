import React, { useEffect, useState } from 'react'
import './todo.css'
import Todocards from './Todocards';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './Update';
import axios from 'axios';
let id=sessionStorage.getItem("id");
let toupdatearray=[]
// console.log(id);
const Todo = () => {

    const[input,setInput]=useState({title:"",body:""});
    const[array,setarray]=useState([]);
    
    const show =()=>{
        document.getElementById("textarea").style.display="block"
    }
    const change=(e)=>{
         const {name,value}=e.target;
         setInput({...input,[name]:value})
    }
    const sumbit=async()=>{
        // console.log(input);
        if(input.title === "" || input.body === ""){
          toast.error("title or body should not be empty?");
        }
        else{
          if(id){
            await axios.post("http://localhost:3000/api/v2/addtask",{title:input.title,body:input.body,id:id})
            .then((res)=>console.log(res));
           
            setInput({title:"",body:""});
            toast.success("your task is added");
            // toast.error("your task is not saved please signup");
          }
          else{
            setarray([...array,input]);
            setInput({title:"",body:""});
            toast.success("your task is added");
            toast.error("your task is not saved please signup");
          }
         
        }

    }
    const del=async(cardid)=>{
      if(id){
        await  axios.delete(`http://localhost:3000/api/v2/deletetask/${cardid}`,{data:{id:id}})
      .then(()=>{
        toast.success("your task is deleted ");
      })
      }
      else{
        toast.error("please signup ");
      }
      

      //  array.splice(id,"1");
      //  setarray([...array]);

    } //this is prop uplifting children to parent
  
     const dis =(value)=>{
      // console.log(value);
      document.getElementById("todoupdate").style.display=value
     };
     const update=(value)=>{
      toupdatearray=array[value];
     }
     useEffect(()=>{   // setarray([...array,input]);
      if(id){
        const fetch =async()=>{
          await  axios.get(`http://localhost:3000/api/v2/gettask/${id}`)
          .then((res)=>{
            setarray(res.data.list);
          });
   
         }
         fetch();
      }
     
      
   },[sumbit])
  return (
    <>
    <div className='todo'>
      <ToastContainer/>
     <div className='todo-main container d-flex flex-column justify-content-center align-items-center'>
        <div className='d-flex flex-column todo-input-div w-lg-50 w-100 p-1'>
        <input type='text' onClick={show} value={input.title}  name='title' onChange={change} placeholder='title' className='my-3 p-2 todo-input'/>
        <textarea  onChange ={change} value={input.body}   name='body'  id='textarea' type='text' placeholder='Body'className='p-2 todo-input' />
        
        </div>
         <div className='w-lg-50 w-100 d-flex justify-content-end my-3'>
         <button className='home-btn px-2 py-1' onClick={sumbit}>Add-todo</button>
         </div>
     </div>
     <div className="todo-body">
        <div className="container-fluid">
            <div className='row '>
                 
                 {array && array.map((item,index)=>{
              return  <div  className="col-lg-3 col-11 mx-lg-5 mx-3 my-2" key={index}>
                <Todocards title={item.title} body={item.body} id={item._id} delid={del} display={dis} updateid={index} tobeupdate={update}/>
                </div>
            })}
          
          </div>
            
        </div>
     </div>
    </div>
    <div className=" todoupdate " id='todoupdate'>
      <div className='container update'>
      <Update display={dis} update={toupdatearray}/>
      </div>
    </div>
    </>
  )
}

export default Todo
