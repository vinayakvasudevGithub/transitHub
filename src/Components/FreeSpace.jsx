import React, { useState } from "react";
import Weather from "../weather/Weather";

const FreeSpace = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="bg-red-300 flex justify-end">
      <div
        onClick={toggleExpansion}
        className={`w-20  bg-blue-500 rounded-lg shadow-l cursor-pointer
         overflow-hidden transition-all duration-500 mt-[0rem] ${
           isExpanded ? " h-[30rem] w-[950px] " : " h-[30rem]"
         }`}
      >
        <div className="p-4 text-white">
          <p className="text-lg font-bold">
            {/* {isExpanded ? "minimize" : " check weather"} */}
            click
          </p>
          <div className={`mt-2 ${isExpanded ? "block" : "hidden"}`}>
            {/* starstsfscjnhjsgdfbhjhdsbvhbdsvhbdfhbvhjdsbvhsdhcsvcxvsGJZXCvghsv */}
            <Weather />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeSpace;
