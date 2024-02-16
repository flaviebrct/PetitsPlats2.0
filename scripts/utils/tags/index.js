import SelectedTag from "../../template/SelectedTag/index.js";

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
      tagClicked(child);
    });
  });
}

function tagClicked(child) {
  if (!selectedFilter.includes(child.innerHTML.toLowerCase())) {
    selectedFilter.push(child.innerHTML.toLowerCase());
    child.classList.add("selected");
    SelectedTag(child.id, child.innerHTML);
  } else {
    return;
  }
  
  const tags = document.querySelectorAll(".tag");
  for (let i = 0; i < tags.length; i++) {
    if (tags[i].id === child.id) {
      listenOnTag(tags[i], child);
      break;
    }
  }
}

function listenOnTag(tag, child) {
  tag.addEventListener("click", () => {
    removeTag(tag, child);
  });
}

function removeTag(tag, child) {
  for (let i = 0; i < selectedFilter.length; i++) {
    if (selectedFilter[i] === child.innerText) {
      selectedFilter.splice(i, 1);
      const tagContainer = document.querySelector(".tags-container");
      tagContainer.removeChild(tag);
    }
  }
}

export default { addTag };
