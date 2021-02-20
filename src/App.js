import "./App.css";
import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";
import CategoryForm from "./components/CategoryForm";
import IngredientList from "./components/IngredientList";
import CategoryList from "./components/CategoryList";
import IngredientForm from "./components/IngredientForm";

function App() {
  const ingredients = useSelector(
    (state) => state.ingredientReducer.ingredients
  );
  return (
    <Switch>
      <Route path="/new-ingredient">
        <IngredientForm />
      </Route>
      <Route path="/:categoryId">
        <IngredientList ingredients={ingredients} />
      </Route>
      <Route path="/categories/new">
        <CategoryForm />
      </Route>
      <Route path="/">
        <CategoryList />
      </Route>
    </Switch>
  );
}

export default App;
