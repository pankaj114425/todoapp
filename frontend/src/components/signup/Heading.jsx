import React from 'react'
import './signup.css'
const Heading = ({first,second}) => {
  return (
    <div>
       <h2 className='text-center mb-4 sign-up-heading'>{first} {second}</h2>
    </div>
  )
}

export default Heading
