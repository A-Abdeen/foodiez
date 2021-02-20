import * as types from "../actions/types";

const initialState = {
  ingredients: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_INGREDIENT:
      return {
        ...state,
        ingredients: action.payload,
      };
    case types.ADD_INGREDIENT:
      const { newIngredient } = action.payload;
      return {
        ...state,
        ingredients: [...state.ingredients, newIngredient],
      };

    default:
      return state;
  }
};

export default reducer;
