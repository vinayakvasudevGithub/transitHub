import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Bus_Booking from './pages/Bus_Booking'
import Flight_Booking from './pages/Flight_Booking'
import Train_Booking from './pages/Train_Booking'

const Booking_Pages_Together = () => {
  return (
    <>
        <h1>transitHub</h1>
        <div className='bg-green-300 flex justify-center space-x-2'>
            <Link className='bg-blue-500 px-4 my-2 py-2' to={'flight'}>Flight</Link>
            <Link className='bg-blue-500 px-4 my-2 py-2' to={'bus'}>Bus</Link>
            <Link className='bg-blue-500 px-4 my-2 py-2' to={'train'}>Train</Link>
        </div>
            <br/>
        <Routes>
            <Route path='/' element={<Flight_Booking/>} />
            <Route path='flight' element={<Flight_Booking/>} />
            <Route path='bus' element={<Bus_Booking />} />
            <Route path='train' element={<Train_Booking />} />
        </Routes>

    </>
  )
}

export default Booking_Pages_Together