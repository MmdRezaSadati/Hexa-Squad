import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewsCard from "./NewsCard";
import Title from "../common/Title";
import axios from "axios";
const News = () => {
  const [newsList, setNewsList] = useState([]);
  const fetchData = useCallback(async () => {
    try {
      const result = await axios.get(
        "https://api-academy.iran.liara.run/api/News?PageNumber=1&RowsOfPage=200&SortingCol=InsertDate&SortType=DESC&Query="
      );
      const recivedData = result.data.news;
      console.log('news : ',result.data)
      setNewsList(
        recivedData.slice(recivedData.length - 1, recivedData.length)
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const newsCardsMapper = newsList.map((item, index) => {
    return (
      <NewsCard
        img={item.currentImageAddressTumb}
        name={item.title}
        description={item.miniDescribe}
        views={item.currentView}
        date={item.insertDate}
        key={item.id}
        id={item.id}
      />
    );
  });
  return (
    <section className="mb-28 overflow-hidden">
      <div className=" w-[440px] md:w-[740px] relative mt-20 lg:m-auto  mx-auto lg:mt-56">
        <Title inner={"اخبار و مقالات"} className={"title1"} />
        <Link to="/news" className={"text-newWhite hover:text-newWhite"}>
          <button className="absolute primary-btn w-auto h-10 bottom-[-20px] lg:w-56 lg:my-10  py-1 md:block lg:hidden left-3">
            مشاهده ی همه
          </button>
        </Link>
      </div>

      <div className="news-wrapper">{newsCardsMapper}</div>
      <Link to="/news" className={"text-newWhite hover:text-newWhite"}>
        <button className="primary-btn w-auto lg:w-56 lg:my-10 py-3 hidden md:hidden lg:block mx-auto">
          مشاهده ی همه
        </button>
      </Link>
    </section>
  );
};

export default News;
