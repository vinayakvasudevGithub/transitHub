import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBus } from "react-icons/fa";
import { GiCommercialAirplane, GiBus } from "react-icons/gi";
import { MdOutlineTrain } from "react-icons/md";
import { RiBusLine } from "react-icons/ri";

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
    <div className="bg-gray-200">
      {result.length > 0 ? (
        <div className=" bg-neutral-60 h-screen overflow-y-auto ">
          {/* main div */}
          <div className=" grid sm:grid-cols-5 p-1 bg-yellow-300  ">
            {/* div for navigation bar */}
            <div className=" bg-white col-span-3 grid sm:grid-cols-3 border border-neutral-700 ">
              {/* <div className="bg-red-300 flex justify-between gap-1"> */}
              <div className="col-span-1  flex items-center ">
                <p className="font-bold flex pl-2 text-2xl ">
                  <p className="mt-1">transit</p>
                  <p className="text-red-500 text-3xl">H</p>
                  <p className="mt-1">ub</p>
                </p>
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
                    {/* <GiBus /> */}

                    <RiBusLine />

                    <p className="text-xs">Local</p>
                  </div>
                </Link>
              </div>
              {/* </div> */}
            </div>
            <div className=" col-span-1"></div>
            <div className="col-span-1 bg-white border border-black p-5">
              Log in/sign up
            </div>
          </div>
          {/* <div className=" sticky top-0 bg-blue-200 shadow-[0px_5px_10px_-3px_rgba(0,0,0,0.2)] p-1  "> */}
          <div className=" bg-yellow-300 relative top-0  shadow-[0px_5px_10px_-3px_rgba(0,0,0,0.2)] p-1  ">
            {/* div for to give booking details  */}
            <div className=" grid sm:grid-cols-6 gap-[1px] cursor-pointer border border-black  ">
              {/* <div className="col-span-2 grid md:grid-cols-2  gap-[3px] "> */}
              <div className=" col-span-3  flex justify-between bg-white p-2 border border-r-black">
                {/* <div className="bg-red-400 p-1 ">
                  <p className="text-xs">from</p>
                  <input className="" type="text" />
                </div> */}
                <div className=" flex items-center  ">
                  <label className="relative">
                    <input
                      className="  pb-4 outline-none border-2 border-black hover:border-gray-300
                      duration-200 peer focus:border-gray-300 bg-inherit "
                      type="text"
                    />
                    <span
                      className="absolute left-0 top-3 ml-2 px-1 text-m uppercase tracking-wide peer-focus:text-yellow-200
                    pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-white "
                    >
                      FROM
                    </span>
                  </label>
                </div>

                <div className=" flex justify-center items-center">
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
                      d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                    />
                  </svg>
                </div>
                {/* <div className="bg-green-400 p-2">
                  <p className="text-xs ">to</p>
                  <input type="text" />
                </div> */}
                <div className=" flex items-center  ">
                  <label className="relative">
                    <input
                      className="  pb-4 outline-none border-2 border-black hover:border-gray-300
                      duration-200 peer focus:border-gray-300 bg-inherit "
                      type="text"
                    />
                    <span
                      className="absolute left-0 top-3 ml-2 px-1 text-m uppercase tracking-wide peer-focus:text-yellow-200
                    pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-white "
                    >
                      TO
                    </span>
                  </label>
                </div>
              </div>
              {/* </div> */}
              <div className="col-span-2 bg-white p-2">
                <div className=" grid md:grid-cols-2 gap-1 bg-red-200 p-1">
                  <div className="bg-green-300">
                    <p className="text-xs">departure</p>
                  </div>
                  <div className="bg-blue-400">
                    <p className="text-xs">travel class</p>
                  </div>
                </div>

                {/* <div className="bg-red-400">search</div> */}
              </div>
              <div className="col-span-1  bg-white border border-l-black flex items-center">
                <div>
                  <motion.button
                    className="  px-6 py-2 rounded-md relative radial-gradient"
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

          {/* <div className="flex"> */}

          <div className="   w-full  p-1">
            {/* <div className=" flex justify-between  mt-8 "> */}
            <div className=" grid sm:grid-cols-5 gap-4  mt-8 ">
              <div className="col-span-1 hidden lg:block mt-5   ">
                {/* <div className=" bg-red-500 mt-5 hidden lg:block p-2"> */}
                {/* <div className=" bg-blue-300 hidden lg:block fixed z-20 inset-0 top-[13rem]  right-auto w-[15rem] pb-10   overflow-y-auto no-scrollbar "> */}
                <div className="   fixed z-20 inset-0 top-[12.5rem]  right-auto w-[15.55rem] pb-15  overflow-y-auto no-scrollbar ">
                  {/* <div className=" col-span-1 bg-blue-300 hidden lg:block mt-5 p-6 "> */}
                  {/* <div className="  ml-3 bg-violet-400 p-1 shadow-[0px_2px_5px_0px_rgba(0,0,0,0.10)] "> */}
                  <div className=" ps-3 ml-3 bg-white p-1 grid sm:grid-cols-1 gap-3  border border-neutral-700 rounded-lg">
                    <div className=" grid sm:grid-cols-1 gap-4 pt-3 pb-5 border border-black  ">
                      <div className="pt-2 grid sm:grid-cols-2 ">
                        <div className="font-bold  ">stops</div>
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

                    <div className=" grid sm:grid-cols-1 gap-3 pt-2 p-5 border border-black ">
                      <div>flight price</div>
                    </div>

                    <div className="  p-2 pt-4 pb-5 border border-black">
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
                              <line
                                x1="18.36"
                                y1="18.36"
                                x2="19.78"
                                y2="19.78"
                              />{" "}
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

                    <div className="  p-2 pt-3 pb-8 border border-black">
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
                              <line
                                x1="18.36"
                                y1="18.36"
                                x2="19.78"
                                y2="19.78"
                              />{" "}
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
                </div>
              </div>

              {/* </div> */}

              <div className="w-[925]] col-span-3  mt-5  ">
                {/* <div className=""> */}
                <div className="">
                  {result.map((data) => (
                    // <div
                    //   className=" bg-red-300  grid sm:grid-cols-3  shadow-[0px_2px_5px_0px_rgba(0,0,0,0.10)]
                    //       cursor-pointer z-10 transition-all duration-100 ease-in
                    //       hover:scale-[1.01] hover:shadow-300 hover:duration-100
                    //       hover:ease-out  mb-4 gap-1 p-4"
                    //   key={data._id}
                    // >
                    <div
                      className=" bg-white grid sm:grid-cols-3 shadow-[0px_2px_5px_0px_rgba(0,0,0,0.10)]  
                          cursor-pointer z-10 transition-all duration-100 ease-in
                          hover:scale-[1.01] hover:shadow-300 hover:duration-100
                          hover:ease-out  mb-4 gap-1 p-4 border border-neutral-700 rounded-lg "
                      key={data._id}
                    >
                      {/* <div className=" bg-green-300 col-span-2  p-1"> */}
                      <div className="  col-span-2   p-1">
                        <div className="flex justify-between  ">
                          <div className="  flex justify-start  gap-1  ">
                            <div className="flex justify-center items-center">
                              <img
                                width={50}
                                height={0}
                                src={`https://images.ixigo.com/img/common-resources/airline-new/${data.airlineimagecode}.png`}
                              ></img>
                            </div>

                            <div className="flex gap-1 flex-col">
                              <p className="body-md truncate max-w-[125px] font-medium">
                                {data.airline}
                              </p>
                              <p className=" text-xs body-sm flex justify-end truncate max-w-[115px]">
                                {data.flightNumber}
                              </p>
                            </div>
                          </div>

                          {data.airport.map((departure, index) => (
                            <div
                              key={index}
                              className=" flex justify-between p-1 "
                            >
                              <div className="">
                                {/* <p> */}
                                <p>{departure.departureTime}</p>
                                {/* </p> */}
                                <p className="body-sm text-secondary">delhi</p>
                              </div>
                            </div>
                          ))}
                          {data.airport.map((departure, index) => (
                            <div
                              key={index}
                              className=" flex justify-between p-1 "
                            >
                              <div className="">
                                <p className="body-xs text-secondaryc flex justify-center">
                                  1 hr
                                </p>
                                <div>====</div>
                              </div>
                            </div>
                          ))}
                          {data.destination.map((arrival, index) => (
                            <div
                              key={index}
                              className=" flex justify-between  p-1 "
                            >
                              <div className="">
                                {/* <p> */}
                                <p>{arrival.arrivalTime}</p>
                                {/* </p> */}
                                <p className="body-sm text-secondary">delhi</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* <div className=" bg-blue-300  col-span-1 p-2  grid sm:grid-cols-3  gap-1"> */}
                      <div className="col-span-1 p-2  grid sm:grid-cols-3  gap-1">
                        {/* price and booking */}
                        {/* <div className=" col-span-1  bg-red-200 flex justify-end pr-7"> */}
                        <div className=" col-span-2  flex justify-center items-center p-1  ">
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
                          <h5 className="text-primary font-bold">17500</h5>
                          {/* </div> */}
                        </div>
                        <div className=" col-span-1 p-1 flex items-center relative">
                          <motion.button
                            className=" px-6 py-2 rounded-md  relative radial-gradient"
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
                              book
                            </span>
                            <span className=" block absolute inset-0 rounded-md p-px linear-overlay" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* </div> */}
              </div>
              <div className="col-span-1 hidden lg:block bg-white border border-neutral-700 rounded-lg  mt-5"></div>
              {/* </div> */}
            </div>
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
