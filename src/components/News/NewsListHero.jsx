import React from 'react'

import  HeroSectionInfo from '../common/HeroSectionInfo';
import newsShop from "../../assets/image/newsShop.svg";

const NewsListHero = ({typeWriterWords}) => {
  return (
    <div className="w-full lg:flex-row flex flex-col-reverse justify-around items-center">
      <HeroSectionInfo
        typeWriterWords={typeWriterWords}
        title={"اخبار و مقالات هگزا اسکواد"}
        typeSpeed={45}
        loop={1}
        className="text-darkblue7 "
      />
      <div>
        <img src={newsShop} alt="Coding workshop-rafiki" className="ml-28 w-[468px] h-[468px] hidden lg:block" />
      </div>
    </div>
  )
}

export default NewsListHero;