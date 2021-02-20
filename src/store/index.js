import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { fetchIngredients } from "./actions/ingredientsActions";
import { fetchCategories } from "./actions/categoriesActions";
import reducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(fetchIngredients());
store.dispatch(fetchCategories());

export default store;
