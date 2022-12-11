import { actionPost } from "../../actions/actionPost";


const postData = () => {
  return async (dispatch, getState) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await res.json();
    dispatch(actionPost(data));
  };
};

export default postData;
