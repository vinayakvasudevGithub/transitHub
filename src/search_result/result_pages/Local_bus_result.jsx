import axios from "axios";
import React, { useEffect, useState } from "react";

const Local_bus_result = () => {
  const [result, setresult] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/localbus")
      .then((response) => {
        setresult(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log("local bus booking", err));
  }, []);

  return (
    <div>
      {result.map((bus) => (
        <div key={bus._id} className="mt-8 bg bg-red-200">
          <h1>Vehicle Number: {bus.vehiclenumber}</h1>
          {bus.route.map((route, index) => (
            <h3 key={index}>Route: {route}</h3>
          ))}

          {bus.schedule.map((trip, tripIndex) => (
            <div key={tripIndex} className="mt-8 bg bg-blue-400">
              <h3>Trip: {trip.trip}</h3>
              <div>
                {trip.stations.map((station) => (
                  <div key={station._id}>
                    <h3>{station.station}</h3>
                    <p>Arrival time: {station.arrivalTime}</p>
                    <p>Departure time: {station.departureTime}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Local_bus_result;
