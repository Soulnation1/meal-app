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
    image: "/amala.jpg",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Akpu & Egusi",
    category: "Lunch",
    culture: "Igbo",
    kcal: 700,
    image: "/nsala.jpg",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Jollof Rice",
    category: "Lunch",
    culture: "All",
    kcal: 600,
    image: "/jollof.jpg",
    rating: 4.9,
  },
];

const Recipes = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const { user } = useUser();
  const blendRotation = ["Yoruba", "Igbo", "All"];
  const todayIndex = new Date().getDay();
  const blendedCulture = blendRotation[todayIndex % blendRotation.length];
  const activeCulture =
    user.activeCulture === "Blend" ? blendedCulture : user.activeCulture;

  const filteredRecipes =
    activeFilter === "All"
      ? recipes
      : recipes.filter((recipe) => recipe.category === activeFilter);

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
          <p className="text-sm text-slate-500">
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
            className="w-full rounded-3xl border border-emerald-200/70 bg-emerald-50/95 px-5 py-3 text-slate-700 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          {["All", "Breakfast", "Lunch", "Dinner"].map((item) => (
            <button
              key={item}
              onClick={() => setActiveFilter(item)}
              className={`button-pill rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeFilter === item
                  ? "bg-emerald-600 text-white shadow-lg"
                  : "bg-emerald-50 text-emerald-800 shadow-sm hover:bg-emerald-100 hover:text-emerald-900"
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
