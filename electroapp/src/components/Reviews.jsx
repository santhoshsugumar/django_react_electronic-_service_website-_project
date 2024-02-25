import React, { useEffect, useState } from 'react'
import default1 from '../Image/default.png'
import axios from 'axios'

const Reviews = () => {
    const [review, setreview] = useState([])
    const [addReview, setaddReview] = useState({
        'message': ''
    })
    const handlechange = (e) => {
        setaddReview({ ...addReview, [e.target.name]: e.target.value })
    }

    const prereview = () => {
        addreview(addReview.message)
    }

    const addreview = (message) => {
        axios.post('http://127.0.0.1:8000/review', {
            review_message: message
        })
    }
    const fetchdata = async () => {
        try {

            let response = await axios.get('http://127.0.0.1:8000/review')
            setreview(response.data)
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchdata()
    }, [])
    return (
        <div>
            <h1 className='text-center mt-5'><span className='text-primary'>Customer</span>Review</h1>
            <div className="d-flex gap-3 ps-5">
                <div className='p-3 bg-info w-25 d-grid gap-2 text-center' style={{ marginTop: '2rem' }}>
                    <img className='m-auto rounded-circle' src={default1} height={50} width={50} alt="" />
                    <textarea placeholder='type something' onChange={handlechange} name='message' cols="30" rows="5"></textarea>
                    <button className='btn btn-dark' onClick={prereview}>Send</button>
                </div>

                {review.map((i) => {
                    return (

                        <div className='p-3 bg-info w-25 d-grid gap-2 text-center' style={{ marginTop: '2rem' }}>
                            <img className='m-auto rounded-circle' src={default1} height={50} width={50} alt="" />

                            <p className='h-100'>{i.review_message}</p>

                        </div>
                    )
                })}



            </div>
        </div>
    )
}

export default Reviews
