import React, { useState } from 'react'
import Footer from './Footer'
import axios from 'axios'
const Booking = () => {

  const [book, setbook] = useState({
    "customer_name": "",
    "email_ID" : "",
    "phone_number" : "",
    "address" : "",
    "city" : "",
    "state" : "",
    "pin_code" : "",
    "request_Type" : "",
    "description" : "",
    "date" : "",
  })

  const handlechange = (e) => {
    setbook({ ...book, [e.target.name]: e.target.value })
    console.log(book);
  }

  const preaddbook = () => {
         addbook(book.customer_name, book.email_ID,book.phone_number,book.address,book.city,book.state,book.pin_code,book.request_Type,book.description,book.date)
           
  }
  const addbook = async (customer_name, email_ID,phone_number,address,city,state,pin_code,request_Type,description,date) => {
    await axios.post('http://127.0.0.1:8000/', {
      customer_name: customer_name,
      email_ID: email_ID,
      phone_number: phone_number,
      address: address,
      city: city,
      state: state,
      pin_code: pin_code,
      request_Type: request_Type,
      description: description,
      date: date,
    }).then(res =>{
      console.log(res);
    })
  }
  return (
    <div>
      <div className='mt-5 text-center rounded shadow p-4 w-50 m-auto d-grid gap-3'>
        <h1>Request an Appointment</h1>
        <input onChange={handlechange} type="text" placeholder='Name' name='customer_name' />
        <input onChange={handlechange} type="email" placeholder='EmailId' name='email_ID' />
        <input onChange={handlechange} type="number" placeholder='Phone No' name='phone_number' />
        <input onChange={handlechange} type="text" placeholder='Address' name='address' />
        <div className='d-flex gap-3'>
          <input onChange={handlechange} type="text" placeholder='City' name='city' /><input onChange={handlechange} type="text" placeholder='State' name='state' /><input onChange={handlechange} type="number" placeholder='Pincode' name='pin_code' />
        </div>
        <select onChange={handlechange} name="request_Type" id="">
          <option value="please choose a service">please choose a service</option>
          <option value="Laptop">Laptop</option>
          <option value="Tv">Tv</option>
          <option value="Smartphone">Smartphone</option>
          <option value="Wifi">Wifi</option>
          <option value="AC">AC</option>
        </select>
        <textarea onChange={handlechange} placeholder='Description' name='description' cols="5" rows="5"></textarea>
        <input onChange={handlechange} type="text" placeholder='YYYY/MM/DD' name='date' />
        <button className='bg-success' onClick={preaddbook}>Submit Request</button>
      </div>
      <Footer />
    </div>
  )
}

export default Booking
