import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBus } from "react-icons/fa";
import { GiCommercialAirplane, GiBus } from "react-icons/gi";
import { MdOutlineTrain } from "react-icons/md";
import { RiBusLine } from "react-icons/ri";
import classNames from "classnames";
import Weather from "../../weather/Weather";

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

  const [dep_weather, set_dep_weather] = useState();
  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=kannur&appid=e9c52acc929474f0e835aeca818c6188"
    )
      .then((response) => response.json())
      .then((data) => {
        set_dep_weather(data);
      })
      .catch((err) => console.log("weather data", err));
  }, []);

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-gray-200">
      {result.length > 0 ? (
        <div className=" bg-neutral-60 h-screen overflow-y-auto ">
          {/* main div */}
          <div className=" grid sm:grid-cols-5 p-1 bg-white  ">
            {/* div for navigation bar */}
            <div className=" bg-white col-span-3 grid sm:grid-cols-3 border border-neutral-700 ">
              {/* <div className="bg-red-300 flex justify-between gap-1"> */}
              <div className="col-span-1  flex items-center ">
                <div className="font-bold flex pl-2 text-2xl ">
                  <p className="mt-1">transit</p>
                  <p className="text-red-500 text-3xl">H</p>
                  <p className="mt-1">ub</p>
                </div>
              </div>
              <div className=" col-span-2 flex border border-l-neutral-700 justify-between ">
                <Link to={"/flight"}>
                  <div className="    flex justify-between items-center p-5 gap-2">
                    <GiCommercialAirplane />
                    <p className="text-xs">Flights</p>
                  </div>
                </Link>
                <Link to={"/bus"}>
                  <div className=" flex justify-between items-center p-5 gap-2">
                    <FaBus />

                    <p className="text-xs">Buses</p>
                  </div>
                </Link>
                <Link to={"/train"}>
                  <div className=" flex justify-between items-center p-5 gap-2 ">
                    <MdOutlineTrain />

                    <p className="text-xs">Trains</p>
                  </div>
                </Link>
                <Link to={"/localbus"}>
                  <div className=" flex justify-between items-center p-5 gap-2">
                    <RiBusLine />

                    <p className="text-xs">Local</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className=" col-span-1"></div>
            <div className="col-span-1 bg-white border border-black p-5">
              Log in/sign up
            </div>
          </div>

          <div className=" sticky top-0  shadow-[0px_5px_10px_-3px_rgba(0,0,0,0.2)]  ">
            <div className=" grid sm:grid-cols-6 bg-white cursor-pointer pt-4 ">
              <div className=" col-span-3  flex justify-end bg-white py-3 ">
                <div className=" flex items-center mr-1 bg-gray-200  ">
                  <label className="relative ">
                    <div className=" pt-3 ">
                      <p className="text-xs text-gray-600 pl-2">From</p>
                    </div>

                    <input
                      className="   text-xl outline-none hover:border-gray-300
                      
                      duration-200 peer focus:border-gray-300 bg-inherit "
                      type="text"
                    />
                  </label>
                </div>
                <div className=" flex items-center mr-1 bg-gray-200  ">
                  <label className="relative ">
                    <div className=" pt-3 pl-2 ">
                      <p className="text-xs text-gray-600">To</p>
                    </div>

                    <input
                      className="   text-xl outline-none hover:border-gray-300
                      
                      duration-200 peer focus:border-gray-300 bg-inherit "
                      type="text"
                    />
                  </label>
                </div>
              </div>
              {/* </div> */}
              <div className="col-span-2 flex justify-between  py-3   ">
                {/* <div className=" grid md:grid-cols-2 gap-1 bg-red-200 p-1 ju"> */}
                {/* <div className=" flex justify-center gap-1 bg-gray-200"> */}
                <div className="bg-gray-200 pb-4 pr-5 ">
                  <p className="text-xs pl-3">departure</p>
                  <input type="date" className="pl-[60px] bg-gray-200" />
                </div>
                <div className="bg-gray-200 pl-4">
                  <p className="text-xs ">travel class</p>
                  <input type="text" className="bg-gray-200 pr-[15px]" />
                </div>
              </div>
              <div className="col-span-1 pl-1  bg-white flex items-center">
                <div>
                  <motion.button
                    className="  px-6 py-4 relative radial-gradient bg-orange-500"
                    style={{ "--x": "100%", scale: 1 }}
                    animate={{ "--x": "-100%" }}
                    whileTap={{ scale: 1.2 }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "loop",
                      repeatDelay: 1,
                      type: "spring",
                      stiffness: 20,
                      damping: 15,
                      mass: 2,
                      scale: {
                        type: "spring",
                        stiffness: 10,
                        damping: 5,
                        mass: 0.1,
                      },
                    }}
                  >
                    <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
                      search
                    </span>
                    <span className=" block absolute inset-0 rounded-md p-px linear-overlay" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          <div className="   p-2 grid sm:grid-cols-12 mt-3">
            <div className=" col-span-3 hidden lg:block ">
              <div className="ps-3 ml-6 bg-white  grid sm:grid-cols-1 gap-3 rounded-lg fixed z-20 inset-0 top-[12rem] shadow-2xl right-auto w-[15.55rem] pb-15 overflow-y-auto no-scrollbar ">
                <div className=" relative   grid sm:grid-cols-1 gap-4 pt-3 pb-5   ">
                  <div className="pt-2 grid sm:grid-cols-2 ">
                    <div className="font-medium  ">stops</div>
                  </div>

                  <div>
                    <div className="grid sm:grid-cols-2">
                      <div>2+ stops</div>
                      <div className="flex justify-center">
                        <input type="checkbox" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="grid sm:grid-cols-2">
                      <div>2+ stops</div>
                      <div className="flex justify-center">
                        <input type="checkbox" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className=" grid sm:grid-cols-1 gap-3 pt-2 p-5 border border-black "> */}
                <div className=" grid sm:grid-cols-1 gap-3 pt-2 p-5  ">
                  <div>flight price</div>
                </div>

                {/* <div className="  p-2 pt-4 pb-5 border border-black"> */}
                <div className="  p-2 pt-4 pb-5 ">
                  <div className="mt-2">departure from</div>
                  <div className="flex justify-between mt-7">
                    <div className=" ">
                      <div className="flex justify-center">
                        <svg
                          className="h-8 w-8 text-orange-300"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <path d="M3 17h1m16 0h1M5.6 10.6l.7.7m12.1-.7l-.7.7M8 17a4 4 0 0 1 8 0" />{" "}
                          <line x1="3" y1="21" x2="21" y2="21" />{" "}
                          <path d="M12 9v-6l3 3m-6 0l3 -3" />
                        </svg>
                      </div>

                      <p className="text-xs">3am-10am</p>
                    </div>
                    <div className="">
                      <div className="flex justify-center">
                        <svg
                          className="h-8 w-8 text-orange-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {" "}
                          <circle cx="12" cy="12" r="5" />{" "}
                          <line x1="12" y1="1" x2="12" y2="3" />{" "}
                          <line x1="12" y1="21" x2="12" y2="23" />{" "}
                          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />{" "}
                          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />{" "}
                          <line x1="1" y1="12" x2="3" y2="12" />{" "}
                          <line x1="21" y1="12" x2="23" y2="12" />{" "}
                          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />{" "}
                          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                        </svg>
                      </div>
                      <p className="text-xs">10am-7pm</p>
                    </div>
                    <div className="">
                      <div className="flex justify-center">
                        <svg
                          className="h-8 w-8 text-slate-800"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                          />
                        </svg>
                      </div>
                      <p className="text-xs">7pm-3am</p>
                    </div>
                  </div>
                </div>
                {/* </div> */}

                {/* <div className="  p-2 pt-3 pb-8 border border-black"> */}
                <div className="  p-2 pt-3 pb-8 ">
                  <p>arrival at </p>
                  <div className="flex justify-between mt-6">
                    <div className=" ">
                      <div className="flex justify-center">
                        <svg
                          className="h-8 w-8 text-orange-300"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <path d="M3 17h1m16 0h1M5.6 10.6l.7.7m12.1-.7l-.7.7M8 17a4 4 0 0 1 8 0" />{" "}
                          <line x1="3" y1="21" x2="21" y2="21" />{" "}
                          <path d="M12 9v-6l3 3m-6 0l3 -3" />
                        </svg>
                      </div>

                      {/* <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl"> */}
                      <p className="text-xs">3am-10am</p>
                    </div>
                    <div className="">
                      <div className="flex justify-center">
                        <svg
                          className="h-8 w-8 text-orange-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {" "}
                          <circle cx="12" cy="12" r="5" />{" "}
                          <line x1="12" y1="1" x2="12" y2="3" />{" "}
                          <line x1="12" y1="21" x2="12" y2="23" />{" "}
                          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />{" "}
                          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />{" "}
                          <line x1="1" y1="12" x2="3" y2="12" />{" "}
                          <line x1="21" y1="12" x2="23" y2="12" />{" "}
                          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />{" "}
                          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                        </svg>
                      </div>
                      <p className="text-xs">10am-7pm</p>
                    </div>
                    <div className="">
                      <div className="flex justify-center">
                        <svg
                          className="h-8 w-8 text-slate-800"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                          />
                        </svg>
                      </div>
                      <p className="text-xs">7pm-3am</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
            {/* <div className="pl-[15rem] hidden lg:block ">car</div> */}
            {/* <div className=" flex justify-between  mt-8 "> */}
            {/* <div className="bg-blue-400">car</div> */}
            <div className="  p-1 col-span-8  ">
              {/* <div className="col-span-1 hidden lg:block mt-5 bg-blue-500 p-1 "> */}

              {/* </div> */}
              {/* <div className="col-span-3  mt-10 bg-blue-500 p-1   "> */}
              <div className="">
                {result.map((data) => (
                  <div
                    // className=" flex justify-between shadow-[0px_2px_5px_0px_rgba(0,0,0,0.10)]
                    //       cursor-pointer z-10 transition-all duration-100 ease-in
                    //       hover:scale-[1.01] hover:shadow-300 hover:duration-100
                    //       hover:ease-out  mb-5  p-3 py-5  bg-green-500 rounded-lg "
                    // key={data._id}
                    className="  grid sm:grid-cols-10 shadow-[0px_2px_5px_0px_rgba(0,0,0,0.10)]
                          cursor-pointer z-10 transition-all duration-100 ease-in
                          hover:scale-[1.01] hover:shadow-300 hover:duration-100
                          hover:ease-out  mb-5 px-5 p-3 py-5  bg-white rounded-lg "
                    key={data._id}
                  >
                    {/* <div className=" bg-green-300 col-span-2  p-1"> */}
                    <div className=" col-span-7   p-1">
                      <div className="flex justify-between items-center  ">
                        <div className="  flex justify-start  gap-1  ">
                          <div className="flex justify-center items-center pr-3">
                            <img
                              width={50}
                              height={0}
                              src={`https://images.ixigo.com/img/common-resources/airline-new/${data.airlineimagecode}.png`}
                            ></img>
                          </div>

                          <div className="flex gap-1 flex-col pr-3">
                            <p className="body-md max-w-[125px] font-bold text-xl ">
                              {data.airline}
                            </p>
                            <p className=" text-gray-500 font-bold text-xs body-sm flex justify-end truncate max-w-[115px]">
                              {data.flightNumber}
                            </p>
                          </div>
                        </div>
                        <div className="bg-gray-200 py-6 p-[.5px]"></div>
                        {data.airport.map((departure, index) => (
                          <div
                            key={index}
                            className=" flex justify-between items-center p-1 "
                          >
                            <div className="pr-3">
                              {/* <p> */}
                              <p className="  text-xl font-medium">
                                {departure.departureTime}
                              </p>
                              {/* </p> */}
                              <p className=" font-bold text-xs  text-gray-500 body-sm text-secondary">
                                delhi
                              </p>
                            </div>
                          </div>
                        ))}
                        <div className="bg-gray-200 py-6 p-[.5px]"></div>
                        {data.airport.map((departure, index) => (
                          <div
                            key={index}
                            className=" flex justify-between p-1 "
                          >
                            <div className="pr-3">
                              <p className="text-sm  flex justify-center">
                                1 hr
                              </p>
                              <div className="flex justify-center">
                                <svg
                                  // xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="size-4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        ))}
                        <div className="bg-gray-200 py-6 p-[.5px]"></div>
                        {data.destination.map((arrival, index) => (
                          <div
                            key={index}
                            className=" flex justify-between items-center  p-1 "
                          >
                            <div className="">
                              {/* <p> */}
                              <p className="font-medium text-xl">
                                {arrival.arrivalTime}
                              </p>
                              {/* </p> */}
                              <p className="body-sm text-secondary text-xs font-bold text-gray-500">
                                delhi
                              </p>
                            </div>
                          </div>
                        ))}
                        <div className="bg-gray-200 py-6 p-[.5px]"></div>
                      </div>
                    </div>
                    <div className="col-span-2 p-2 ">
                      {/* price and booking */}
                      {/* <div className=" col-span-1  bg-red-200 flex justify-end pr-7"> */}
                      <div className="flex justify-end items-center p-1  ">
                        <svg
                          className="h-5 w-5 text-black-500"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <path d="M18 6h-11h3a4 4 0 0 1 0 8h-3l6 6" />{" "}
                          <line x1="7" y1="10" x2="18" y2="10" />
                        </svg>
                        <h5 className="text-primary font-bold text-xl font-sans ">
                          17500
                        </h5>

                        {/* </div> */}
                      </div>
                    </div>
                    {/* <div className=" bg-blue-300  col-span-1 p-2  grid sm:grid-cols-3  gap-1"> */}

                    <div className="  col-span-1 p-1 flex items-center relative">
                      {/* {console.log(data.data.airlineimagecode)} */}

                      <motion.button
                        className={classNames(
                          " px-6 py-2 rounded-md  relative",
                          data.airlineimagecode === "6E"
                            ? "bg-custom-indigo"
                            : "bg-custom-airindia",
                          "radial-gradient-indigo"
                        )}
                        style={{ "--x": "100%", scale: 1 }}
                        animate={{ "--x": "-100%" }}
                        whileTap={{ scale: 1.2 }}
                        transition={{
                          repeat: Infinity,
                          repeatType: "loop",
                          repeatDelay: 1,
                          type: "spring",
                          stiffness: 20,
                          damping: 15,
                          mass: 2,
                          scale: {
                            type: "spring",
                            stiffness: 10,
                            damping: 5,
                            mass: 0.1,
                          },
                        }}
                      >
                        <span className="text-neutral-100  tracking-wide font-light h-full w-full block relative linear-mask">
                          book
                        </span>
                        <span className=" block absolute inset-0 rounded-md p-px linear-overlay" />
                      </motion.button>
                    </div>
                  </div>
                ))}
              </div>
              {/* </div> */}
              {/* weather details */}
              {/* </div> */}
            </div>

            {/* <div
              className="  flex   fixed z-20 inset-0 
            top-[12rem]  mr-[.9rem]  left-auto w-[7rem] 
            "
            >
              <div className="  flex items-center  ">
                <button className=" ml-6 px-1 py-[10rem] absolute bg-red-500 rounded-full text-xs">
                  weather
                </button>
              </div>
              <div className="bg-white rounded-l-xl px-8 ml-11 shadow-2xl"></div>
            </div> */}
            <div className="hidden lg:block">
              <div
                onClick={toggleExpansion}
                className={`bg-white p-2 mr-3  grid sm:grid-cols-1 gap-3 rounded-lg 
                 w-20 shadow-l cursor-pointer
                 fixed z-20 inset-0 top-[12.2rem] shadow-2xl left-auto   
                 overflow-hidden transition-all duration-500
                  ${isExpanded && "h-[30rem] w-[973px]"} `}
              >
                <div className="grid sm:grid-cols-11 ">
                  <div className="flex items-center">
                    <div className=" p-[.5px] ml-5  py-[10rem]  bg-gray-400"></div>
                    <button className=" absolute col-span-1 bg-white border p-2 rounded-full">
                      {isExpanded ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5 8.25 12l7.5-7.5"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                  <div className="col-span-5 pt-9 ">
                    {isExpanded && <Weather />}
                  </div>
                  <div className="col-span-5 pt-9 ">
                    {isExpanded && <Weather />}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 hidden lg:block bg-white   rounded-lg  mt-5">
            <Weather />

            {dep_weather && (
              <div key={dep_weather.weather[0].id}>
                <p> city : {dep_weather.name}</p>
                <div>
                  {dep_weather.weather.map((data, index) => (
                    <div key={index}>
                      <p>weather : {data.main}</p>
                      <p>condition :{data.description}</p>
                      <div></div>
                    </div>
                  ))}
                  <div>
                    <p>
                      celcius : {Math.round(dep_weather.main.temp - 273.15)}{" "}
                      degree
                    </p>
                  </div>
                </div>
                <p>visibility : {dep_weather.visibility}</p>
                <p>wind speed : {dep_weather.wind.speed}</p>
                {/* <p> rain fall : {dep_weather.rain["1h"]}</p> */}
              </div>
            )}
          </div>
        </div>
      ) : (
        // </div>
        <div>no internet</div>
      )}
    </div>
  );
};

export default Flight_Result;
