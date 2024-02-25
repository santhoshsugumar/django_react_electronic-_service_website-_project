import React, { useState } from 'react'
import default1 from '../Image/default.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Register = () => {
  const [reg,setreg] = useState({
    'username':'',
    'first_name':'',
    'last_name':'',
    'email':'',
    'password1':'',
    'password2':'',
  })
  const handlechange = (e) => {
    setreg({...reg,[e.target.name]:e.target.value})
    console.log(reg);
  }

  const adduser = (username,first_name,last_name,email,password1,password2)=>{
    axios.post('http://127.0.0.1:8000/register',{
      username: username,
      first_name: first_name,
      last_name: last_name,
      email: email,
      password1: password1,
      password2: password2,
    })
    .then((res)=>{
      console.log(res);
    })
  }

  const handleuser = () =>{
    adduser(reg.username,reg.first_name,reg.last_name,reg.email,reg.password1,reg.password2)
  }

  return (
    <div>
      <div className='mt-5 text-center rounded shadow p-4 w-50 m-auto d-grid gap-3'>
      <img className='m-auto' src={default1} height={50} width={50} alt="" />
        <h1>Register</h1>
        <input type="text" placeholder='UserName' name='username' onChange={handlechange} />
        <div className='d-flex gap-3'>
          <input type="text" placeholder='FisrtName' name='first_name' onChange={handlechange} /><input type="text" placeholder='LastName' name='last_name' onChange={handlechange} />
        </div>
        <input type="email" placeholder='EmailId' name='email' onChange={handlechange} />
        <input type="text" placeholder='Password' name='password1' onChange={handlechange} />
        <input type="email" placeholder='ConfirmPassword' name='password2' onChange={handlechange} />
        <button className='btn btn-success' onClick={handleuser}>Register</button>
        <p>Already have an account?<Link to='/login'>Sign In</Link></p>
      </div>
    </div>
  )
}

export default Register
