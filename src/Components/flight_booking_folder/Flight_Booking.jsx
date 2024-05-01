import React from 'react'
import Special_Fare from './special_fare_folder/Special_Fare'


const Flight_Booking = () => {
  return (
      <>
      <div className='bg-red-300 flex justify-center space-x-2'>
            <div className='category_of_booking_flight'>
                  <p>from:</p>
                  <br />
                  <h1>Kozhikkode</h1>
                  <p>CCJ,Calicut Airport India</p>
            </div>
            <div className='category_of_booking_flight'>
                  <p>To</p>
                  <br />
                  <h1>New York</h1>
                  <p>NYC,All Airports-NY United States</p>
            </div>
            <div className='category_of_booking_flight'>
                  <p>Departure</p>
                  <br />
                  <h1>30</h1><h3>Apr'24</h3>
            </div>
            <div className='category_of_booking_flight'>
                  <p>return</p>
                  <br />
                  <p>to add return date for discounts</p>
            </div>
            <div className='category_of_booking_flight'>
                  <p>Travellers & Class</p>
                  <br />
                  <h1>1</h1><h2>Traveller</h2>
                  <p>Economy/Premium Economy</p>
            </div>
      </div>
      <Special_Fare/>
      
      </>
  )
}

export default Flight_Booking