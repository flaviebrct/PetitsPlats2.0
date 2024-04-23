import createCard from "../../template/card/index.js";
import { showTotalRecipes } from "../getData.js";

export default function renderCardsAndTotal(recipes, searchInput) {
  // Empty the cards recipes container
  const container = document.querySelector(".cards-container");
  container.innerHTML = "";

  // Empty and update the number of recipie displayed
  showTotalRecipes(recipes);

  // If there is no recipe available then an error message is displayed
  if (recipes.length === 0) {
    container.innerHTML = `
      <div>
        <h2 class="error-message">
        Aucune recette ne contient <span>${
          searchInput.value
            ? `'${searchInput.value}'.`
            : "ce ou ces élément(s)."
        }</span></h2>
        <p class="error-message">Recherchez une recette, un ingrédient...</p>
      </div>
    `;
  } else {
    // Render a card for each given recipe
    recipes.map((card) => {
      const cardComponent = new createCard(card);
      container.append(cardComponent);
      return cardComponent;
    });
  }
}
