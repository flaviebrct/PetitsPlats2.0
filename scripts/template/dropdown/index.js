function createDropdown(data, typeOfData) {
  const dropdownContainer = document.createElement("div");
  dropdownContainer.classList.add("dropdown");

  const button = document.createElement("button");
  button.setAttribute("aria-haspopup", "listbox");
  button.setAttribute("type", "button");
  button.setAttribute("aria-labelledby", "dropdown-label");
  button.classList.add("dropdown-toggle");
  button.innerHTML = typeOfData;
  button.focus();

  const arrow = document.createElement("img");
  arrow.setAttribute("src", "assets/icons/arrow.svg");
  arrow.setAttribute(
    "alt",
    "boutton permettant d'afficher la liste des filtres"
  );
  arrow.classList.add("arrow");

  button.appendChild(arrow);

  const dropdownDataContainer = document.createElement("div");
  dropdownDataContainer.classList.add("dropdown-list", "hidden");
  dropdownDataContainer.setAttribute("role", "listbox");
  dropdownDataContainer.setAttribute("aria-expanded", "false");

  const dropdownList = document.createElement("ul");
  dropdownList.classList.add("dropdown-ul");

  const dropdownInputContainer = document.createElement("div");
  dropdownInputContainer.classList.add("dropdown-input-container");

  const dropdownInput = document.createElement("input");
  dropdownInput.setAttribute("type", "text");
  dropdownInput.classList.add("dropdown-input");

  const searchIcon = document.createElement("img");
  searchIcon.classList.add("search-icon");
  searchIcon.setAttribute("src", "./assets/icons/search-grey.svg");
  searchIcon.setAttribute("alt", "bouton permetant de lancer la recherche");

  dropdownInputContainer.appendChild(dropdownInput);
  dropdownInputContainer.appendChild(searchIcon);

  dropdownDataContainer.appendChild(dropdownInputContainer);
  dropdownDataContainer.appendChild(dropdownList);

  // Using a loop to create all the filters list items
  data.forEach((value) => {
    const listItem = document.createElement("li");
    listItem.classList.add("listbox-item");
    listItem.setAttribute(
      "id",
      data.indexOf(value) + "-" + value.split(" ")[0]
    );
    listItem.innerHTML = `${value}`;
    dropdownList.appendChild(listItem);
  });

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

  // if(selectedFilter) {
  //   console.log("it's working", selectedFilter);
  // }

  return dropdownContainer;
}

export default createDropdown;
