import React, { useState } from 'react'
import Special_Fare from './special_fare_folder/Special_Fare'


const Flight_Booking = () => {

      const [show,setshow]=useState(false)
      const to_display_inputbox=(click)=>{
            setshow(click)
      }

      const [from_input,set_from_input] =useState('delhi')
      const [to_input,set_to_input] =useState('mumbai')
      const press_enter_key=(e)=>{
            const save_input = e.target.value
             
            if(show === 'from'){
                  e.key==='Enter'&& set_from_input(save_input)
            }
            else if(show === 'to'){
                  set_to_input(save_input)
            }
            e.key == 'Enter' && setshow(false)
            
            
            
            // e.key === 'Enter' && setshow(false)
      }



  return (
      <>
      <div className='bg-red-300 flex justify-center space-x-2'>
            <div onClick={()=>to_display_inputbox('from')} className='category_of_booking_flight'>
                  {
                        show === 'from' 
                        ?  
                        <div className='mt-8'>
                              <input onKeyDown={press_enter_key} type='text' className='border border-gray-300' />
                        </div>
                        :
                        <div>
                              <p>from:</p>
                              <br />
                              <h1>{from_input}</h1>
                              <p>CCJ,Calicut Airport India</p>
                        </div>
                  }

            </div>
            <div onClick={()=>to_display_inputbox('to')} className='category_of_booking_flight'>
                  {
                        show === 'to'
                        ?
                        <div className='mt-8'>
                              <input onKeyDown={press_enter_key} type='text' className='border border-gray-300'/>
                        </div>
                        :
                        <div>
                              <p>To</p>
                              <br />
                              <h1>{to_input}</h1>
                              <p>NYC,All Airports-NY United States</p>
                        </div>
                  }

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
      <div className='flex justify-center'>
          <button className='bg-blue-500 py-2 px-4 hover:bg-blue-700 font-bold text-white'>SEARCH</button>  
      </div>



      </>
  )
}

export default Flight_Booking