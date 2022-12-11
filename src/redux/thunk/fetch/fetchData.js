import { loadData } from "../../actions/fetchData";

const fetchData = () => {
  return async (dispatch, getState) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    dispatch(loadData(data));
  };
};

export default fetchData;
