import dropdownUtils from "../../utils/dropdown/index.js";

export function createDropdown(data, typeOfData) {
  // Create a div that contain the dropdown
  const dropdownContainer = document.createElement("div");
  dropdownContainer.classList.add("dropdown");

  // Create a button to unwrap the dropdown
  const button = document.createElement("button");
  button.setAttribute("aria-haspopup", "listbox");
  button.setAttribute("type", "button");
  button.setAttribute("aria-labelledby", "dropdown-label");
  button.classList.add("dropdown-toggle");
  button.innerHTML = typeOfData;
  button.focus();

  // Create an image to add a chevron to the button
  const arrow = document.createElement("img");
  arrow.setAttribute("src", "assets/icons/arrow.svg");
  arrow.setAttribute(
    "alt",
    "boutton permettant d'afficher la liste des filtres"
  );
  arrow.classList.add("arrow");
  button.appendChild(arrow);

  // Create a div that contain all the filters
  const dropdownDataContainer = document.createElement("div");
  dropdownDataContainer.classList.add("dropdown-list", "hidden");
  dropdownDataContainer.setAttribute("role", "listbox");
  dropdownDataContainer.setAttribute("aria-expanded", "false");

  // Create a list for all the elements selected
  const dropdownSelected = document.createElement("ul");
  dropdownSelected.classList.add("selected-ul");

  // Create a list for all the filters
  const dropdownList = document.createElement("ul");
  dropdownList.classList.add("dropdown-ul");

  // Create a div that contain the search input in the dropdown
  const dropdownInputContainer = document.createElement("div");
  dropdownInputContainer.classList.add("dropdown-input-container");

  // Create the search input
  const dropdownInput = document.createElement("input");
  dropdownInput.setAttribute("type", "text");
  dropdownInput.classList.add("dropdown-input");

  // Create a span with and image of cross for erasing the input value
  const cleanCross = document.createElement("span");
  cleanCross.classList.add("dropdownInput", "clean");
  const cleanCrossIcon = document.createElement("img");
  cleanCrossIcon.setAttribute("src", "./assets/icons/grey-cross.svg");
  cleanCrossIcon.setAttribute(
    "alt",
    "bouton permetant d'effacer le contenu la barre de recherche"
  );
  cleanCross.appendChild(cleanCrossIcon);

  // Create an image with a search icon
  const searchIcon = document.createElement("img");
  searchIcon.classList.add("search-icon");
  searchIcon.setAttribute("src", "./assets/icons/search-grey.svg");
  searchIcon.setAttribute("alt", "bouton indiquant le champ de recherche");

  dropdownInputContainer.appendChild(dropdownInput);
  dropdownInputContainer.appendChild(cleanCross);
  dropdownInputContainer.appendChild(searchIcon);

  dropdownDataContainer.appendChild(dropdownInputContainer);
  dropdownDataContainer.appendChild(dropdownSelected);
  dropdownDataContainer.appendChild(dropdownList);

  // Function that create a list item for every data element given
  createListItem(data, dropdownList);

  dropdownContainer.appendChild(button);
  dropdownContainer.appendChild(dropdownDataContainer);

  // Function to open the dropdown
  function openDropDown() {
    dropdownDataContainer.classList.toggle("hidden");
    button.classList.toggle("open");
    arrow.classList.toggle("open");
    dropdownContainer.classList.toggle("open");
  }

  // Event listener that open the dropdown by clicking
  button.addEventListener("click", openDropDown);

  // Event listener that shows only the filter that match the input value
  dropdownInput.addEventListener("input", () => {
    if (dropdownInput.value.length !== 0) {
      updateList(data, dropdownInput, dropdownList);
      dropdownInput.nextSibling.style.display = "block";
      // Event listener that clear the input value when clicked
      cleanCross.addEventListener("click", () =>
        cleanSearchInput(cleanCross, data, dropdownList)
      );
    } else {
      cleanSearchInput(cleanCross, data, dropdownList);
      dropdownInput.nextSibling.style.display = "none";
    }
  });

  return dropdownContainer;
}

// Function that clear the input and shown all the filter
export default function cleanSearchInput(cleanCross, data, dropdownList) {
  const searchInput = cleanCross.previousElementSibling;

  if (searchInput) {
    cleanCross.style.display = "none";
    dropdownList.innerHTML = "";
    searchInput.value = "";
    createListItem(data, dropdownList);
  }
}

// Function that update the list of filters with the ones that match the input value only
function updateList(data, dropdownInput, dropdownList) {
  const updatedList = dropdownUtils.search(data, dropdownInput.value);
  dropdownList.innerHTML = "";
  createListItem(updatedList, dropdownList);
}

// Function that create a list item for every data element given
function createListItem(data, dropdownList) {
  // Using a loop to create all the filters list items
  data.forEach((value) => {
    const dropdownListItem = document.createElement("li");
    dropdownListItem.classList.add("listbox-item");
    dropdownListItem.dataset.id =
      data.indexOf(value) + "-" + value.split(" ")[0];
    const capitalizedListItem = value.replace(
      value.charAt(0),
      value.charAt(0).toUpperCase()
    );
    dropdownListItem.innerHTML = capitalizedListItem;
    dropdownList.appendChild(dropdownListItem);
  });
}
