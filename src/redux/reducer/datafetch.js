import { FETCHDATA } from "../actionType/actionType";
const initializeState = {
  data: [],
};
const dataFetch = (state = initializeState, action) => {
  switch (action.type) {
    case FETCHDATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default dataFetch;
