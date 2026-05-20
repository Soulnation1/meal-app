import PageHeader from "../components/PageHeader";
import { useMeal } from "../context/MealContext";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Grocery = () => {
  const { plans } = useMeal();
  const location = useLocation();
  const { recipeName, recipeIngredients } = location.state || {};

  const [checkedItems, setCheckedItems] = useState(new Set());

  // GENERATE INGREDIENTS DYNAMICALLY
  const groceryItems = recipeIngredients?.length
    ? [...new Set(recipeIngredients)]
    : [
        ...new Set(
          plans.flatMap((day) =>
            Object.values(day)
              .filter(Boolean)
              .flatMap((meal) => meal.ingredients || []),
          ),
        ),
      ];

  // TOGGLE CHECKED ITEMS
  const toggleItem = (item) => {
    const updated = new Set(checkedItems);

    if (updated.has(item)) {
      updated.delete(item);
    } else {
      updated.add(item);
    }

    setCheckedItems(updated);
  };

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <PageHeader showBack title="Grocery List" />

      {/* EMPTY STATE */}
      {groceryItems.length === 0 ? (
        <div className="glass-card rounded-[32px] p-8 text-center border border-lime-500/20 bg-[rgba(40,40,40,0.9)] backdrop-blur-xl">
          <p className="text-lg font-semibold text-white">No items yet</p>

          <p className="mt-2 text-sm text-gray-400">
            Add meals to your plan to generate groceries.
          </p>
        </div>
      ) : (
        <div className="glass-card rounded-[32px] p-6 border border-lime-500/20 bg-[rgba(40,40,40,0.9)] backdrop-blur-xl shadow-[0_0_25px_rgba(57,255,20,0.08)]">
          {/* TOP SECTION */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">
                {recipeName
                  ? `Ingredients needed for ${recipeName}`
                  : "Ingredients needed for your grocery list"}
              </h2>

              <p className="text-sm text-gray-400">
                Tap ingredients as you shop.
              </p>
            </div>

            <span className="rounded-full border border-lime-500/20 bg-lime-500/10 px-4 py-2 text-xs font-semibold text-lime-400">
              {groceryItems.length} items
            </span>
          </div>

          {/* ITEMS */}
          <ul className="space-y-3">
            {groceryItems.map((item) => (
              <li
                key={item}
                onClick={() => toggleItem(item)}
                className={`flex cursor-pointer items-center justify-between rounded-2xl border px-4 py-4 transition-all duration-300 ${
                  checkedItems.has(item)
                    ? "border-lime-500/20 bg-lime-500/10"
                    : "border-lime-500/10 bg-gray-900/60 hover:border-lime-400/30 hover:bg-lime-500/5"
                }`}
              >
                {/* LEFT */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={checkedItems.has(item)}
                    onChange={() => toggleItem(item)}
                    className="h-5 w-5 accent-lime-500"
                  />

                  <span
                    className={`font-medium ${
                      checkedItems.has(item)
                        ? "text-gray-500 line-through"
                        : "text-white"
                    }`}
                  >
                    {item}
                  </span>
                </div>

                {/* RIGHT LABEL */}
                <span
                  className={`text-xs ${
                    checkedItems.has(item) ? "text-lime-400" : "text-gray-500"
                  }`}
                >
                  {checkedItems.has(item) ? "shopped" : "Shopped? Tap to mark"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Grocery;
