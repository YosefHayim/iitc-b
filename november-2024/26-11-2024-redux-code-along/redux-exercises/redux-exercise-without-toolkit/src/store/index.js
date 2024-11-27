import { createStore } from "redux";
import countReducer from "./reducers/counterReduce.js";

export const store = createStore(countReducer);
