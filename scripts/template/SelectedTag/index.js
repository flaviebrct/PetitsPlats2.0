// Create a span for the given element
export default async function SelectedTag(tagId, element) {
  const tagContainer = document.querySelector(".tags-container");
  const tag = document.createElement("span");
  tag.classList.add("tag");
  tag.innerText = element;
  tag.dataset.id = tagId;
  tagContainer.appendChild(tag);
  const crossIcon = document.createElement("img");
  crossIcon.classList.add("cross-icon");
  crossIcon.setAttribute("src", "./assets/icons/cross.svg");
  tag.appendChild(crossIcon);

  return tagContainer;
}
