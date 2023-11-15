import React, { useState } from "react";
import { addWishList } from "../../core/services/api/PutData/addCourseWishList";

import NullImage from "../../assets/image/Images-for-null 2.svg"
import likePic from "../../assets/image/like.svg";
import dislikePic from "../../assets/image/dislike.svg";
const CoursePhoto = ({ id, title, describe, imageAddress ,currentUserDissLike, currentUserLike}) => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div
      data-aos="zoom-in-left"
      data-aos-duration="1000"
      className="w-full lg:w-[860px]  md:w-[500px] relative  mx-auto md:my-10 lg:mt-10 lg:mx-12"
    >
      <div className="shadow-shadow-auth rounded-xl  ">
        <h2
          className="bi bi-heart text-3xl text-[#ffff] left-3 mt-4 absolute  hover:text-violet-700 hover:scale-110 transition-all cursor-pointer "
          alt="wishlist"
          onClick={() => addWishList(id, isLogin)}
        />
        <img
          src={imageAddress ==null ? NullImage:imageAddress}
          className="w-full h-[300px] md:h-[400px] lg:h-[420px]  rounded-lg "
          alt="course image"
        />
      </div>
      <div className="mx-4 md:mx-0 mt-2 mb-10 md:mb-0">
        <h2 className="text-xl md:text-3xl mt-8 text-[#2C007F] dark:text-[#ffff]">
          {title}
        </h2>
        <p className=" mt-6 md:mt-7 text-sm leading-8 md:text-md lg:text-lg lg:leading-10 text-[#03001C]  dark:text-[#E7E7FF] ">
          {describe}
        </p>
      </div>
      <div className="absolute left-8 lg:left-0 -bottom-8 md:-bottom-20 lg:-bottom-8 md:left-2">
        <div className="flex flex-row">
          <h2 className="text-sm mt-1 dark:text-indigo-400 text-[#302064]">
            ایا از این دوره راضی بودید؟
          </h2>
          <div
            className="course-like-box mr-4 bg-[#e3deff] "
            onClick={() => addWishList(id, isLogin)}
          >
            <img
              src={likePic}
              alt="picture"
              className="inline cursor-pointer "
            />
            <span className="course-like-count dark:text-indigo-100 ">{currentUserLike}</span>
          </div>
          <div
            className="course-like-box mr-1.5 pl-4 bg-[#e3deff]"
            onClick={() => addWishList(id, isLogin)}
          >
            <img
              src={dislikePic}
              alt="picture"
              className="inline cursor-pointer"
            />
            <span className="course-like-count dark:text-indigo-100">{currentUserDissLike}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePhoto;
