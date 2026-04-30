import RecipeCard from "../components/RecipeCard";
import { useState } from "react";
import { useUser } from "../context/UserContext";
import PageHeader from "./PageHeader";
import Culture from "./Culture";

const recipes = [
  {
    id: 1,
    name: "Amala & Ewedu",
    category: "Lunch",
    culture: "Yoruba",
    kcal: 700,
  },
  {
    id: 2,
    name: "Akpu & Egusi",
    category: "Lunch",
    culture: "Igbo",
    kcal: 700,
  },

  {
    id: 3,
    name: "Jollof Rice",
    category: "Lunch",
    culture: "All",
    kcal: 600,
  },
];

const Recipes = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredRecipes =
    activeFilter === "All"
      ? recipes
      : recipes.filter((recipe) => recipe.category === activeFilter);
  const { user } = useUser();

  const finalRecipes = filteredRecipes.filter(
    (recipe) =>
      user.activeCulture === "All" ||
      recipe.culture === user.activeCulture ||
      recipe.culture === "All",
  );

  return (
    <div>
      {/* HEADER */}
      <div className="flex justify-between mb-6 ">
        <div>
          <PageHeader showBack title={"Recipes"} />
          <p className="text-sm text-gray-500 italic">Find meals you’ll love</p>
        </div>
        <div>
          <Culture />
        </div>
      </div>

      {/* SEARCH */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search recipes..."
          className="w-full p-3 rounded-xl border border-[#061a00] outline-none"
        />
      </div>

      {/* FILTERS */}
      <div className="flex gap-2 overflow-x-auto mb-6">
        {["All", "Breakfast", "Lunch", "Dinner"].map((item) => (
          <button
            key={item}
            onClick={() => setActiveFilter(item)}
            className={`px-4 py-2 rounded-full text-sm ${
              activeFilter === item ? "bg-[#061a00] text-white" : "bg-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {finalRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
