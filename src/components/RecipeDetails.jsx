import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useMeal } from "../context/MealContext";
import PageHeader from "../components/PageHeader";
import { recipes } from "../data/recipes";

const RecipeDetails = () => {
  const { id } = useParams();
  const { addToPlan, activeDay } = useMeal();
  const [isAdded, setIsAdded] = useState(false);
  const navigate = useNavigate();
  const recipe = recipes.find((item) => item.id === Number(id));
  if (!recipe) {
    return <p className="text-gray-400">Recipe not found</p>;
  }
  const handleAddToPlan = () => {
    addToPlan(activeDay, "Lunch", {
      name: recipe.name,
      kcal: recipe.kcal,
      ingredients: recipe.ingredients,
    });
    setIsAdded(true);
    setTimeout(() => {
      navigate("/grocery", {
        state: {
          recipeName: recipe.name,
          recipeIngredients: recipe.ingredients,
        },
      });
    }, 800);
  };
  return (
    <div className="space-y-6">
      <PageHeader title="Recipe" showBack />

      <div className="glass-card rounded-[32px] overflow-hidden shadow-xl">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full object-cover brightness-95"
        />
        <div className="p-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white">
                {recipe.name}
              </h2>
              <p className="mt-2 text-gray-400">{recipe.description}</p>
            </div>
            <div className="rounded-3xl bg-lime-500/20 px-4 py-2 text-sm font-semibold text-lime-400">
              ⭐ {recipe.rating}
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-lime-500/20 bg-lime-500/10 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
                Nutrition
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">
                {recipe.kcal} kcal
              </p>
            </div>
            <div className="rounded-3xl border border-lime-500/20 bg-lime-500/10 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
                Ingredients
              </p>
              <ul className="mt-3 space-y-2 text-gray-300">
                {recipe.ingredients.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl bg-gray-800/50 px-3 py-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button
            onClick={handleAddToPlan}
            className="button-pill mt-6 w-full rounded-3xl bg-gradient-to-r from-lime-500 to-lime-400 px-6 py-4 text-base font-semibold text-gray-950 shadow-lg shadow-lime-500/50 transition hover:from-lime-400 hover:to-lime-300 hover:shadow-lime-500/70"
          >
            {isAdded ? "🥙 Added! Redirecting..." : "Add to Plan"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
