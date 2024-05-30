import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Flight_Result from "./result_pages/Flight_Result";
import Bus_Result from "./result_pages/Bus_Result";
import Local_bus_result from "./result_pages/Local_bus_result";

const Result_Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/flightdetails" element={<Flight_Result />} />
        <Route path="/busdetails" element={<Bus_Result />} />
        <Route path="/localbusdetails" element={<Local_bus_result />} />
      </Routes>
    </>
  );
};

export default Result_Pages;
