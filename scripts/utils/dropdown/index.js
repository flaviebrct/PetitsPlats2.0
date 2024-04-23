import {
  setRecipeList,
  getAllRecipes,
  setRecipListSearch,
} from "../getData.js";

import { updateRecipeList } from "../searchRecipies.js";

import { getTags } from "../../index.js";

function selectedElement(element, currentDropdown, key, tag) {
  const selectedUl = currentDropdown.previousSibling;
  switch (key) {
    case "add":
      // Create new list item in the selected ul
      const selectedLi = document.createElement("li");
      selectedLi.classList.add("listbox-item", "selected");
      selectedLi.innerText = element.innerText;
      const removeIcon = document.createElement("img");
      removeIcon.classList.add("remove-icon");
      removeIcon.setAttribute("src", "./assets/icons/cross-circle.svg");
      removeIcon.setAttribute("alt", "bouton permetant de retirer le tag");
      selectedLi.appendChild(removeIcon);
      selectedUl.appendChild(selectedLi);
      // Call the function that handle the click on the selected li
      handleClick(selectedLi, currentDropdown);
      // Update the recipie list
      setRecipeList(getAllRecipes());
      setRecipListSearch(getAllRecipes());
      updateRecipeList(getAllRecipes(), getTags());
      break;
    case "remove":
      // Remove the selected list item
      const elementRemove = document.querySelectorAll(".listbox-item.selected");
      elementRemove.forEach((el) => {
        if (el.innerText === element.innerText) {
          removeFilter(el, currentDropdown);
        }
      });
      break;
    default:
      break;
  }
}

// Function that triggers the listener on the li added
function handleClick(selectedLi, currentDropdown) {
  selectedLi.addEventListener("click", () => {
    removeFilter(selectedLi, currentDropdown);
  });
}

// Function that remove the filter from the selected list
function removeFilter(element, currentDropdown) {
  // Remove the element from the selected list
  element.classList.remove("selected");
  const tagContainer = document.querySelector(".tags-container");
  const allTags = tagContainer.childNodes;
  allTags.forEach((child) => {
    if (child.innerText === element.innerText) {
      // Remove the tag and re render the recipes list with the updated tag list
      tagContainer.removeChild(child);
      setRecipeList(getAllRecipes());
      setRecipListSearch(getAllRecipes());
      updateRecipeList(getAllRecipes(), getTags());
    }
  });
  // Returns the item to the main dropdown list
  currentDropdown.appendChild(element);
}

// Search function for the filters in the drop down
function search(elements, value) {
  const filteredElements = () => {
    return elements.filter((el) =>
      el.toLowerCase().includes(value.toLowerCase())
    );
  };
  return filteredElements();
}

export default { selectedElement, handleClick, search };
