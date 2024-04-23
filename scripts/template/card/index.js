function createCard(data) {
  // if (Array.isArray(data)) {
  //   // Create card that contain all the data
  //   const card = document.createElement("article");
  //   card.classList.add("card");

  //   // Create and add the picture of the recipie
  //   const cardHeader = document.createElement("img");
  //   cardHeader.setAttribute("src", `assets/photos/${data[0].image}`);
  //   card.appendChild(cardHeader);

  //   // Create and add a title with the name of the recipie
  //   const cardTitle = document.createElement("h2");
  //   cardTitle.classList.add("recipe-title");
  //   cardTitle.innerHTML = data[0].name;
  //   card.appendChild(cardTitle);

  //   // Create a div that will contain the body of the card
  //   const cardBody = document.createElement("div");
  //   cardBody.classList.add("card-body");
  //   card.appendChild(cardBody);

  //   // Create a div that will contain the recipe and add it to the body
  //   const recipeContainer = document.createElement("div");
  //   recipeContainer.classList.add("recipe-container");
  //   cardBody.appendChild(recipeContainer);

  //   // Create and add the title of the recipe part to the body
  //   const recipeTitle = document.createElement("h3");
  //   recipeTitle.classList.add("title");
  //   recipeTitle.innerHTML = "Recette";
  //   recipeContainer.appendChild(recipeTitle);

  //   // Create and add a paragraph with te recipe to the body
  //   const recipeContent = document.createElement("p");
  //   recipeContent.innerHTML = data[0].description;
  //   recipeContainer.appendChild(recipeContent);

  //   // Create a div that will contain the ingredients and add it to the body
  //   const ingredientsContainer = document.createElement("div");
  //   ingredientsContainer.classList.add("ingredients-container");
  //   cardBody.appendChild(ingredientsContainer);

  //   // Create and add the title of the recipe part to the body
  //   const ingredientsTitle = document.createElement("h3");
  //   ingredientsTitle.classList.add("title");
  //   ingredientsTitle.innerHTML = "Ingrédients";
  //   ingredientsContainer.appendChild(ingredientsTitle);

  //   // Create an ul to contain all the ingredients needed-----
  //   const ingredientsList = document.createElement("ul");

  //   // Looping over all the ingredients and create an list item for each
  //   data[0].ingredients.forEach((element) => {
  //     const ingredientItem = document.createElement("li");
  //     ingredientItem.setAttribute("key", element.ingredient);

  //     const ingredientName = document.createElement("h4");
  //     ingredientName.innerHTML = `${element.ingredient}`;
  //     ingredientItem.appendChild(ingredientName);

  //     const ingredientQuantity = document.createElement("p");
  //     element.quantity
  //       ? (ingredientQuantity.innerHTML = element.quantity)
  //       : null;
  //     element.unit
  //       ? ingredientQuantity.insertAdjacentHTML("beforeend", element.unit)
  //       : null;
  //     ingredientItem.appendChild(ingredientQuantity);

  //     ingredientsList.appendChild(ingredientItem);
  //   });

  //   // Create and add tiny toast who contain the duration time of the recipe
  //   const toast = document.createElement("div");
  //   toast.classList.add("toast");
  //   const time = document.createElement("p");
  //   time.innerHTML = `${data[0].time}min`;
  //   toast.appendChild(time);
  //   card.appendChild(toast);

  //   ingredientsContainer.appendChild(ingredientsList);

  //   return card;
  // } else {
  // Create card that contain all the data
  const card = document.createElement("article");
  card.classList.add("card");

  // Create and add the picture of the recipie
  const cardHeader = document.createElement("img");
  cardHeader.setAttribute("src", `assets/photos/${data.image}`);
  card.appendChild(cardHeader);

  // Create and add a title with the name of the recipie
  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("recipe-title");
  cardTitle.innerHTML = data.name;
  card.appendChild(cardTitle);

  // Create a div that will contain the body of the card
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  // Create a div that will contain the recipe and add it to the body
  const recipeContainer = document.createElement("div");
  recipeContainer.classList.add("recipe-container");
  cardBody.appendChild(recipeContainer);

  // Create and add the title of the recipe part to the body
  const recipeTitle = document.createElement("h3");
  recipeTitle.classList.add("title");
  recipeTitle.innerHTML = "Recette";
  recipeContainer.appendChild(recipeTitle);

  // Create and add a paragraph with te recipe to the body
  const recipeContent = document.createElement("p");
  recipeContent.innerHTML = data.description;
  recipeContainer.appendChild(recipeContent);

  // Create a div that will contain the ingredients and add it to the body
  const ingredientsContainer = document.createElement("div");
  ingredientsContainer.classList.add("ingredients-container");
  cardBody.appendChild(ingredientsContainer);

  // Create and add the title of the recipe part to the body
  const ingredientsTitle = document.createElement("h3");
  ingredientsTitle.classList.add("title");
  ingredientsTitle.innerHTML = "Ingrédients";
  ingredientsContainer.appendChild(ingredientsTitle);

  // Create an ul to contain all the ingredients needed
  const ingredientsList = document.createElement("ul");

  // Looping over all the ingredients and create an list item for each
  data.ingredients.forEach((element) => {
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

  // Create and add tiny toast who contain the duration time of the recipe
  const toast = document.createElement("div");
  toast.classList.add("toast");
  const time = document.createElement("p");
  time.innerHTML = `${data.time}min`;
  toast.appendChild(time);
  card.appendChild(toast);

  ingredientsContainer.appendChild(ingredientsList);

  return card;
}
// }

export default createCard;
