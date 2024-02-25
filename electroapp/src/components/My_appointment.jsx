import axios from 'axios'
import React, { useEffect, useState } from 'react'

const My_appointment = (props) => {
  const [books,setBooks] = useState([])

  const fetchdata = async () =>{
    try {
      
      let response= await axios.get('http://127.0.0.1:8000/appointment')
      setBooks(response.data)
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    fetchdata()
  }, [])

  const deletedata = async(id)=>{
    try {
      
      await axios.delete(`http://127.0.0.1:8000/deletebook/${id}`)
      fetchdata()
      
    } catch (error) {
      console.error(error);
    }
  }


  let user = localStorage.getItem('user')
  const userdata = user ? JSON.parse(user) : null

  return (
    <div>
      <h1>My Appointments</h1>
      <div className='d-flex flex-wrap gap-3'>

        {books.map((i) => (
          userdata && i.connect === userdata.id &&

          <div key={i.id} className='d-grid bg-info gap-3 p-4 rounded shadow'>
            <p>Request type:{i.request_Type} </p>
            <p>Name:{i.customer_name}</p>
            <p>PhoneNumber:{i.phone_number}</p>
            <p>appointment date:{i.date}</p>
            <div className='d-flex gap-3'>
              <button>view</button>
              <button onClick={()=>{deletedata(i.id)}}>Delete</button>
            </div>
          </div>
        )
        )}



      </div>
    </div>
  )
}

export default My_appointment
