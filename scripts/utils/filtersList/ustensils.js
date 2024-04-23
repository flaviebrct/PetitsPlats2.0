function getUstensils(data) {
  const ustensilsArray = [];

  data.forEach((recipe) => {
    // Add all ingredients not include in the array
    recipe.ustensils.forEach((element) => {
      if (!ustensilsArray.includes(element.toLowerCase())) {
        ustensilsArray.push(element.toLowerCase());
      }
    });
  });

  return ustensilsArray;
}

export default getUstensils;
