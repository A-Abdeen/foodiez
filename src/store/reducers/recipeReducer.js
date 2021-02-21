import * as types from "../actions/types";

const initialState = {
  recipes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_RECIPE:
      return {
        ...state,
        recipes: action.payload,
      };
    case types.ADD_RECIPE:
      const { newRecipe } = action.payload;
      return {
        ...state,
        recipes: [...state.recipes, newRecipe],
      };

    default:
      return state;
  }
};

export default reducer;
