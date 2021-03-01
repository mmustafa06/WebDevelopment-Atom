import { DARK_MODE, LIGHT_MODE } from "../types.js";
const varsayilanState = "bg-light";
const reducer_tema = function (state = varsayilanState, action) {
  if (action.type === DARK_MODE) {
    return "bg-dark";
  } else if (action.type === LIGHT_MODE) {
    return "bg-light";
  } else {
    return state;
  }
};
export default reducer_tema;
