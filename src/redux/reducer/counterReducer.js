import { DECREMENT, INCREMENT } from "../actionType/actionType";

const initializeState = {
  count: 0,
};
const counterReducer = (state = initializeState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;
