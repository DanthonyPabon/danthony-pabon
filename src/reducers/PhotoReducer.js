import { ADD_DATO } from "../actions/types";

const INITIAL_STATE = {
  photos: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_DATO:
      return { ...state, photos: action.payload };
    default:
      return state;
  }
};
