// Ismail QamberToday at 9:50 AM
import { combineReducers } from "redux";

import recipeReducer from "./recipeReducer";
import ingredientReducer from "./ingredientReducer";
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
  ingredientReducer, // === ingredientReducer: ingredientReducer,
  categoryReducer, // === categoryReducer: categoryReducer,
  recipeReducer,
});

export default rootReducer;
