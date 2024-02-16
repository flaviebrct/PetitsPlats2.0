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
  filtersContainer.appendChild(createDropdown(getAppliance(data), "Appareils"));
  filtersContainer.appendChild(
    createDropdown(getUstensils(data), "Ustensiles")
  );
}

// async function sort(fetchedData) {
//   const data = await fetchedData;
//   let allDropdownsInputs = Array.from(
//     document.getElementsByClassName("dropdown-input")
//   );

//   const listResult = document.querySelectorAll(".dropdown-ul");

//   allDropdownsInputs.forEach((dropdown, index) => {
//     dropdown.addEventListener("keyup", () => {
//       if (index === 0) {
//         handleSearch(getIngredients(data), dropdown.value, index);
//       } else if (index === 1) {
//         handleSearch(getAppliance(data), dropdown.value, index);
//       } else if (index === 2) {
//         handleSearch(getUstensils(data), dropdown.value, index);
//       }
//     });
//   });

//   function handleSearch(arr, searchInput, index) {
//     const filteredData = arr.filter((value) => {
//       const searchText = searchInput.toLowerCase();
//       const result = value.toLowerCase().includes(searchText);
//       return result;
//     });

//     const updateList = (index, data) => {
//       data.forEach((value) => {
//         const listItem = document.createElement("li");
//         listItem.classList.add("listbox-item");
//         listItem.innerHTML = `${value}`;
//         listResult[index].appendChild(listItem);
//       });
//     };

//     if (searchInput.length > 2) {
//       listResult[index].innerHTML = "";

//       if (index === 0) {
//         updateList(index, filteredData);
//       } else if (index === 1) {
//         updateList(index, filteredData);
//       } else if (index === 2) {
//         updateList(index, filteredData);
//       }
//     } else {
//       if (index === 0) {
//         updateList(index, arr);
//       } else if (index === 1) {
//         updateList(index, arr);
//       } else if (index === 2) {
//         updateList(index, arr);
//       }
//     }
//   }
// }

async function showTotalRecipes(fetchedData) {
  const data = await fetchedData;
  const total = document.querySelector(".total-recipes");
  total.innerHTML = `${data.length} recettes`;
}
