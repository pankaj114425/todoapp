import React from 'react'
import './todo.css'
import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
const Todocards = ({title,body,id,delid,display,updateid,tobeupdate}) => {
  return (
    <div className='todo-card p-3'>
     <div>
        <h5>{title}</h5>
        <p className='todo-p'>
            {body.split("",77)}....
        </p>
     </div>
     <div className='d-flex justify-content-evenly '>
     <div className='d-flex justify-content-center align-items-center card-item-head px-2 py-1'
     onClick={()=>{display("block") ;tobeupdate(updateid) }}
     >
      <GrDocumentUpdate className='card-icon'/> Update
      </div>
     <div className='d-flex justify-content-center align-items-center card-item-head px-2 py-1 text-danger' onClick={()=>{delid(id)}}>
      <MdDelete className='card-icon del'/> Delete
      </div>
     </div>
    </div>
  )
}

export default Todocards
