function createHeader() {
  const body = document.querySelector("body");

  const header = document.createElement("header");

  body.appendChild(header);

  const logo = document.createElement("img");
  logo.classList.add("logo");
  logo.setAttribute("src", "./assets/logo.svg");
  logo.setAttribute("alt", "logo du site 'Petits Plats'");

  header.appendChild(logo);

  const title = document.createElement("h1");
  title.classList.add("title");
  title.innerHTML = "CHERCHEZ PARMI PLUS DE 1500 RECETTES DU QUOTIDIEN,SIMPLES ET DÉLICIEUSES";

  header.appendChild(title);

  const searchBarContainer = document.createElement("div");
  searchBarContainer.classList.add("searchbarContainer");

  const searchBar = document.createElement("input");
  searchBar.setAttribute("placeholder", "Rechercher une recette, un ingrédient, ...")
  searchBar.classList.add("searchbar");

  const searchButton = document.createElement("button");

  const searchIcon = document.createElement("img");
  searchIcon.setAttribute("src", "./assets/icons/search.svg");
  searchIcon.setAttribute("alt", "bouton permetant de lancer la recherche");

  searchButton.appendChild(searchIcon);

  searchBarContainer.appendChild(searchBar);
  searchBarContainer.appendChild(searchButton);

  header.appendChild(searchBarContainer);
}

createHeader();
