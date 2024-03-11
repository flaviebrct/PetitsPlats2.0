function selectedElement(id, element, currentDropdown, key, tag) {
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
      handleClick(selectedUl, selectedLi, currentDropdown);
      break;
    case "remove":
      const elementRemove = document.querySelectorAll(".listbox-item.selected");
      elementRemove.forEach((el) => {
        if (el.innerText === element.innerText) {
          removeFilter(selectedUl, el, currentDropdown, tag);
        }
      });
      break;
    default:
      break;
  }
}

function handleClick(selectedUl, selectedLi, currentDropdown) {
  selectedLi.addEventListener("click", () => {
    removeFilter(selectedUl, selectedLi, currentDropdown);
  });
}

function removeFilter(selectedUl, element, currentDropdown, tag) {
  element.classList.remove("selected");
  const tagContainer = document.querySelector(".tags-container");
  const allTags = tagContainer.childNodes;
  allTags.forEach((child) => {
    console.log(child.innerText);
    console.log(element.innerText);
    if (child.innerText === element.innerText) {
      tagContainer.removeChild(child);
    }
  });
  currentDropdown.appendChild(element);
}

function search(elements, value) {
  const filteredElements = () => {
    return elements.filter((el) =>
      el.toLowerCase().includes(value.toLowerCase())
    );
  };
  return filteredElements();
}

export default { selectedElement, handleClick, search };
