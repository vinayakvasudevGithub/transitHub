import axios from "axios";
import React, { useEffect, useState } from "react";

const Bus_Result = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/bus/")
      .then((response) => {
        setResult(response.data); // Assuming response.data is the array as provided
      })
      .catch((err) => console.log("bus booking ", err));
  }, []);

  console.log(result);

  return (
    <div>
      {/* {result.map((bus, busIndex) => (
        <div key={busIndex} className="mt-8 bg bg-blue-200">
          <h1>Vehicle Number: {bus.vehicle_number}</h1>
          <h2>Trip: {bus.trip}</h2>
          <div>
            {bus.stations.map((station, stationIndex) => (
              <div key={stationIndex} className="mt-3 bg bg-blue-400">
                <h3>Station: {station.station}</h3>
                <p>Arrival Time: {station.arrivalTime}</p>
                <p>Departure Time: {station.departureTime}</p>
              </div>
            ))}
          </div>
        </div>
      ))} */}
      {result.map((data) => {
        return <div key={data._id}>{data.busfrom}</div>;
      })}
    </div>
  );
};

export default Bus_Result;
