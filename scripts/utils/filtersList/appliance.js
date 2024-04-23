function getAppliance(data) {
  const applianceArray = [];

  data.forEach((recipe) => {
    // Add all appliance not include in the array 
    if (!applianceArray.includes(recipe.appliance.toLowerCase())) {
      applianceArray.push(recipe.appliance.toLowerCase());
    }
  });

  return applianceArray;
}

export default getAppliance;
