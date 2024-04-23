let recipeListAll = [];
let recipeList = [];
let recipeListSearch = [];

export async function getData() {
  try {
    const response = await fetch("../api/recipes.json");
    let recipesData = await response.json();
    recipeListAll = recipesData;
    setRecipeList(recipesData);
    return recipesData;
  } catch (error) {
    console.error(error);
  }
}

export function getRecipeList() {
  return recipeList;
}

export function setRecipListSearch(recipes) {
  recipeListSearch = recipes;
}

export function setRecipeList(recipes) {
  recipeList = recipes;
}

export function getAllRecipes() {
  return recipeListAll;
}

export function showTotalRecipes(data) {
  const total = document.querySelector(".total-recipes");
  total.innerHTML = `${data.length} recettes`;
}
