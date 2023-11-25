import http from "../../../interceptor";

const MostVisitedNews =  async (setNewsData, setNewsAllData, pageCount, countInPage, setIsLoading ) => {
  setIsLoading(true)
  try {
    const result = await http.get(
      `/News?PageNumber=${pageCount}&RowsOfPage=${countInPage}&SortingCol=currentView&SortType=DESC&Query=`
    );

    setNewsData(result.news);
    setNewsAllData(result.news);
    setIsLoading(false)
  } catch (error) {
    console.log(error);
    return [];
  }
};
export default MostVisitedNews;
