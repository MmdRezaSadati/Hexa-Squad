import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Course from './Course';

import 'swiper/css';
import 'swiper/css/navigation';

const CourseSlider = () => {
  const [coursesList, setCoursesList] = useState([
    {
      title: "آموزش JavaSript",
      courseCount: "199 درس",
      time: "24 ساعت",
      imageUrl:
        "https://toplearn.com/img/course/%D8%AF%D9%88%D8%B1%D9%87_%D8%AC%D8%A7%D9%85%D8%B9_JavaScript_2020.jpg",
      date: "2 خرداد 1402",
      professorName: "دکتر بحرالعلوم",
      like: "120",
      dislike: "0",
      studentCount: "267 دانش اموز",
      price: "500000",
      category: "programming",
    },
    {
      title: "آموزش Figma",
      courseCount: "90 درس",
      time: "10 ساعت",
      imageUrl:
        "https://toplearn.com/img/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4_%D9%86%D8%B1%D9%85_%D8%A7%D9%81%D8%B2%D8%A7%D8%B1_%D9%81%DB%8C%DA%AF%D9%85%D8%A7_%D8%A7%D8%B2_%D9%85%D8%A8%D8%AA%D8%AF%DB%8C_%D8%AA%D8%A7_%D9%BE%DB%8C%D8%B4%D8%B1%D9%81%D8%AA%D9%87.jpg",
      date: "25 مهر 1402",
      professorName: "مهندس نظری",
      like: "78",
      dislike: "2",
      studentCount: "158 دانش اموز",
      price: "320000",
      category: "design",
    },
    {
      title: "آموزش premier",
      courseCount: "90 درس",
      time: "10 ساعت",
      imageUrl:
        "https://toplearn.com/img/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4_%D9%85%D9%82%D8%AF%D9%85%D8%A7%D8%AA%DB%8C_%D9%86%D8%B1%D9%85_%D8%A7%D9%81%D8%B2%D8%A7%D8%B1_Adobe_Premiere_Pro_2021.jpg",
      date: "25 مهر 1402",
      professorName: "مهندس نظری",
      like: "78",
      dislike: "2",
      studentCount: "158 دانش اموز",
      price: "320000",
      category: "edit",
    },
    {
      title: "آموزش Node.js",
      courseCount: "155 درس",
      time: "14 ساعت",
      imageUrl:
        "https://toplearn.com/img/course/typeorm%D8%A8%D8%B1%D8%A7%DB%8C_node_js.jpg",
      date: "ا اذر 1402",
      professorName: "دکتر بحرالعلوم",
      like: "52",
      dislike: "3",
      studentCount: "128 دانش اموز",
      price: "480000",
      category: "programming",
    },
  ]);

    return(
        <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            centeredSlides={true}
            initialSlide={1}
            navigation
        >
            {coursesList.map((item, index) => {
                return (
                    <SwiperSlide>
                      <Course
                        key={index}
                        title={item.title}
                        courseCount={item.courseCount}
                        time={item.time}
                        date={item.date}
                        professorName={item.professorName}
                        like={item.like}
                        dislike={item.dislike}
                        studentCount={item.studentCount}
                        price={item.price}
                        image={item.imageUrl}
                      />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    )
}
export default CourseSlider;