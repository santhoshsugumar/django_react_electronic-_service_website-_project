import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    const [subscribe,setsubscribe] = useState({
        'email':''
      })
      const handlechange = (e) => {
        setsubscribe({...subscribe,[e.target.name]:e.target.value})
      }
      const presubscribe =() => {
        addsubscribe(subscribe.email)
      }

      const addsubscribe=(email)=>{
        axios.post('http://127.0.0.1:8000/subscriber', {
            email_ID:email
        })
      }
    return (
        <div className='py-5'>
            <div className=' d-flex gap-3'>
                <div className='d-grid gap-3 p-4 ' style={{ width: '30%' }}>
                    <h4>Quick links</h4>
                    <Link> Home </Link>
                    <Link> About </Link>
                    <Link> Service </Link>
                    <Link> Gallery </Link>
                    <Link> Reviews </Link>
                    <Link> Contacts </Link>     
                </div>
                <div className='d-grid gap-3 p-4 ' style={{ width: '30%' }}>
                    <h4>Contact Info</h4>
                    <Link>+91-8056850512</Link>
                    <Link>+91-9798979897</Link>
                    <Link>sandozsugumar@gmail.com</Link>
                    <Link>Banglore,India-400104</Link>
                </div>
                <div className='d-grid gap-2 p-3 ' style={{ width: '30%' }}>
                    <h4>NewsLetter</h4>
                    <p>Subscribe for latest updates</p>
                    <input type="email" placeholder='Enter your email' onChange={handlechange} name='email'/>
                    <button className='bg-success' onClick={presubscribe}>Subscribe</button>
                </div>

            </div>
            <hr />
            <div className='text-center'>
                <h4>Login as Admin</h4>
            </div>
        </div>
    )
}

export default Footer
