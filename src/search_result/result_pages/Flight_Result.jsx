import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
  console.log(result);
  return (
    <div>
      {result ? (
        <div className="bg-red-200 bg-neutral-60 h-screen overflow-y-auto ">
          {/* <div className="gird sm:grid-cols-1"> */}
          {/* main div */}
          <div className="  border-neutral-100 !py-0 w-full border-b-0 bg-white z-40  px-20 xl:px-0">
            {/* div for navigation bar */}
            car
          </div>
          <div className="top-0 bg-blue-200 shadow-[0px_5px_10px_-3px_rgba(0,0,0,0.2)]  ">
            {/* div for to give booking details  */}
            hello
          </div>

          <div className=" bg-green-400 m-auto mainContainer">
            {/* main container for sidebar and results */}
            booking details container
            {/* <div className="flex gap-5 bg-yellow-300 mt-20 "> */}
            <div className="grid sm:grid-cols-10 gap-5 bg-yellow-300 mt-20 ">
              {/* to arrange two sides and this includes two main div*/}
              {/* <div className="position: relative top:0px bg-blue-400 mt-5"> */}
              <div className=" grid col-span-2 bg-blue-400 mt-5">
                {/*left sidebar for sorting */}

                <div className=" shadow-[10px_20px_5px_10px_rgba(0,0,0,0.10)] overflow-hidden ">
                  {/* this div is for arrange sidebar on left  */}

                  <div className="flex justify-between  items-center">
                    {/* this arranges sidebar on left perfectley */}
                    filtering
                  </div>
                  <div className="mx-20"></div>
                  <div className="py-20 bg-green-200">
                    sorting details
                    {/* this is for given sorting details */}
                  </div>
                </div>
              </div>
              <div className="w-[925]]  mt-5 col-span-7">
                {/* this give the results on the right side */}
                {/* this dive contains three main dives but now only created the last one only..should create two more before flight deatils div */}
                <div className="flex flex-col">
                  {/* this is for flight details only */}
                  <div>
                    {/* here to fetch flightdata,map */}
                    {result.map((data) => (
                      // <div
                      //   className="  w-full relative p-5 shadow-[0px_2px_5px_0px_rgba(0,0,0,0.10)] bg-blue-500 rounded-3xl
                      // cursor-pointer z-10 transition-all duration-300 ease-in
                      // hover:scale-[1.01] hover:shadow-300 hover:duration-300
                      // hover:ease-out mb-6  "
                      //   key={data._id}
                      // >

                      <div
                        className="  w-full relative p-5 shadow-[0px_2px_5px_0px_rgba(0,0,0,0.10)] bg-blue-500 rounded-3xl
                  cursor-pointer z-10 transition-all duration-300 ease-in
                  hover:scale-[1.01] hover:shadow-300 hover:duration-300
                  hover:ease-out  mb-6 grid sm:grid-cols-3 "
                        key={data._id}
                      >
                        {/* main div provide flight data flight details */}
                        {/* <div className="flex items-start w-full  "> */}
                        {/* this provide flight arrival destination time and price */}
                        {/* <div className=" flex w-[510px] "> */}

                        {/* <div className=" flex bg-red-200 "> */}
                        {/* <div className="  bg-red-300 p-2"> */}
                        {/* this provide flight arrival destination time */}

                        <div className="flex items-center bg-red-600 ">
                          {/* airline picture info */}
                          <img
                            className=""
                            width={50}
                            height={50}
                            src="https://images.ixigo.com/img/common-resources/airline-new/AI.png"
                          ></img>
                          <div className="flex gap-1 flex-col">
                            <p className="body-md truncate max-w-[125px] font-medium">
                              {data.airline}
                            </p>
                            <p className="body-sm truncate max-w-[115px]">
                              {data.flightNumber}
                            </p>
                          </div>
                        </div>
                        {/* </div> */}
                        {/* <div className="w-[350px] timeTile flex items-center bg-red-700 p-2"> */}
                        {/* this contains three div dep time,place and total time and destination */}

                        {/* <div className=" flex  justify-between bg-green-400  p-2"> */}
                        {/* <div className=" flex items-center  bg-green-500 p-2 gap-2"> */}
                        <div className=" flex justify-center bg-green-500 p-2 gap-2">
                          {/* this splits dep time,place and total time and destination as three */}
                          {/* <div className="grid sm:grid-cols-3"> */}
                          {/* <div> */}
                          {/* <div className=" flex  items-end  bg-blue-300   "> */}
                          {/* airline and flight number */}
                          {/* <> */}
                          {/* <div className="flex items-end relative w-[100px] text-primry font-medium"> */}
                          {/* <div className="flex items-end relative text-primry font-medium"> */}

                          {/* <div className="flex flex-col"> */}
                          <div className="bg-red-200 ">
                            <p>10:15</p>
                            <p className="body-sm text-secondary">delhi</p>
                          </div>

                          {/* </div> */}
                          {/* <p className="body-sm text-secondary">delhi</p> */}
                          {/* </> */}
                          {/* </div> */}

                          {/* <div className="flex items-center  justify-center bg-red-200 text-center "> */}
                          <div className=" bg-blue-200">
                            {/* departure place and time */}
                            {/* <div className="  "> */}
                            <p className="body-xs text-secondary">1 hr</p>
                            <div>
                              {/* nothing in this div but should add design related to distance */}
                            </div>
                            <p className="body-xs text-secondary">no stop</p>
                            {/* </div> */}
                          </div>

                          {/* <div className="flex flex-col items-end bg-violet-300 "> */}
                          <div className="bg-yellow-200 ">
                            {/* arrival place and time */}
                            <div>
                              <div className="flex flex-col items-end ">
                                <div className="flex items-end relative  ">
                                  <h6 className="font-medium">11:45</h6>
                                </div>
                                <p className="body-sm">kochi</p>
                              </div>
                            </div>
                          </div>
                          {/* </div> */}
                        </div>
                        {/* </div> */}
                        {/* </div> */}
                        {/* <div className="  flex justify-center mt-3"> */}
                        <div className=" bg-yellow-300 grid sm:grid-cols-5 justify-center ">
                          {/* price and booking */}

                          {/* <div className=" justify-end  "> */}
                          {/* price */}
                          {/* <div className="text-right  "> */}
                          {/* <div className=" col-span-2 items-end  pt-2 bg-red-200  "> */}
                          <div className=" col-span-2  bg-red-200 flex justify-end ">
                            <div className=" flex items-center">
                              <h5 className="text-primary font-bold">$17500</h5>
                            </div>
                          </div>

                          {/* <div className=" items-center flex"> */}
                          <div className=" bg-red-400 col-span-3 flex justify-end ">
                            {/* this is for booking button */}
                            <div className=" flex items-center">
                              <motion.button
                                className=" px-6 py-2 rounded-md relative radial-gradient"
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
                          {/* </div> */}
                        </div>
                        {/* </div> */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      ) : (
        <div>no internet</div>
      )}
    </div>
  );
};

export default Flight_Result;
