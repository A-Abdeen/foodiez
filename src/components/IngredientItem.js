const IngredientItem = ({ ingredient }) => {
  return (
    <div>
      <img
        style={{ width: "20em" }}
        src={ingredient.image}
        alt={ingredient.name}
      />
      <h4>{ingredient.name}</h4>
    </div>
  );
};

export default IngredientItem;
