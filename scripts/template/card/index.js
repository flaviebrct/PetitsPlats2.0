function createCard(imageLink, title, recipe, ingredients, timer) {
  const card = document.createElement("article");
  card.classList.add("card");

  const cardHeader = document.createElement("img");
  cardHeader.setAttribute("src", `assets/photos/${imageLink}`);
  card.appendChild(cardHeader);

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("recipe-title");
  cardTitle.innerHTML = title;
  card.appendChild(cardTitle);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  const recipeContainer = document.createElement("div");
  recipeContainer.classList.add("recipe-container");

  cardBody.appendChild(recipeContainer);

  const recipeTitle = document.createElement("h3");
  recipeTitle.classList.add("title");
  recipeTitle.innerHTML = "Recette";

  recipeContainer.appendChild(recipeTitle);

  const recipeContent = document.createElement("p");
  recipeContent.innerHTML = recipe;

  recipeContainer.appendChild(recipeContent);

  const ingredientsContainer = document.createElement("div");
  ingredientsContainer.classList.add("ingredients-container");

  cardBody.appendChild(ingredientsContainer);

  const ingredientsTitle = document.createElement("h3");
  ingredientsTitle.classList.add("title");
  ingredientsTitle.innerHTML = "Ingrédients";

  ingredientsContainer.appendChild(ingredientsTitle);

  const ingredientsList = document.createElement("ul");
  ingredients.forEach((element) => {
    const ingredientItem = document.createElement("li");
    ingredientItem.setAttribute("key", element.ingredient);

    const ingredientName = document.createElement("h4");
    ingredientName.innerHTML = `${element.ingredient}`;
    ingredientItem.appendChild(ingredientName);

    const ingredientQuantity = document.createElement("p");
    element.quantity ? (ingredientQuantity.innerHTML = element.quantity) : null;
    element.unit
      ? ingredientQuantity.insertAdjacentHTML("beforeend", element.unit)
      : null;
    ingredientItem.appendChild(ingredientQuantity);

    ingredientsList.appendChild(ingredientItem);
  });

  const toast = document.createElement("div");
  toast.classList.add("toast")
  const time = document.createElement("p");
  time.innerHTML = `${timer}min`;

  toast.appendChild(time);
  card.appendChild(toast);

  ingredientsContainer.appendChild(ingredientsList);

  return card;
}

export default createCard;
