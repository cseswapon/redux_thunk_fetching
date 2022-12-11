import { FETCHDATA } from "../actionType/actionType";

export const loadData = (data) => {
  return {
    type: FETCHDATA,
    payload: data,
  };
};
