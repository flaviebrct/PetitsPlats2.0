export default function SelectedTag(tags) {
  const tagContainer = document.querySelector(".tags-container");
  const tagElement = document.querySelectorAll(".tag");

  if (tagElement != null) {
    tagContainer.innerHTML = "";
  }

  tags.forEach((element) => {
    const tag = document.createElement("span");
    tag.classList.add("tag");
    tag.innerHTML = element;
    tagContainer.appendChild(tag);
  });
  return tagContainer;
}
