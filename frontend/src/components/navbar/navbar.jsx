import React from 'react'
import'./navbar.css'
import { GiOpenBook } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/slice';

const Navbar = () => {
  const isloggedin = useSelector((state) => state.isloggedin);
  const dispatch=useDispatch();
  // console.log(isloggedin);
  const logout =()=>{
    sessionStorage.clear("id");
    dispatch(authActions.logout());
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
  <div className="container">
    <Link className="navbar-brand" to="#"><b> <GiOpenBook/> &nbsp; TODOAPP</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link active" aria-current="page" to="/about">AboutUS</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link active" aria-current="page" to="/todo">Todo</Link>
        </li>
        {!isloggedin && <>
          <li className="nav-item mx-2">
          <Link className="nav-link active btn-nav" aria-current="page" to="/signup">signup</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link active btn-nav" aria-current="page" to="/signin">signin</Link>
        </li>
        </>}

        {isloggedin &&  <li className="nav-item mx-2"  onClick={logout}>
          <Link className="nav-link active btn-nav" aria-current="page" to="#">Logout</Link>
         
        </li>}
      
       
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar

