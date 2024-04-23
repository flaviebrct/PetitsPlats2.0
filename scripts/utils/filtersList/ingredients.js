function getIngredients(data) {
  const ingredientsArray = [];

  for (let i = 0; i < data.length; i++) {
    const element = data[i];

    if (typeof element === "object") {
      data.forEach((recipe) => {
        // Add all ingredients not include in the array
        recipe.ingredients.forEach((list) => {
          if (!ingredientsArray.includes(list.ingredient.toLowerCase())) {
            ingredientsArray.push(list.ingredient.toLowerCase());
          }
        });
      });
    }
  }

  return ingredientsArray;
}

export default getIngredients;
