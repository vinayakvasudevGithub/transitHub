import React, { useState } from "react";
// import Bus_data from "./bus_data/Bus_booking_data";
import { useNavigate } from "react-router-dom";

const Bus_Booking = () => {
  const [show, setshow] = useState(false);
  const navigate = useNavigate();

  const to_show_inputbox = (click) => {
    setshow(click);
  };

  const [from, set_from] = useState("delhi");
  const [to, set_to] = useState("kolkata");
  const [date, set_date] = useState("15/10/2024");
  const press_enter_key = (e) => {
    const save_input = e.target.value;
    show === "from" && set_from(save_input);
    show === "to" && set_to(save_input);
    show === "date" && set_date(save_input);

    e.key === "Enter" && setshow(false);
  };

  // for (let i = 0; i < Bus_data.length; i++) {
  //   from === Bus_data[i].name && console.log("car");
  // }

  const submit = () => {
    navigate("/result/localbusdetails");
  };

  return (
    <>
      <div className="bg-red-300 flex justify-center space-x-2">
        <div
          onClick={() => to_show_inputbox("from")}
          className="category_of_booking_bus"
        >
          {show === "from" ? (
            <div className="mt-8">
              <input
                onKeyDown={press_enter_key}
                type="text"
                className="border border-gray-300"
              />
            </div>
          ) : (
            <div>
              <h3>from</h3>
              <h1>{from}</h1>
              <h3>india</h3>
            </div>
          )}
        </div>
        <div
          onClick={() => to_show_inputbox("to")}
          className="category_of_booking_bus"
        >
          {show === "to" ? (
            <div className="mt-8">
              <input
                onKeyDown={press_enter_key}
                type="text"
                className="border border-gray-300"
              />
            </div>
          ) : (
            <div>
              <h3>to</h3>
              <h1>{to}</h1>
              <h3>india</h3>
            </div>
          )}
        </div>
        <div
          onClick={() => to_show_inputbox("date")}
          className="category_of_booking_bus"
        >
          {show === "date" ? (
            <div>
              <input
                type="date"
                onChange={press_enter_key}
                onKeyDown={press_enter_key}
                className="border border-gray-400"
              />
            </div>
          ) : (
            <div>
              <h3>Travel date</h3>
              <h1>{date}</h1>
              <h3>monday</h3>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={submit}
          className="bg-blue-500 py-2 px-4 hover:bg-blue-700 font-bold text-white"
        >
          SEARCH
        </button>
      </div>
    </>
  );
};

export default Bus_Booking;
