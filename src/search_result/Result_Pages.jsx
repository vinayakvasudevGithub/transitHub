import axios from "axios";
import React, { useEffect, useState } from "react";

const Result_Pages = () => {
  const [result, setresult] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/flight")
      .then((flight) => {
        setresult(flight.data), console.log(flight.data);
      })
      .catch((err) => console.log("flight booking", err));
  }, []);

  return (
    <>
      {result.map((data) => {
        return (
          <div key={data._id}>
            <h1>{data.from}</h1>
          </div>
        );
      })}
    </>
  );
};

export default Result_Pages;
