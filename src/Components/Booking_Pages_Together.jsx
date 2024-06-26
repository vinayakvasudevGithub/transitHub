import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Flight_Booking from "./flight_booking_folder/Flight_Booking";
import Bus_Booking from "./bus_booking_folder/Bus_Booking";
import Train_Booking from "./train_booking_folder/Train_Booking";
import Local_Bus_booking from "./local_bus_booking_folder/Local_Bus_booking";
import FreeSpace from "./FreeSpace";

const Booking_Pages_Together = () => {
  const [display, setdisplay] = useState(false);
  const show = () => {
    !display ? setdisplay(true) : setdisplay(false);
  };

  return (
    <>
      <h1>transitHub</h1>

      <div className="bg-green-300 flex justify-center space-x-2">
        <Link className="bg-blue-500 px-4 my-2 py-2" to={"/flight"}>
          Flight
        </Link>
        <Link className="bg-blue-500 px-4 my-2 py-2" to={"/bus"}>
          Bus
        </Link>
        <Link className="bg-blue-500 px-4 my-2 py-2" to={"/train"}>
          Train
        </Link>
        <Link className="bg-blue-500 px-4 my-2 py-2" to={"/localbus"}>
          Local Bus
        </Link>
        <Link className="bg-blue-500 px-4 my-2 py-2" to={"/freespace"}>
          freespace
        </Link>
      </div>

      <br />
      <Routes>
        <Route path="/" element={<Flight_Booking />} />
        <Route path="/flight" element={<Flight_Booking />} />
        <Route path="/bus" element={<Bus_Booking />} />
        <Route path="/train" element={<Train_Booking />} /> */
        <Route path="/localbus" element={<Local_Bus_booking />} />
        <Route path="/freespace" element={<FreeSpace />} />
        {/* <Route path="result" element={<flight_results />} /> */}
      </Routes>
    </>
  );
};

export default Booking_Pages_Together;
