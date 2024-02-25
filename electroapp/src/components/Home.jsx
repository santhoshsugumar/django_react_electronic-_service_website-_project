import React, { useState } from 'react'
import homeimage from '../Image/home-img.svg'
import homeimage1 from '../Image/about-img.svg'
import service1 from '../Image/service-1.svg'
import service2 from '../Image/service-2.svg'
import service3 from '../Image/service-3.svg'
import service4 from '../Image/service-4.svg'
import service5 from '../Image/service-5.svg'
import service6 from '../Image/service-6.svg'
import service7 from '../Image/service-6.svg'
import service8 from '../Image/service-6.svg'
import service9 from '../Image/service-6.svg'
import gallery1 from '../Image/g-img-1.jpg'
import gallery2 from '../Image/g-img-2.jpg'
import gallery3 from '../Image/g-img-3.jpg'
import gallery4 from '../Image/g-img-4.jpg'
import gallery5 from '../Image/g-img-5.jpg'
import gallery6 from '../Image/g-img-6.jpg'
import gallery7 from '../Image/g-img-7.jpg'
import gallery8 from '../Image/g-img-8.jpg'
import gallery9 from '../Image/g-img-9.jpg'

import default2 from '../Image/default.png'
import default3 from '../Image/default.png'
import default4 from '../Image/default.png'
import default5 from '../Image/default.png'
import Footer from './Footer'
import axios from 'axios'
import Reviews from './Reviews'

const Home = () => {
  const service = [
    {
      'img': service1,
      'title': 'Computer Repair'
    },
    {
      'img': service2,
      'title': 'Laptop Repair'
    },
    {
      'img': service3,
      'title': 'Smartphone Repair'
    },
    {
      'img': service4,
      'title': 'Gameconsole Repair'
    },
    {
      'img': service5,
      'title': 'Multimedia Repair'
    },
    {
      'img': service6,
      'title': 'Smartwatch Repair'
    },
    {
      'img': service7,
      'title': 'Projector Repair'
    },
    {
      'img': service8,
      'title': 'Tv Repair'
    },
    {
      'img': service9,
      'title': 'WifiRouter Repair'
    },
  ]
  const Gallery = [
    {
      'img': gallery1,
    },
    {
      'img': gallery2,
    },
    {
      'img': gallery3,
    },
    {
      'img': gallery4,
    },
    {
      'img': gallery5,
    },
    {
      'img': gallery6,
    },
    {
      'img': gallery7,
    },
    {
      'img': gallery8,
    },
    {
      'img': gallery9,
    },
  ]
  const expert = [
    {
      'img': default2,
      'name': 'sridhar',
      'title': 'Electronic Expert'
    },
    {
      'img': default3,
      'name': 'santhosh',
      'title': 'Electronic Expert'
    },
    {
      'img': default4,
      'name': 'malik',
      'title': 'Electronic Expert'
    },
    {
      'img': default5,
      'name': 'harish',
      'title': 'Electronic Expert'
    },
  ]

 

 
  const [Contact,setcontact] = useState({
    'name':'',
    'emailid':'',
    'phonenumber':'',
    'subject':'',
    'message':''
  })

  const handlechangecontact = (e) => {
    setcontact({...Contact,[e.target.name]:e.target.value})
  }

  const precontact =() => {
    addcontact(Contact.name,Contact.emailid,Contact.phonenumber,Contact.subject,Contact.message)
  }

  const addcontact=(name,emailid,phonenumber,subject,message)=>{
    axios.post('http://127.0.0.1:8000/contact', {
      name:name,
      email_ID:emailid,
      phone_number:phonenumber,
      subject:subject,
      message:message
    })
  }

  return (
    <div>
      <div className='d-flex gap-3 home'>
        <div>
          <img src={homeimage} height={600} width={600} alt="" />
        </div>
        <div className='p-5 pt-0' style={{ marginTop: '10rem' }}>
          <h1 className='title'>Why Fix It Yourself? <br />Leave It To The Pros.</h1>
          <p>Our technicians are highly courteous and trained with multiple years of industry experience. Highest quality spare parts are used for all our jobs.</p>
          <button className='button'>GET STARTED</button>
        </div>
      </div>
      <div className='d-flex gap-3 mt-5 about'>
        <div className='p-5' style={{ marginTop: '12rem' }}>
          <h2>Best Quality Repair Services</h2>
          <p>Welcome to Electronics Services we are one of the leading home appliance service providers in all over India. Our company provides a full range of services for the repair of household appliances of almost all brands and models of both domestic and imported production.</p>
          <p>We offering complete repairing services for various electronic items such as Laptops, Smartphone, Multi Media, Wifi Router, Projector and many more.</p>
          <button>Read More</button>
        </div>
        <div>
          <img src={homeimage1} height={600} width={600} alt="" />
        </div>
      </div>
      <div className='container mt-5'>
        <h1 className='text-center'><span className='text-primary'>our</span>services</h1>
        <div className="d-flex gap-3 flex-wrap">
          {service.map((i) => {
            return (
              <div className='border border-3 border-dark p-3 text-center' style={{ width: '18%' }}>
                <img src={i.img} height={100} width={100} alt="" />
                <h3>{i.title}</h3>
                <button>Book Now</button>
              </div>
            )
          })}
        </div>
      </div>
      <div className='mt-5 gallery'>
        <h1 className='text-center'>Gallery</h1>
        <div className="d-flex gap-3 flex-wrap">
          {Gallery.map((i) => {
            return (
              <div className=' p-4 text-center' style={{ width: '18%' }}>
                <img src={i.img} height={200} width={200} alt="" />
              </div>
            )
          })}
        </div>
      </div>
      <Reviews/>
      <div className='mt-5 expert'>
        <h1 className='text-center'><span className='text-primary'>Our Expert</span>Team</h1>
        <div className="d-flex gap-3 ps-10">
          {expert.map((i) => {
            return (
              <div className='p-5 text-center' style={{ width: '18%' }}>
                <img src={i.img} height={50} width={50} alt="" />
                <h3>{i.name}</h3>
                <p>{i.title}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className='mt-5'>
        <h1 className='text-center'><span className='text-primary'>Contact</span>Us</h1>
        <div className='d-flex gap-3'>
          <div className='w-50'>
            <iframe className='w-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31099.511510390734!2d77.5467177410935!3d13.007696437883085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d7fff79cfc3%3A0xdfbaac7a46a4a5be!2sMalleshwara%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1706089169633!5m2!1sen!2sin" width={600} height={450} style={{ border: '0' }} llowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='w-50 d-grid gap-3 border border-3 p-5' style={{ marginTop: '1rem' }}>
            <h3>Get In Touch</h3>
            <div className='d-flex gap-3'>
            <input className='w-100' type="text" name='name' placeholder='Name'onChange={handlechangecontact} />
            <input className='w-100' type="email" name='emailid' placeholder='EMAIL ID' onChange={handlechangecontact}/>
            </div>
            <div className='d-flex gap-3'>
            <input className='w-100' type="number" name='phonenumber' placeholder='PHONE NUMBER' onChange={handlechangecontact} />
            <input className='w-100' type="text" name='subject' placeholder='SUBJECT' onChange={handlechangecontact} />
            </div>
            <textarea placeholder='MESSAGE' onChange={handlechangecontact} name="message" cols="30" rows="10"></textarea>
            <button onClick={precontact}>Send Messages</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
