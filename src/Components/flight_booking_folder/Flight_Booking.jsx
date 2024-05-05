import React, { useState } from "react";
import Special_Fare from "./special_fare_folder/Special_Fare";

const Flight_Booking = () => {
  const [show, setshow] = useState(false);
  const to_display_inputbox = (click) => {
    setshow(click);
  };

  const [from_input, set_from_input] = useState("delhi");
  const [to_input, set_to_input] = useState("mumbai");
  const [date, setdate] = useState("15-10-2024");
  const [return_date, set_return_date] = useState("15/5/2024");
  const [number_of_travellers, set_number_of_travellers] = useState("1");

  const press_enter_key = (e) => {
    const save_input = e.target.value;
    show === "from" && set_from_input(save_input);
    show === "to" && set_to_input(save_input);
    show === "date" && setdate(save_input);
    show === "return_date" && set_return_date(save_input);
    show === "number_of_travellers" && set_number_of_travellers(save_input);
    e.key === "Enter" && setshow(false);
  };

  return (
    <>
      <div className="bg-red-300 flex justify-center space-x-2">
        <div
          onClick={() => to_display_inputbox("from")}
          className="category_of_booking_flight"
        >
          {show === "from" ? (
            <div className="mt-8">
              <input
                onKeyDown={press_enter_key}
                type="text"
                className="border border-gray-500"
              />
            </div>
          ) : (
            <div>
              <p>from:</p>
              <br />
              <h1>{from_input}</h1>
              <p>CCJ,Calicut Airport India</p>
            </div>
          )}
        </div>

        <div
          onClick={() => to_display_inputbox("to")}
          className="category_of_booking_flight"
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
              <p>To</p>
              <br />
              <h1>{to_input}</h1>
              <p>NYC,All Airports-NY United States</p>
            </div>
          )}
        </div>

        <div
          onClick={() => to_display_inputbox("date")}
          className="category_of_booking_flight"
        >
          {show === "date" ? (
            <div className="mt-8">
              <input
                onKeyDown={press_enter_key}
                onChange={press_enter_key}
                type="date"
              />
            </div>
          ) : (
            <div>
              <p>Departure</p>
              <br />
              <h3>{date}</h3>
            </div>
          )}
        </div>

        <div
          onClick={() => to_display_inputbox("return_date")}
          className="category_of_booking_flight"
        >
          {show === "return_date" ? (
            <div className="mt-8">
              <input
                onKeyDown={press_enter_key}
                onChange={press_enter_key}
                type="date"
              />
            </div>
          ) : (
            <div>
              <p>return</p>
              <br />
              <p>{return_date}</p>
            </div>
          )}
        </div>

        <div
          onClick={() => to_display_inputbox("number_of_travellers")}
          className="category_of_booking_flight"
        >
          {show === "number_of_travellers" ? (
            <div className="mt-8">
              <input
                onKeyDown={press_enter_key}
                type="text"
                className="border border-gray-400"
              />
            </div>
          ) : (
            <div>
              <p>Travellers & Class</p>
              <br />
              <h1>{number_of_travellers}</h1>
              <p>Economy/Premium Economy</p>
            </div>
          )}
        </div>
      </div>
      <Special_Fare />
      <div className="flex justify-center">
        <button className="bg-blue-500 py-2 px-4 hover:bg-blue-700 font-bold text-white">
          SEARCH
        </button>
      </div>
    </>
  );
};

export default Flight_Booking;
