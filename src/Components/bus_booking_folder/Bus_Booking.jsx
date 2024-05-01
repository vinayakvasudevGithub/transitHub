import React from 'react'

const Bus_Booking = () => {
  return (
    <>
      <div className='bg-red-300 flex justify-center space-x-2'>
          <div className='category_of_booking_bus'>
              <h3>from</h3>
              <h1>delhi</h1>
              <h3>india</h3>
          </div>
          <div className='category_of_booking_bus'>
              <h3>to</h3>
              <h1>mumbai</h1>
              <h3>india</h3>
          </div>
          <div className='category_of_booking_bus'>
              <h3>Travel date</h3>
              <h1>30apr/24</h1>
              <h3>monday</h3>
          </div>
      </div>
      <div className='flex justify-center'>
        <button className='bg-blue-500 py-2 px-4 hover:bg-blue-700 font-bold text-white'>SEARCH</button> 
      </div>
      
    </>
  )
}

export default Bus_Booking