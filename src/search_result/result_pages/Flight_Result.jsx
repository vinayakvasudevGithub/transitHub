import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Flight_Result = () => {
  const [result, setresult] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/flight/")
      .then((flight) => {
        setresult(flight.data);
      })
      .catch((err) => console.log("flight booking", err));
  }, []);
  return (
    <div>
      <div className="bg-green-200 flex justify-center space-x-2">
        <h1>transitHub</h1>
        <Link to={"/bus"} className="bg-red-300 px-4 py-2">
          Bus
        </Link>
        <Link to={"/train"} className="bg-red-300 px-4 py-2">
          Train
        </Link>
        <Link to={"/localbus"} className="bg-red-300 px-4 py-2">
          Local bus
        </Link>
      </div>
      <div className="mt-5">
        {result.map((data) => {
          return (
            <div key={data._id} className="bg bg-red-200 mt-4">
              <h2>{data.airline}</h2>
              {data.airport.map((from) => (
                <div key={from._id} className="bg bg-blue-200">
                  <h3>{from.city}</h3>
                  <h3>{from.departureDate}</h3>
                  <h3>{from.departureTime}</h3>
                </div>
              ))}
              {data.destination.map((to) => (
                <div key={to._id} className="bg bg-blue-300">
                  <h3>{to.city}</h3>
                  <h3>{to.arrivalDate}</h3>
                  <h3>{to.arrivalTime}</h3>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Flight_Result;
