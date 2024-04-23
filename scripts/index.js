import renderCardsAndTotal from "./utils/render/cardsAndTotal.js";
import { addDropdowns } from "./utils/render/dropdowns.js";

import { listenOnDropdowns } from "./utils/tags/index.js";

import { getData, getRecipeList, showTotalRecipes } from "./utils/getData.js";
import { setupSearchInput } from "./utils/searchBar/index.js";
import getAppliance from "./utils/filtersList/appliance.js";
import getIngredients from "./utils/filtersList/ingredients.js";
import getUstensils from "./utils/filtersList/ustensils.js";

async function init() {
  await getData();
  const allRecipes = getRecipeList();
  const searchInput = document.querySelector(".searchBar");

  renderCardsAndTotal(allRecipes, searchInput);
  addDropdowns(allRecipes);
  listenOnDropdowns(allRecipes);
  setupSearchInput();
  showTotalRecipes(allRecipes);
}
init();

export function getTags() {
  const tagContainer = document.querySelector(".tags-container");
  let tagsList = {
    ingredients: [],
    appliances: [],
    ustensils: [],
  };
  tagContainer.childNodes.forEach((child) => {
    if (
      getIngredients(getRecipeList()).includes(child.innerText.toLowerCase())
    ) {
      tagsList.ingredients.push(child.innerText.toLowerCase());
    } else if (
      getAppliance(getRecipeList()).includes(child.innerText.toLowerCase())
    ) {
      tagsList.appliances.push(child.innerText.toLowerCase());
    } else if (
      getUstensils(getRecipeList()).includes(child.innerText.toLowerCase())
    ) {
      tagsList.ustensils.push(child.innerText.toLowerCase());
    } else {
      console.log("No recipie with this search, ingredient, appliance or ustensil.");
    }
  });
  return tagsList;
}
