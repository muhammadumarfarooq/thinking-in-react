import { CHANGE_CHECKBOX, FILTER_ARRAY, SHOW_ALERT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case CHANGE_CHECKBOX:
      return {
        ...state,
        checkBox: !state.checkBox
      };
    case FILTER_ARRAY:
      return {
        ...state,
        filteredArray: action.payload
      };
    case SHOW_ALERT:
      return {
        ...state,
        alert: action.payload
      };
    default:
      return state;
  }
};
