import { useState } from 'react'
import './App.css'
import FlightData from './Booking-Data/Flight_Booking_data'

function App() {
  const [count, setCount] = useState(0)
  const [Flight,SetFlight] =useState(false)

  const To_Book_Flight =()=>{
    !Flight 
    ? SetFlight(true)
    : SetFlight(false)
  }

  const flight_display =    
          <div className='bg-red-300 flex justify-center space-x-2'>
            <div className='category_of_booking'>
              <p>from:</p>
              <br />
              <h1>Kozhikkode</h1>
              <p>CCJ,Calicut Airport India</p>
            </div>
            <div className='category_of_booking'>
              <p>To</p>
              <br />
              <h1>New York</h1>
              <p>NYC,All Airports-NY United States</p>
            </div>
            <div className='category_of_booking'>
              <p>Departure</p>
              <br />
              <h1>30</h1><h3>Apr'24</h3>
            </div>
            <div className='category_of_booking'>
              <p>return</p>
              <br />
              <p>to add return date for discounts</p>
            </div>
            <div className='category_of_booking'>
              <p>Travellers & Class</p>
              <br />
              <h1>1</h1><h2>Traveller</h2>
              <p>Economy/Premium Economy</p>
            </div>
          </div>


  return (
    <>
    <h1>transitHub</h1>
    <div className='flex justify-center space-x-2'>
      <button onClick={()=>To_Book_Flight()} className='bg-blue-500 px-4 my-2 py-2'>flight</button>
      <button className='bg-blue-500 px-4 my-2 py-2'>Bus</button>
      <button className='bg-blue-500 px-4 my-2 py-2'>Train</button>
    </div>

    <div>
  {
    !Flight 
    ? flight_display 
    : flight_display

      
    
}
      ---------------------------------------------------

      <div className='bg-green-300 my-3 flex justify-center space-x-4'>
        <div>
          <h2>Select a special fare</h2>
          <h2>EXTRA SAVINGS</h2>
        </div>

        <div>
          <h2>Regular</h2>
          <h3>Regular fares</h3>
        </div>

        <div>
          <h2>Student</h2>
          <h3>Extra discounts/baggage</h3>
        </div>

        <div>
          <h2>Senior Citizen</h2>
          <h3>up to $600 off</h3>
        </div>

        <div>
          <h2>octors And Nurses</h2>
          <h3>up to $600 off</h3>
        </div>

        <div>
          <h2>octors and Nurses</h2>
          <h3>up to $600 off</h3>
        </div>
      </div>

      <div className='bg-yellow-300 my-5 flex justify-center'>
        <button>Search</button>
      </div>
    </div>
    </>
  )
}

export default App
