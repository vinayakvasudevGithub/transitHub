import React, { useState } from "react";

const Train_Booking = () => {
  const [show, setshow] = useState(false);
  const to_display_inputbox = (click) => {
    setshow(click);
  };

  const [from, set_from] = useState("delhi");
  const [to, set_to] = useState("kolkata");
  const [date, set_date] = useState("10/2/2024");
  const [coach, set_coach] = useState("All");

  const press_enter_key = (e) => {
    const save = e.target.value;
    if (e.key === "Enter") {
      show === "from" && set_from(save);
      show === "to" && set_to(save);
      show === "date" && set_date(save);
      show === "class" && set_coach(save);

      e.key === "Enter" && setshow(false);
    }
  };

  console.log(to);

  return (
    <>
      <div className="bg-red-300 flex justify-center space-x-2">
        <div
          onClick={() => to_display_inputbox("from")}
          className="category_of_booking_train"
        >
          {show === "from" ? (
            <div className="mt-8">
              <input
                onKeyDown={press_enter_key}
                type="text"
                className="border border-gray-400"
              />
            </div>
          ) : (
            <div>
              <h3>from</h3>
              <h1>{from}</h1>
              <h3>India</h3>
            </div>
          )}
        </div>

        <div
          onClick={() => to_display_inputbox("to")}
          className="category_of_booking_train"
        >
          {show === "to" ? (
            <div className="mt-8">
              <input
                onKeyDown={press_enter_key}
                className="border border-gray-400"
              />
            </div>
          ) : (
            <div>
              <h3>To</h3>
              <h1>{to}</h1>
              <h3>India</h3>
            </div>
          )}
        </div>
        <div
          onClick={() => to_display_inputbox("date")}
          className="category_of_booking_train"
        >
          {show === "date" ? (
            <div className="mt-8">
              <input
                onChange={press_enter_key}
                onKeyDown={press_enter_key}
                type="date"
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
        <div
          onClick={() => to_display_inputbox("class")}
          className="category_of_booking_train"
        >
          {show === "class" ? (
            <div className="mt-8">
              <input
                onKeyDown={press_enter_key}
                type="text"
                className="border border-gray-400"
              />
            </div>
          ) : (
            <div>
              <h3>Class</h3>
              <h1>{coach}</h1>
              <h3>All class</h3>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-blue-500 py-2 px-4 hover:bg-blue-700 font-bold text-white">
          SEARCH
        </button>
      </div>
    </>
  );
};

export default Train_Booking;
