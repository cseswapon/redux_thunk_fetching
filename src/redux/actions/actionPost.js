import { POSTDATA } from "../actionType/actionType";

export const actionPost = (data) => {
  return {
    type: POSTDATA,
    payload: data,
  };
};
