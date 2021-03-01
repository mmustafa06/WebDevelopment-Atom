import reducer_tema from "./reducers/reducer_tema.js";
import { createStore, combineReducers } from "redux";
const reducers = combineReducers({
  tema: reducer_tema,
});
const store = createStore(reducers);
export default store;
