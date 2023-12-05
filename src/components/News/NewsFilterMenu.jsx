import React from 'react';
import { CheckboxInput, SearchBox } from '../common';
import NewsSortSelect from './NewsSortSelect';
import NewsestNews from '../../core/services/api/GetData/getNewsData/NewestNews';
// import MostVisitedNews from '../../core/services/api/GetData/getNewsData/MostVisitedNews';
import fetchNewsApi from '../../core/services/api/GetData/getNewsData/allNewsApi';
// import FavoritesNews from '../../core/services/api/GetData/getNewsData/FavoritesNews';
import getNewsApi from '../../core/services/api/GetData/getNewsData/allNewsApi';

const NewsFilterMenu = ({
  setIsLoading, 
  newsData, 
  filterDiv, 
  setFilterDiv, 
  setNewsData, 
  setNewsAllData, 
  pageCount, 
  countInPage,
  filterParams,
  setSortCal,
  sortCal
}) => {

  const filterSearch = (value)=>{
    let filteredData = newsData.filter((item) => {
      return item.title.toLowerCase().indexOf(value.toLowerCase()) != -1
    });
    setNewsData(filteredData);
  }

  const FavoritesNews = () => {
    setSortCal("currentRate");
    getNewsApi(setNewsData, setNewsAllData, pageCount, countInPage, setIsLoading, filterParams );
    console.log("sortCal=",sortCal)
  }
  
  const MostVisitedNews = () => {
    setSortCal("currentView");
    getNewsApi(setNewsData, setNewsAllData, pageCount, countInPage, setIsLoading, filterParams );
    console.log("sortCal=",sortCal)
  }
  
  return (
        <div className="flex flex-row gap-x-4 px-8 lg:mb-12 mb-8 relative">
          <div className="hidden lg:block">
          <CheckboxInput name={"openFilter"} />
          <label 
          className="relative my-4 "
            htmlFor="openFilter"
            onClick={() => {
              setFilterDiv(!filterDiv);
            }}
          >
            فیلتر
            <i className="bi bi-filter"></i>
          </label></div>
          <ul className="hidden lg:flex flex-row w-[835px] h-12 rounded-[10px] my-auto text-base text-center text-lightblue border-2 dark:text-white border-lightblue dark:border-white">
            <li 
              className="news-menu-box hover:rounded-r-lg" 
              onClick={() => fetchNewsApi(setNewsData, setNewsAllData, pageCount, countInPage, setIsLoading)}
            >همه</li>
            <li 
              className="news-menu-box"
              onClick={() => FavoritesNews()}
            >محبوب ترین ها</li>
            <li 
              className="news-menu-box"
              onClick={() => MostVisitedNews()}
            >پربازدید ترین ها</li>
            <li 
              className="news-menu-box hover:rounded-l-lg"
              onClick={() => NewsestNews(setNewsData, setNewsAllData, pageCount, countInPage, setIsLoading)}
            >جدیدترین ها</li>
          </ul>
          <div className="w-full lg:w-auto flex flex-row gap-x-4 md:gap-x-8 my-4 mx-auto">
            <div className="lg:hidden">
              <CheckboxInput name={"openFilter"}/>
              <label 
              className="relative"
                htmlFor="openFilter"
                onClick={() => {
                  setFilterDiv(!filterDiv);
                }}
              >
                فیلتر
                <i className="bi bi-filter hidden md:block"></i>
              </label>
            </div>
            <div className="block lg:hidden w-full md:w-5/12">
              <NewsSortSelect
                setNewsData={setNewsData}
                setNewsAllData={setNewsAllData}
                pageCount={pageCount}
                countInPage={countInPage}
                setIsLoading={setIsLoading}
              />
            </div>
            <SearchBox 
              placeholder={"جستجو..."} 
              SearchFunction={filterSearch}
              inputClass={"text-xs md:text-base pr-4 lg:pr-7  focus:border-2 border-blue-800 dark:bg-[#13005A] dark:border-white"}
              addClass={"relative w-6/12 md:w-7/12 lg:w-[333px] h-9 md:h-12 "}
            />
          </div>
        </div>
        
  )
}

export default NewsFilterMenu;