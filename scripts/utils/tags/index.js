import SelectedTag from "../../template/SelectedTag/index.js";

import { getTags } from "../../index.js";

import handleTag from "../dropdown/index.js";

import {
  setRecipeList,
  getAllRecipes,
  setRecipListSearch,
} from "../getData.js";

import { updateRecipeList } from "../searchRecipies.js";

const selectedFilter = [];

// Function that get all the dropdowns and listen on each
async function listenOnDropdowns(fetchedData) {
  await fetchedData;

  const listResult = document.querySelectorAll(".dropdown-ul");
  const toggle = document.querySelectorAll(".dropdown-toggle");

  toggle.forEach((el, index) => {
    el.addEventListener("click", () => {
      listenOnChildren(listResult[index]);
    });
  });
}

// Function that listen on every filters of one dropdown
function listenOnChildren(currentDropdown) {
  currentDropdown.childNodes.forEach((child) => {
    child.addEventListener("click", () => {
      filterClicked(child, currentDropdown);
    });
  });
}

// Function that add the selected filter to the selected list and add a tag for the filter
function filterClicked(child, currentDropdown) {
  if (!selectedFilter.includes(child.innerText)) {
    selectedFilter.push(child.innerText);
    const capitalizedChild = child.innerText.replace(
      child.innerText.charAt(0),
      child.innerText.charAt(0).toUpperCase()
    );
    currentDropdown.removeChild(child);
    SelectedTag(child.dataset.id, capitalizedChild);
    handleTag.selectedElement(child, currentDropdown, "add");
  }
  loopOnTags(child, currentDropdown);
}

// Function that triggers an event listener on each tag displayed
function loopOnTags(child, currentDropdown) {
  const tags = document.querySelectorAll(".tag");
  for (let i = 0; i < tags.length; i++) {
    if (tags[i].dataset.id === child.dataset.id) {
      getTags();

      tags[i].addEventListener("click", () => {
        removeTag(tags[i], child, currentDropdown);
      });
      break;
    }
  }
}

// Function that remove the tag and re render all the recipes cards
function removeTag(tag, child, currentDropdown) {
  for (let i = 0; i < selectedFilter.length; i++) {
    if (selectedFilter[i] === child.innerText) {
      selectedFilter.splice(i, 1);
      handleTag.selectedElement(child, currentDropdown, "remove", tag);
      getTags();
    }
  }
  setRecipeList(getAllRecipes());
  setRecipListSearch(getAllRecipes());
  updateRecipeList(getAllRecipes(), getTags());
}

export { listenOnDropdowns, selectedFilter };
