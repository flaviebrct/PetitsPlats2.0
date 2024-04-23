import { createDropdown } from "../../template/dropdown/index.js";

import getAppliance from "../../utils/filtersList/appliance.js";
import getUstensils from "../../utils/filtersList/ustensils.js";
import getIngredients from "../../utils/filtersList/ingredients.js";

// Render every dropdown in the filters container div
export function addDropdowns(data) {
  const filtersContainer = document.querySelector(".filters-container");

  filtersContainer.appendChild(
    createDropdown(getIngredients(data), "Ingrédients")
  );
  filtersContainer.appendChild(createDropdown(getAppliance(data), "Appareils"));
  filtersContainer.appendChild(
    createDropdown(getUstensils(data), "Ustensiles")
  );
}
