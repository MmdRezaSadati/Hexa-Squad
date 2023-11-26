import React, { useState } from "react";
import Lline from "../../assets/image/Lline.svg";
import admin from "../../assets/image/admin.svg";

const AdminComments = ({ name, date, answer, title, desc }) => {
  return (
    <div className="pr-8 border-b-2 border-b-[#3F40EA33] dark:border-b-[#3d3d70]">
      <img
        src={Lline}
        alt="picture"
        className=" lg:mt-[-24px] md:mt-[-30px] hidden md:block"
      />
      <div className="adminComment">
        <div className="userComment-pic bg-[#3F40EA33] dark:bg-[#9996F9] float-none md:float-right">
          <img
            src={admin}
            alt="picture"
            className=" mx-auto pt-5 mb-2 md:pt-0 md:my-5"
          />
        </div>
        <div className="">
          <p className="inline text-sm md:text-xl text-darkblue2 dark:text-[#9996F9] pr-4">
            {title}-
          </p>
          {/* <p className="inline text-xs md:text-base text-lightblue4 dark:text-[#9996F9] pr-4">
            {date}{" "}
          </p> */}
          <p className="text-xs md:text-sm lg:text-base text-justify text-darkblue4 dark:text-[#7e7cb1] px-4 pt-2">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminComments;
