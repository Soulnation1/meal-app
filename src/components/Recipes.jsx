import RecipeCard from "../components/RecipeCard";
import { useState } from "react";
import { useUser } from "../context/UserContext";
import PageHeader from "./PageHeader";
import Culture from "./Culture";
import {recipes} from "../data/recipes";

const Recipes = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const { user } = useUser();
  const blendRotation = ["Yoruba", "Igbo", "All"];
  const todayIndex = new Date().getDay();
  const blendedCulture = blendRotation[todayIndex % blendRotation.length];
  const activeCulture =
    user.activeCulture === "Blend" ? blendedCulture : user.activeCulture;
const filteredRecipes = recipes.filter(
  (recipe) => {
    const matchesCategory =
      activeFilter === "All"
        ? true
        : recipe.category === activeFilter;

    const matchesCulture =
      user.activeCulture === "All"
        ? true
        : recipe.culture ===
            user.activeCulture ||
          recipe.culture === "All";

    return (
      matchesCategory &&
      matchesCulture
    );
  }
);
  const finalRecipes = filteredRecipes.filter(
    (recipe) =>
      activeCulture === "All" ||
      recipe.culture === activeCulture ||
      recipe.culture === "All",
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <PageHeader showBack title="Recipes" />
          <p className="text-sm text-gray-400">
            Discover meals that fit your preferences.
          </p>
        </div>
        <Culture />
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="glass-card rounded-[32px] p-5">
          <input
            type="text"
            placeholder="Search recipes..."
            className="w-full rounded-3xl border border-lime-500/20 bg-gray-800/50 px-5 py-3 text-white shadow-sm outline-none transition focus:border-lime-500/50 focus:ring-2 focus:ring-lime-500/30 placeholder-gray-500"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          {["All", "Breakfast", "Lunch", "Dinner"].map((item) => (
            <button
              key={item}
              onClick={() => setActiveFilter(item)}
              className={`button-pill rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeFilter === item
                  ? "bg-lime-500 text-gray-950 shadow-lg shadow-lime-500/50"
                  : "bg-gray-800/50 text-gray-300 shadow-sm hover:bg-gray-700/70 hover:text-lime-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {finalRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
