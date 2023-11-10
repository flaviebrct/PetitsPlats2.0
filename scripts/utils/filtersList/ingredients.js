function getIngredients(data) {
  const ingredientsArray = [];

  data.forEach((recipe) => {

    // Ingredients
    recipe.ingredients.forEach((list) => {
      if (!ingredientsArray.includes(list.ingredient.toLowerCase())) {
        ingredientsArray.push(list.ingredient.toLowerCase());
      }
    });
  });

  return ingredientsArray;
}

export default getIngredients;
