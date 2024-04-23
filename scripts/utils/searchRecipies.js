import renderCardsAndTotal from "./render/cardsAndTotal.js";

import {
  getAllRecipes,
  setRecipListSearch,
} from "./getData.js";
import { getTags } from "../index.js";

// Function to search the recipie
export function searchRecipes(searchTerm) {
  const searchTerms = searchTerm.toLowerCase().split(" ");

  return getAllRecipes().filter((recipe) => {
    if (
      recipe.name.toLowerCase().includes(searchTerms) ||
      recipe.description.toLowerCase().includes(searchTerms) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.ingredient.toLowerCase().includes(searchTerms)
      )
    ) {
      return true;
    }
  });
}

// Function to update the recipies list
export function updateRecipeList(recipes, tags) {
  // Function to filter the recipies by tags
  function filterRecipes(recipes, tags) {
    return recipes.filter((recipe) => {
      // Check if evry ingredients of the recipies are in tags.ingredients
      const ingredientMatch =
        tags.ingredients.length === 0 ||
        tags.ingredients.every((tagIngredient) =>
          recipe.ingredients.some(
            (recipeIngredient) =>
              recipeIngredient.ingredient.toLowerCase() ===
              tagIngredient.toLowerCase()
          )
        );

      // Check if evry appliances of the recipies are in tags.appliances
      const applianceMatch =
        tags.appliances.length === 0 ||
        tags.appliances
          .map((appliance) => appliance.toLowerCase())
          .includes(recipe.appliance.toLowerCase());

      // Check if evry ustensils of the recipies are in tags.ustensils
      const utensilMatch =
        tags.ustensils.length === 0 ||
        tags.ustensils.every((tagUtensil) =>
          recipe.ustensils
            .map((utensil) => utensil.toLowerCase())
            .includes(tagUtensil.toLowerCase())
        );

      return ingredientMatch && applianceMatch && utensilMatch;
    });
  }

  const filteredRecipes = filterRecipes(recipes, tags);

  // Update displayed recipies
  renderCardsAndTotal(filteredRecipes, tags);
}

// Function that clean the value in the input and shows every recipies back
export function cleanSearchInput() {
  const cleanCross = document.querySelectorAll(".clean");
  cleanCross.forEach((cross) => {
    const searchInput = cross.previousElementSibling;

    if (searchInput) {
      cross.addEventListener("click", () => {
        cross.style.display = "none";
        searchInput.value = "";
        setRecipListSearch(getAllRecipes());
        updateRecipeList(getAllRecipes(), getTags());
      });
    }
  });
}
