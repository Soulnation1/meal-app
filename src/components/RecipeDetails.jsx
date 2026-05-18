import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useMeal } from "../context/MealContext";
import PageHeader from "../components/PageHeader";

const recipes = [
  {
    id: 1,
    name: "Chicken Bowl",
    kcal: 620,
    image: "/chicken-bowl.jpg",
    rating: 4.5,
    ingredients: ["Chicken", "Rice", "Vegetables"],
    description:
      "A balanced bowl packed with protein, grains, and fresh greens.",
  },
  {
    id: 2,
    name: "Oatmeal & Banana",
    kcal: 350,
    image: "/oatmeal.jpg",
    rating: 4.2,
    ingredients: ["Oats", "Banana", "Milk"],
    description: "A creamy, energizing breakfast to fuel your day.",
  },
];

const RecipeDetails = () => {
  const { id } = useParams();
  const { addToPlan, activeDay } = useMeal();
  const [isAdded, setIsAdded] = useState(false);
  const navigate = useNavigate();
  const recipe = recipes.find((item) => item.id === Number(id));

  if (!recipe) {
    return <p className="text-slate-600">Recipe not found</p>;
  }

  const handleAddToPlan = () => {
    addToPlan(activeDay, "Lunch", {
      name: recipe.name,
      kcal: recipe.kcal,
    });

    setIsAdded(true);
    setTimeout(() => {
      navigate("/meal-plan");
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
              <h2 className="text-3xl font-semibold text-slate-900">
                {recipe.name}
              </h2>
              <p className="mt-2 text-slate-500">{recipe.description}</p>
            </div>
            <div className="rounded-3xl bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
              ⭐ {recipe.rating}
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-200/90 bg-emerald-50/85 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                Nutrition
              </p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">
                {recipe.kcal} kcal
              </p>
            </div>
            <div className="rounded-3xl border border-emerald-200/90 bg-emerald-50/85 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                Ingredients
              </p>
              <ul className="mt-3 space-y-2 text-slate-700">
                {recipe.ingredients.map((item) => (
                  <li key={item} className="rounded-2xl bg-slate-50 px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button
            onClick={handleAddToPlan}
            className="button-pill mt-6 w-full rounded-3xl bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:from-emerald-500 hover:to-emerald-600"
          >
            {isAdded ? "🥙 Added! Redirecting..." : "Add to Plan"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
