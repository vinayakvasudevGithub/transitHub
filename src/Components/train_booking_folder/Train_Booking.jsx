import React, { useState } from 'react'

const Train_Booking = () => {

    const [show,setshow]=useState(false)
    const to_display_inputbox=()=>{
        console.log('car')
    }

  return (

    <>
    <div className='bg-red-300 flex justify-center space-x-2'>
        <div onClick={()=>to_display_inputbox()} className='category_of_booking_train'>
            <h3>from</h3>
            <h1>Delhi</h1>
            <h3>India</h3>
        </div>
        <div className='category_of_booking_train'>
            <h3>To</h3>
            <h1>mumbai</h1>
            <h3>India</h3>
        </div>
        <div className='category_of_booking_train'>
            <h3>Travel date</h3>
            <h1>30apr/24</h1>
            <h3>monday</h3>
        </div>
        <div className='category_of_booking_train'>
            <h3>Class</h3>
            <h1>All</h1>
            <h3>All class</h3>
        </div>
    </div>
        <div className='flex justify-center'>
            <button className='bg-blue-500 py-2 px-4 hover:bg-blue-700 font-bold text-white'>SEARCH</button> 
        </div>


    </>
  )
}

export default Train_Booking