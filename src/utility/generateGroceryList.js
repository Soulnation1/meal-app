 const generateGroceryList = (
  plans
) => {
  const ingredients = [];

  plans.forEach((day) => {
    Object.values(day).forEach((meal) => {
      if (
        meal &&
        meal.ingredients
      ) {
        ingredients.push(
          ...meal.ingredients
        );
      }
    });
  });
// to remove duplicate ingredients.
  return [...new Set(ingredients)];
};
export default generateGroceryList;