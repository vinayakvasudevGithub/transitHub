import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Booking_Pages_Together from "./Components/Booking_Pages_Together";
import Result_Pages from "./search_result/Result_Pages";
import Flight_Booking from "./Components/flight_booking_folder/Flight_Booking";
import Bus_Booking from "./Components/bus_booking_folder/Bus_Booking";
import Train_Booking from "./Components/train_booking_folder/Train_Booking";

const App = () => {
  return (
    <>
      {/* <Booking_Pages_Together /> */}
      <Routes>
        <Route path="/*" element={<Booking_Pages_Together />} />
        <Route path="/result/*" element={<Result_Pages />} />
      </Routes>
    </>
  );
};

export default App;
