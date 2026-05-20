import { useState } from "react";
import { useMeal } from "../context/MealContext";
import PageHeader from "../components/PageHeader";
import { useUser } from "../context/UserContext";
import Culture from "../components/Culture";

const MealPlan = () => {
  const { plans, activeDay, setActiveDay, lastUpdatedBy } = useMeal();
  const currentPlan = plans[activeDay];
  const [checked, setChecked] = useState({
    Breakfast: false,
    Lunch: false,
    Dinner: false,
  });

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const { user } = useUser();
  const blendRotation = ["Yoruba", "Igbo", "All"];
  const todayIndex = new Date().getDay();
  const blendedCulture = blendRotation[todayIndex % blendRotation.length];
  const activeCulture =
    user.activeCulture === "Blend" ? blendedCulture : user.activeCulture;
  const culturalMeals = {
    Yoruba: {
      Breakfast: [
        { food: "Akara & Pap", kcal: 350 },
        { food: "Yam & Egg", kcal: 400 },
        { food: "Moi Moi & Custard", kcal: 370 },
      ],
      Lunch: [
        { food: "Amala & Ewedu", kcal: 700 },
        { food: "Ofada Rice", kcal: 650 },
        { food: "Eba & Egusi", kcal: 720 },
      ],
      Dinner: [
        { food: "Jollof Rice", kcal: 600 },
        { food: "Pounded Yam", kcal: 750 },
        { food: "Beans & Dodo", kcal: 550 },
      ],
    },
    Igbo: {
      Breakfast: [
        { food: "Okpa", kcal: 300 },
        { food: "Akamu & Bread", kcal: 350 },
        { food: "Yam Porridge", kcal: 420 },
      ],
      Lunch: [
        { food: "Ofe Nsala", kcal: 720 },
        { food: "Abacha", kcal: 500 },
        { food: "Fufu & Oha Soup", kcal: 760 },
      ],
      Dinner: [
        { food: "White Rice & Stew", kcal: 600 },
        { food: "Nkwobi", kcal: 650 },
        { food: "Beans & Plantain", kcal: 540 },
      ],
    },
    All: {
      Breakfast: [
        { food: "Bread & Egg", kcal: 320 },
        { food: "Pancakes", kcal: 400 },
        { food: "Tea & Sandwich", kcal: 350 },
      ],
      Lunch: [
        { food: "Jollof Rice", kcal: 600 },
        { food: "Fried Rice & Chicken", kcal: 750 },
        { food: "Spaghetti", kcal: 550 },
      ],
      Dinner: [
        { food: "Chicken Salad", kcal: 450 },
        { food: "Rice & Beans", kcal: 520 },
        { food: "Noodles & Egg", kcal: 480 },
      ],
    },
  };
  const mealCategories = ["Breakfast", "Lunch", "Dinner"];
  const meals = mealCategories.map((category) => {
    const options =
      culturalMeals[activeCulture]?.[category] ||
      culturalMeals["All"][category];
    const rotationIndex = (activeDay + todayIndex) % options.length;
    const selectedMeal = options[rotationIndex];

    return {
      title: category,
      food: selectedMeal.food,
      kcal: selectedMeal.kcal,
    };
  });

  const totalCalories = meals.reduce((sum, meal) => {
    const selected = currentPlan[meal.title];
    return sum + (selected ? selected.kcal : meal.kcal);
  }, 0);

  const toggleCheck = (meal) => {
    setChecked((prev) => ({
      ...prev,
      [meal]: !prev[meal],
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <PageHeader title="Meal Plan" showBack />
        <Culture />
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <div className="glass-card rounded-[32px] p-6 bg-gradient-to-br from-gray-800/80 via-lime-500/10 to-gray-900/80">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
                Today's intake
              </p>
              <h3 className="mt-2 text-3xl font-semibold text-white">
                {totalCalories} kcal
              </h3>
            </div>
            <span className="rounded-3xl bg-lime-500/20 px-4 py-2 text-sm font-semibold text-lime-400 shadow-sm">
              {activeCulture}
            </span>
          </div>
          {lastUpdatedBy && (
            <p className="mt-4 text-sm text-gray-400">
              Last updated by{" "}
              <span className="font-semibold text-white">{lastUpdatedBy}</span>
            </p>
          )}
        </div>

        <div className="glass-card rounded-[32px] p-6">
          <h4 className="text-base font-semibold text-white">Weekly view</h4>
          <div className="mt-4 flex flex-wrap gap-3">
            {days.map((day, index) => (
              <button
                key={day}
                onClick={() => setActiveDay(index)}
                className={`button-pill rounded-3xl border px-4 py-3 text-sm font-semibold transition ${
                  activeDay === index
                    ? "border-lime-500/50 bg-lime-500/20 text-lime-400"
                    : "border-gray-700 bg-gray-800/50 text-gray-400 hover:border-lime-500/30 hover:bg-gray-700/50 hover:text-lime-300"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {meals.map((meal) => (
          <div key={meal.title} className="glass-card rounded-[32px] p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
                  {meal.title}
                </p>
                <h4 className="mt-2 text-xl font-semibold text-white">
                  {currentPlan[meal.title]
                    ? currentPlan[meal.title].name
                    : meal.food}
                </h4>
                <p className="mt-1 text-sm text-gray-500">
                  {currentPlan[meal.title]
                    ? currentPlan[meal.title].kcal
                    : meal.kcal}{" "}
                  kcal
                </p>
              </div>
              <label className="inline-flex items-center gap-3 rounded-3xl border border-lime-500/30 bg-lime-500/10 px-4 py-3 shadow-sm">
                <input
                  type="checkbox"
                  checked={checked[meal.title]}
                  onChange={() => toggleCheck(meal.title)}
                  className="h-5 w-5 accent-lime-400"
                />
                <span className="text-sm font-semibold text-lime-400">
                  Completed
                </span>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealPlan;
