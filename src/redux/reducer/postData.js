import { POSTDATA } from "../actionType/actionType";

const initializeState = {
  post: [],
};
const postData = (state = initializeState, action) => {
  switch (action.type) {
    case POSTDATA:
      return {
        ...state,
        post: action.payload,
      };

    default:
      return state;
  }
};
export default postData;
