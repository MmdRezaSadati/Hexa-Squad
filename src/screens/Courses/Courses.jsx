import React, { useState, useEffect, Fragment, useRef } from "react";
import ReactPaginate from "react-paginate";
import Course from "../../components/course/Course";
import {
  CoursesHero,
  FiltersBTN,
  FiltersOptions,
} from "../../components/CourseList";
import bgCourses from "../../assets/image/bg-ListHero.svg";
import bgCoursesDark from "../../assets/image/bg-ListHero-dark.svg";
import fetchCoursesApi from "../../core/services/api/GetData/allCoursesApi";
import LoadingSpinner from "../../components/common/loadingSpinner";
const Courses = () => {
  const searchRef = useRef();
  const [showGrid, setShowGrid] = useState(false);
  const [filterDiv, setFilterDiv] = useState(true);
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [list, setList] = useState([]);
  const [sortCal, setSortCal] = useState("ASC");
  const [sortType, setSortType] = useState("Active");
  const [Query, setQueryV] = useState(undefined);
  const [costDown, setCostDown] = useState(0);
  const [costUp, setCostUp] = useState(10000000);
  const [techCount, setTechCount] = useState(undefined);
  const [listTech, setListTechV] = useState(undefined);
  const [courseLevelId, setCourseLevelId] = useState(undefined);
  const [courseTypeId, setCourseTypeId] = useState(undefined);
  const [itemOffset, setItemOffset] = useState(0);
  const countInPage = 6;
  const endOffset = itemOffset + countInPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / countInPage);
  console.log("Query", Query);
  const filterObj = {
    SortingCol: sortCal,
    SortType: sortType,
    Query: Query,
    CostDown: costDown,
    CostUp: costUp,
    TechCount: techCount,
    ListTech: listTech,
    courseLevelId: courseLevelId,
    CourseTypeId: courseTypeId,
  };
  const typeWriterWords = [
    "آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است. برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای کامپیوتری را ایجاد و توسعه دهند. ",
  ];

  const setQuery = (e) => {
    clearTimeout(searchRef.current);
    const timeOut = setTimeout(() => {
      if (e === "" || e === " ") {
        setQueryV(undefined);
      } else {
        setQueryV(e);
      }
    }, 1000);
    searchRef.current = timeOut;
  };
  // show the card grid view
  const showGridView = () => {
    setShowGrid((showGrid) => !showGrid);
  };
  // unCheck the input type checkbox and that function
  const filterList = (value) => {
    console.log(value);
    let filteredObj = list.filter((v) => {
      return v !== value;
    });
    setList(filteredObj);
    if (filteredObj.length === 0) {
      filteredObj = undefined;
      setTechCount(filteredObj);
      setListTechV(filteredObj);
    }
    if (filteredObj !== undefined) {
      let listMapped = filteredObj.toString();
      setListTechV(listMapped);
    }
  };

  // Check the input type checkbox and that function
  const pushList = (value) => {
    console.log("pushList", value);
    setList([...list, value]);
    let newList = [...list, value];
    let listMapped = newList.toString();
    setTechCount(1);
    setListTechV(listMapped);
  };

  // pagination function onChange
  const handlePageClick = (event) => {
    const newOffset = (event.selected * countInPage) % data.length;
    setItemOffset(newOffset);
  };
  // get courses data from api and fetch on data variable
  useEffect(() => {
    fetchCoursesApi(setData, pageCount, countInPage, setAllData, filterObj);
    return () => {
      setFilterDiv(false);
      setShowGrid(false);
    };
  }, []);

  useEffect(() => {
    fetchCoursesApi(setData, pageCount, countInPage, setAllData, filterObj);
  }, [
    sortCal,
    sortType,
    Query,
    costDown,
    costUp,
    listTech,
    courseLevelId,
    courseTypeId,
  ]);
  console.log(currentItems);
  const mapData = currentItems.map((data, index) => {
    return (
      <Course
        key={index}
        id={data.courseId}
        bio={data.describe}
        title={data.title}
        courseCount={data.levelName}
        time={data.statusName}
        date={data.lastUpdate}
        professorName={data.teacherName}
        like={data.likeCount}
        courseRate={data.courseRate}
        studentCount={data.currentRegistrants}
        price={data.cost}
        addClass={"h-[441px] mx-auto"}
        image={data.tumbImageAddress}
        userIsLiked={data.userIsLiked}
      />
    );
  });
  return (
    <Fragment>
      <LoadingSpinner />
      <div className="py-32">
        <img
          src={bgCourses}
          alt="picture"
          className="w-[100%] dark:hidden absolute top-0 z-0"
        />
        <img
          src={bgCoursesDark}
          alt="picture"
          className="w-[100%] dark:block hidden absolute top-0 z-0"
        />
        <CoursesHero typeWriterWords={typeWriterWords} />
        <FiltersBTN
          data={allData}
          setSortCal={setSortCal}
          setSortType={setSortType}
          setData={setData}
          setQuery={setQuery}
          showGridView={showGridView}
          filterDiv={filterDiv}
          setFilterDiv={setFilterDiv}
        />

        <div className="flex w-full flex-wrap ">
          <div className="flex md:flex-row items-start flex-col w-full px-20 ">
            <FiltersOptions
              data={allData}
              setFilterDiv={setFilterDiv}
              setData={setData}
              filterList={filterList}
              setTechCount={setTechCount}
              setListTechV={setListTechV}
              pushList={pushList}
              setCostDown={setCostDown}
              setCostUp={setCostUp}
              filterDiv={filterDiv}
              setCourseLevelId={setCourseLevelId}
              setCourseTypeId={setCourseTypeId}
            />
            <div
              className={
                "w-full flex relative flex-wrap transition-all pt-0 justify-end items-start gap-y-0 gap-3 duration-1000 aos-init aos-animate " +
                (showGrid ? "grid-list" : "")
              }
              data-aos="zoom-in"
            >
              <span className="m-1 text-xl absolute -top-10 right-0 text-slate-950 dark:text-slate-400">
                {data.length} دوره مرتبط
              </span>

              {mapData}
            </div>
          </div>
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            pageLinkClassName=" paginationLink"
            activeLinkClassName="active"
            containerClassName=" border-[#0001] w-full flex justify-center gap-4 mt-5 p-5 z-10"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Courses;
