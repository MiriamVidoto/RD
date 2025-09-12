// getRecommendations.js

const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [] },
  products
) => {
  const { selectedPreferences = [], selectedFeatures = [], selectedRecommendationType } = formData;

  const productRecommendations = products.map((product) => {
    let score = 0;

    selectedPreferences.forEach((preference) => {
      if (product.preferences.includes(preference)) {
        score += 1;
      }
    });

    selectedFeatures.forEach((feature) => {
      if (product.features.includes(feature)) {
        score += 1;
      }
    });

    return { ...product, score };
  }).filter(product => product.score > 0).sort((a, b) => b.score - a.score);


  if (selectedRecommendationType === 'SingleProduct') {
    return productRecommendations.length !== 0 ?[productRecommendations[productRecommendations.length - 1]] : [];
  }

  return productRecommendations || [];
};

export default { getRecommendations };
