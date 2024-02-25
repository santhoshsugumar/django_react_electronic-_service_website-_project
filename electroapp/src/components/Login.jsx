import React, { useState } from 'react'
import default1 from '../Image/default.png'
import { Link, json } from 'react-router-dom'
import axios from 'axios'
import img from '../Image/suresh-raina-biography.jpg'

const Login = () => {
  const [reg,setreg] = useState({
    'username':'',
    'password':'',
  })
  const handlechange = (e) => {
    setreg({...reg,[e.target.name]:e.target.value})
    console.log(reg);
  }

  const adduser = async (username,password)=>{
    let res = await axios.post('http://127.0.0.1:8000/login',{
      username: username,
      password: password,
    })

    const {token,user_id,username:loggedInUsername,first_name,last_name,email} =res.data

    const data={
      token: token,
      id:user_id,
      username: loggedInUsername,
      first_name: first_name,
      last_name: last_name,
      email: email,
    }

    localStorage.setItem('user',JSON.stringify(data))
  let userss = localStorage.getItem('user')
  console.log(userss);
    
  }

  const handleuser = () =>{
    adduser(reg.username,reg.password)
  }

  const style ={
    backgroundImage: `url(${img})`,
    height:'100vh'
  }

  return (
    <div className='login' style={style}>
      <div className='mt-5 text-center rounded shadow p-4 w-50 m-auto d-grid gap-3'>
      <img className='m-auto' src={default1} height={50} width={50} alt="" />
        <h1>Login</h1>
        <input type="text" placeholder='UserName'onChange={handlechange} name='username' />
        <input type="text" placeholder='Password' onChange={handlechange} name='password'/>
        <button className='btn btn-success ' onClick={handleuser}>Login</button>
        <p>Don't have an account? <Link to='/register'>Sign Up</Link></p>
      </div>
    </div>
  )
}

export default Login
