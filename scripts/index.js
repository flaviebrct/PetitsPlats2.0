import Card from "./template/card/index.js";
import Filter from "./template/dropdown/index.js";
import getIngredients from "./utils/filtersList/ingredients.js";
import getAppliance from "./utils/filtersList/appliance.js";
import getUstensils from "./utils/filtersList/ustensils.js";

const body = document.querySelector("body");

createHeader();

const main = document.createElement("main");
body.appendChild(main);

const container = document.createElement("section");
container.classList.add("container");
main.appendChild(container);

fetch("http://127.0.0.1:5500/api/recipes.json")
  .then((response) => response.json())
  .then((data) => {
    cardsContainer(data);
    filtersContainer(data);
    showTotalRecipes(data);
  });

function createHeader() {
  const header = document.createElement("header");
  const logo = document.createElement("img");
  logo.classList.add("logo");
  logo.setAttribute("src", "./assets/logo.svg");
  logo.setAttribute("alt", "logo du site 'Petits Plats'");

  header.appendChild(logo);

  const title = document.createElement("h1");
  title.classList.add("title");
  title.innerHTML =
    "CHERCHEZ PARMI PLUS DE 1500 RECETTES DU QUOTIDIEN,SIMPLES ET DÉLICIEUSES";

  header.appendChild(title);

  const searchBarContainer = document.createElement("div");
  searchBarContainer.classList.add("searchbar-container");

  const searchBar = document.createElement("input");
  searchBar.setAttribute(
    "placeholder",
    "Rechercher une recette, un ingrédient, ..."
  );
  searchBar.classList.add("searchbar");

  const searchButton = document.createElement("button");

  const searchIcon = document.createElement("img");
  searchIcon.setAttribute("src", "./assets/icons/search.svg");
  searchIcon.setAttribute("alt", "bouton permetant de lancer la recherche");

  searchButton.appendChild(searchIcon);

  searchBarContainer.appendChild(searchBar);
  searchBarContainer.appendChild(searchButton);

  header.appendChild(searchBarContainer);

  body.appendChild(header);
}

async function cardsContainer(fetchedData) {
  const data = await fetchedData;
  const container = document.createElement("div");
  container.classList.add("cards-container");

  data.forEach((element) => {
    container.appendChild(
      Card(
        element.image,
        element.name,
        element.description,
        element.ingredients,
        element.time
      )
    );
  });

  main.appendChild(container);
}

async function filtersContainer(fetchedData) {
  const data = await fetchedData;
  const filter = document.createElement("div");
  filter.classList.add("filters-container");

  filter.appendChild(Filter(getIngredients(data), "Ingrédients"));
  filter.appendChild(Filter(getAppliance(data), "Appareils"));
  filter.appendChild(Filter(getUstensils(data), "Ustensiles"));
  // getIngredients(data);
  // getAppliance(data);
  // getUstensils(data);

  // console.log("ingredients", getIngredients(data));
  // console.log("appliance", getAppliance(data));
  // console.log("ustensils", getUstensils(data));

  container.appendChild(filter);
}

async function showTotalRecipes(fetchedData) {
  const data = await fetchedData;
  const total = document.createElement("span");
  total.classList.add("total-recipes");
  total.innerHTML = `${data.length} recettes`;

  container.appendChild(total);
}

// container.appendChild(filtersContainer());

// main.appendChild(cardsContainer());
