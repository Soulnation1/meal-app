import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMeal } from "../context/MealContext";
import PageHeader from "../components/PageHeader";

const recipes = [
  {
    id: 1,
    name: "Chicken Bowl",
    kcal: 620,
    image: "/chicken-bowl.jpg",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Oatmeal & Banana",
    kcal: 350,
    image: "/oatmeal.jpg",
    rating: 4.2,
  },
];

const RecipeDetails = () => {
  const { id } = useParams();
const { addToPlan, activeDay } = useMeal();
  const [isAdded, setIsAdded] = useState(false);

  // ✅ GET CURRENT RECIPE
  const recipe = recipes.find(
    (item) => item.id === Number(id)
  );

  // ✅ SAFETY
  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  const handleAddToPlan = () => {
    addToPlan(activeDay, "Lunch", {
  name: recipe.name,
  kcal: recipe.kcal,
});

    setIsAdded(true);
  };

  return (
    <div>
      {/* HEADER */}
      <PageHeader title="Recipe" showBack />

      {/* IMAGE */}
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-[60%] mx-auto h-auto object-cover rounded-2xl"
      />

      {/* CONTENT */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold">
          {recipe.name}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          {recipe.kcal} kcal • ⭐ {recipe.rating}
        </p>

        <h3 className="mt-4 font-semibold">Ingredients</h3>
        <ul className="text-sm text-gray-600 mt-2 space-y-1">
          <li>Chicken</li>
          <li>Rice</li>
          <li>Vegetables</li>
        </ul>

        <button
          onClick={handleAddToPlan}
          className="mt-6 w-full bg-[#061a00] text-white py-3 rounded-xl"
        >
          {isAdded
            ? "🥙 Added! Go to Grocery"
            : "Add to Plan"}
        </button>
      </div>
    </div>
  );
};

export default RecipeDetails;