import renderCardsAndTotal from "../render/cardsAndTotal.js";

import {
  getRecipeList,
  setRecipeList,
  getAllRecipes,
  setRecipListSearch,
} from "../getData.js";

import {
  updateRecipeList,
  searchRecipes,
  cleanSearchInput,
} from "../searchRecipies.js";

import { getTags } from "../../index.js";

export function setupSearchInput() {
  const searchInput = document.querySelector(".searchbar");

  if (searchInput) {
    // Listener for when user type in the input
    searchInput.addEventListener("input", (event) => {
      let searchTerm = event.target.value.trim();
      if (searchTerm.length !== 0) {
        // Display the cross that allow to remove the value in the input
        document.querySelector(".clean").style.display = "block";
      } else {
        document.querySelector(".clean").style.display = "none";
      }
      cleanSearchInput();

      // Trigger the re render of the cards when the input value is at least 3 character 
      if (searchTerm.length >= 3) {
        const filteredRecipes = searchRecipes(searchTerm);
        setRecipeList(filteredRecipes);
        setRecipListSearch(filteredRecipes);
        updateRecipeList(getRecipeList(), getTags());

        // Render error message and 0 total recipe when not recipes are found
        if (getRecipeList().length === 0) {
          renderCardsAndTotal(filteredRecipes, searchInput);
        }
      } else {
        setRecipeList(getAllRecipes());
        setRecipListSearch(getAllRecipes());
        updateRecipeList(getAllRecipes(), getTags());
      }
    });
  } else {
    console.error("Search input not found");
  }
}
