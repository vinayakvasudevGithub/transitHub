import React, { useEffect, useState } from "react";
import axios from "axios";

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
      {result.map((data) => {
        return (
          <div key={data._id}>
            <h1>{data.from}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Flight_Result;
