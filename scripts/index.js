import createCard from "./template/card/index.js";
import createDropdown from "./template/dropdown/index.js";

import utils from "./utils/tags/index.js";
import getAppliance from "./utils/filtersList/appliance.js";
import getUstensils from "./utils/filtersList/ustensils.js";
import getIngredients from "./utils/filtersList/ingredients.js";



fetch("http://127.0.0.1:5500/api/recipes.json")
  .then((response) => response.json())
  .then((data) => {
    addDropdowns(data);
    showTotalRecipes(data);
    addCards(data);
    utils.addTag(data);
  });

async function addCards(fetchedData) {
  const data = await fetchedData;
  const container = document.querySelector(".cards-container");

  data.forEach((element) => {
    container.appendChild(
      createCard(
        element.image,
        element.name,
        element.description,
        element.ingredients,
        element.time
      )
    );
  });
}

async function addDropdowns(fetchedData) {
  const data = await fetchedData;
  const filtersContainer = document.querySelector(".filters-container");

  filtersContainer.appendChild(
    createDropdown(getIngredients(data), "Ingrédients")
  );
  filtersContainer.appendChild(
    createDropdown(getAppliance(data), "Appareils")
  );
  filtersContainer.appendChild(
    createDropdown(getUstensils(data), "Ustensiles")
  );
}

async function showTotalRecipes(fetchedData) {
  const data = await fetchedData;
  const total = document.querySelector(".total-recipes");
  total.innerHTML = `${data.length} recettes`;
}
