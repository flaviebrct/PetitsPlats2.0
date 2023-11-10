function Filter(data, typeOfData) {
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

  const dropdownList = document.createElement("ul");
  dropdownList.setAttribute("role", "listbox");
  dropdownList.setAttribute("aria-expanded", "false");
  dropdownList.classList.add("dropdown-list", "hidden");

  // Using a loop to create all the filters list items
  data.forEach((value) => {
    const listItem = document.createElement("li");
    listItem.classList.add("listbox-item");
    listItem.innerHTML = `${value}`;
    dropdownList.appendChild(listItem);

    if (value.toLowerCase() === "popularité") {
      const arrowOpen = document.createElement("img");
      arrowOpen.setAttribute("src", "assets/icons/arrow.svg");
      arrowOpen.setAttribute(
        "alt",
        "boutton permettant d'afficher la liste des filtres"
      );
      arrowOpen.classList.add("arrow", "open");
      listItem.appendChild(arrowOpen);
    }
  });

  dropdownContainer.appendChild(button);
  dropdownContainer.appendChild(dropdownList);

  // Function to open the dropdown
  function openDropDown() {
    dropdownList.classList.remove("hidden");
    dropdownList.setAttribute("aria-expanded", "true");
    button.classList.toggle("open");
  }

  // Function to close the dropdown
  function closeDropDown() {
    dropdownList.classList.add("hidden");
    dropdownList.setAttribute("aria-expanded", "false");
    button.classList.toggle("open");
  }

  // Event listener that open the dropdown by clicking
  button.addEventListener("click", openDropDown);

  // Event listener that open the dropdown with keybord navigation
  button.addEventListener("keyup", (e) => {
    switch (e.key) {
      case "Enter":
        openDropDown();
        break;
    }
  });

  // Event listener that close the dropdown by clicking
  dropdownList.addEventListener("click", closeDropDown);

  // Event listener that close the dropdown with keybord navigation
  dropdownList.addEventListener("keyup", (e) => {
    switch (e.key) {
      case "Escape":
        closeDropDown();
        break;
    }
  });

  const allFilters = Array.from(
    document.getElementsByClassName("listbox-item")
  );
  allFilters.forEach((element) => {
    // Event listener that update the dropdown value with the selected filter by clicking
    element.addEventListener("click", () => {
      const elementValue = element.getAttribute("data-value");
      button.innerHTML = `${elementValue}`;
      button.appendChild(arrow);
    }),
      // Event listener that update the dropdown value with the selected filter with keybord navigation
      element.addEventListener("keyup", (e) => {
        switch (e.key) {
          case "Enter": {
            const elementValue = element.getAttribute("data-value");
            button.innerHTML = `${elementValue}`;
            button.appendChild(arrow);
            break;
          }
        }
      });
  });

  return dropdownContainer;
}

export default Filter;
