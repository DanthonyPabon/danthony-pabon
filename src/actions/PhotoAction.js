import { ADD_DATO } from "./types";

export const getPhotos = (data) => {
  return dispatch => {
    dispatch({ type: ADD_DATO, payload: data });
  };
};
