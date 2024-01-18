import React from 'react'
import './home.css'
const Home = () => {
  return (
    <div className='home d-flex justify-content-center align-items-center'>
      <div className="container d-flex justify-content-center align-items-center flex-column "> 
       <h1 className="text-center">This is TodoApp <br/>
       for write something in mind!!!
       </h1 >
       <p>Be focus on your work <br/>
       without waste your time
       </p>
       <button className='home-btn p-2'>Make Todo</button>
      </div>
     
    </div>
  )
}

export default Home
