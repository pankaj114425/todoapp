import React, { useEffect } from 'react'
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Signup from './components/signup/Signup';
import Signin from './components/signup/Signin';
import Todo from './components/todo/Todo';
import { useDispatch } from 'react-redux';
import { authActions } from './store/slice';
const App = () => {
  const dispatch=useDispatch();
   useEffect(()=>{
     const id=sessionStorage.getItem("id");
     if(id){
    dispatch(authActions.login());
     }
   },[])
   
  return (
    <div>

       <BrowserRouter> 
       <Navbar/>

       < Routes>

        < Route exact path='/' element={<Home/>}/>
        < Route  path='/about' element={<About/>}/>
        < Route  path='/todo' element={<Todo/>}/>
        < Route  path='/signup' element={<Signup/>}/>
        < Route  path='/signin' element={<Signin/>}/>

       </Routes>
       <Footer/>
       </BrowserRouter>
      
    
    </div>
  )
}

export default App;


