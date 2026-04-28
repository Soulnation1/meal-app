import RecipeCard from "../components/RecipeCard";
import { useState } from "react";

const recipes = [
  {
    id: 1,
    name: "Chicken Bowl",
    category: "Lunch",
    kcal: 620,
    image: "/chicken-bowl.jpg",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Oatmeal & Banana",
    category: "Breakfast",
    kcal: 350,
    image: "/oatmeal.jpg",
    rating: 4.2,
  },
  {
    id: 3,
    name: "Rice & Stew",
    category: "Dinner",
    kcal: 500,
    image: "/rice-stew.jpg",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Grilled Chicken Salad",
    category: "Lunch",
    kcal: 400,
    image: "/chicken-salad.jpg",
    rating: 4.5,
  },
];

const Recipes = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredRecipes =
    activeFilter === "All"
      ? recipes
      : recipes.filter(
          (recipe) => recipe.category === activeFilter
        );

  return (
    <div>
      {/* HEADER */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Recipes</h2>
        <p className="text-sm text-gray-500">
          Find meals you’ll love
        </p>
      </div>

      {/* SEARCH */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search recipes..."
          className="w-full p-3 rounded-xl border outline-none"
        />
      </div>

      {/* FILTERS */}
      <div className="flex gap-2 overflow-x-auto mb-6">
        {["All", "Breakfast", "Lunch", "Dinner"].map((item) => (
          <button
            key={item}
            onClick={() => setActiveFilter(item)}
            className={`px-4 py-2 rounded-full text-sm ${
              activeFilter === item
                ? "bg-[#1d3e29] text-white"
                : "bg-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;