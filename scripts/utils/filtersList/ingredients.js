function getIngredients(data) {
  const ingredientsArray = [];
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    const element = data[i];

    if (typeof element === "object") {
      data.forEach((recipe) => {
        // Ingredients
        recipe.ingredients.forEach((list) => {
          if (!ingredientsArray.includes(list.ingredient.toLowerCase())) {
            ingredientsArray.push(list.ingredient.toLowerCase());
          }
        });
      });
    }
    if (typeof element === "string") {
      data.forEach((ingredient) => {
        if (!ingredientsArray.includes(ingredient)) {
          ingredientsArray.push(ingredient);
        }
      });
    }
  }

  return ingredientsArray;
}

export default getIngredients;
