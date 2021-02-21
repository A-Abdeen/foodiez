import "./App.css";
import { Route, Switch } from "react-router";
// import { useSelector } from "react-redux";
import CategoryForm from "./components/CategoryForm";
import IngredientList from "./components/IngredientList";
import CategoryList from "./components/CategoryList";
import IngredientForm from "./components/IngredientForm";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import RecipeForm from "./components/RecipeForm";

function App() {
  // const ingredients = useSelector(
  //   (state) => state.ingredientReducer.ingredients
  // );
  // ingredients={ingredients}

  return (
    <Switch>
      <Route path="/recipes/new">
        <RecipeForm />
      </Route>
      <Route path="/recipes/:recipeSlug">
        <RecipeDetail />
      </Route>
      <Route path="/recipes">
        <RecipeList />
      </Route>
      <Route path="/:categoryId/new-ingredient">
        <IngredientForm />
      </Route>
      <Route path="/categories/new">
        <CategoryForm />
      </Route>
      <Route path="/:categoryId">
        <IngredientList />
      </Route>
      <Route path="/">
        <CategoryList />
      </Route>
    </Switch>
  );
}

export default App;
