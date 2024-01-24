import React, { useState } from 'react'
import './Login.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import Auth from '../Components/Auth';

function Login() {
    const [emailValid,setEmailValid]=useState(false)
    const [passValid,setPassValid]=useState(false)
    const [inputs,setInputs]=useState({
      username:"",email:"",password:""
    })
    
    const setData=(e)=>{
    const {name,value}=e.target
    
    if(name=='email'){
      if(value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
        setEmailValid(false)
      }
      else{
        setEmailValid(true)
      }
    }
    if(name=='password'){
      if(value.match(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)){
        setPassValid(false)
      }
      else{
        setPassValid(true)
      }
    }
    setInputs({...inputs,[name]:value})
    }
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className='input-box'>
                <input onChange={(e)=>setData(e)} name='email' type="email" placeholder='E-mail'  />
                <FaUser className='icon' />
            </div>
            {
        emailValid &&
        <div>
          <p className='invalid mail'> Invalid E-mail address</p>
        </div>
      }
            <div className='input-box'>
                <input onChange={(e)=>setData(e)} name='password' type="password" placeholder='Password'  />
                <FaLock  className='icon'/>

            </div>
            {
        passValid &&
        <div>
          <p className='invalid'> Invalid Password</p>
        </div>
      }
            <div className='remember-forgot'>
                <label> <input type="checkbox" />Remember me</label>
                <a href="#">Forgot password?</a>

            </div>
            <button type ="submit">Login</button>

            <div className='or' >
                <hr />
                <h3>OR</h3>
                <hr />
            </div>
            
        <div >
            <Auth/>
        </div>
        </form>

    </div>
  )
}

export default Login