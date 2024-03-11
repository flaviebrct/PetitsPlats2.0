import SelectedTag from "../../template/SelectedTag/index.js";

import handleTag from "../dropdown/index.js";

const selectedFilter = [];
async function addTag(fetchedData) {
  await fetchedData;

  const listResult = document.querySelectorAll(".dropdown-ul");
  const toggle = document.querySelectorAll(".dropdown-toggle");

  toggle.forEach((el, index) => {
    el.addEventListener("click", () => {
      listenOnChildren(listResult[index]);
    });
  });
}

function listenOnChildren(currentDropdown) {
  currentDropdown.childNodes.forEach((child) => {
    child.addEventListener("click", () => {
      filterClicked(child, currentDropdown);
    });
  });
}

function filterClicked(child, currentDropdown) {
  if (!selectedFilter.includes(child.innerText)) {
    selectedFilter.push(child.innerText);
    const capitalizedChild = child.innerText.replace(
      child.innerText.charAt(0),
      child.innerText.charAt(0).toUpperCase()
    );
    currentDropdown.removeChild(child);
    SelectedTag(child.dataset.id, capitalizedChild);
    handleTag.selectedElement(child.dataset.id, child, currentDropdown, "add");
  }
  loopOnTags(child, currentDropdown);
}

function loopOnTags(child, currentDropdown) {
  const tags = document.querySelectorAll(".tag");
  for (let i = 0; i < tags.length; i++) {
    if (tags[i].dataset.id === child.dataset.id) {
      listenOnTag(tags[i], child, currentDropdown);
      break;
    }
  }
}

function listenOnTag(tag, child, currentDropdown) {
  tag.addEventListener("click", () => {
    removeTag(tag, child, currentDropdown);
  });
}

function removeTag(tag, child, currentDropdown) {
  for (let i = 0; i < selectedFilter.length; i++) {
    if (selectedFilter[i] === child.innerText) {
      selectedFilter.splice(i, 1);
      handleTag.selectedElement(
        child.dataset.id,
        child,
        currentDropdown,
        "remove",
        tag
      );
    }
  }
}

export default { addTag };
