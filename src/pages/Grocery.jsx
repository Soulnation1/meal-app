import PageHeader from "../components/PageHeader";
import { useMeal } from "../context/MealContext";
import { useState } from "react";

const Grocery = () => {
  const { plans, activeDay } = useMeal();
  const [checkedItems, setCheckedItems] = useState(new Set());

  const currentPlan = plans[activeDay];

  const ingredientsMap = {
    "Chicken Bowl": ["Chicken", "Rice", "Vegetables"],
    "Grilled Chicken Salad": ["Chicken", "Lettuce", "Tomatoes"],
    "Oatmeal & Banana": ["Oats", "Banana", "Milk"],
    "Rice & Stew": ["Rice", "Tomato Sauce", "Oil"],
  };

  const groceryItems = [
    ...new Set(
      Object.values(currentPlan)
        .filter(Boolean)
        .flatMap((meal) => ingredientsMap[meal.name] || []),
    ),
  ];

  const toggleItem = (item) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(item)) {
      newChecked.delete(item);
    } else {
      newChecked.add(item);
    }
    setCheckedItems(newChecked);
  };

  return (
    <div className="space-y-6">
      <PageHeader showBack title="Grocery List" />
      {groceryItems.length === 0 ? (
        <div className="glass-card rounded-[32px] p-8 text-center text-slate-600">
          <p className="text-lg font-semibold text-slate-900">No items yet</p>
          <p className="mt-2 text-sm text-slate-500">
            Add meals to your plan to generate a grocery list.
          </p>
        </div>
      ) : (
        <div className="glass-card rounded-[32px] p-6 bg-gradient-to-br from-white via-emerald-50/85 to-white/95">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Shopping list
              </h2>
              <p className="text-sm text-slate-500">
                Tap ingredients as you shop.
              </p>
            </div>
            <span className="rounded-full bg-emerald-100 px-3 py-2 text-xs font-semibold text-emerald-800 shadow-sm">
              {groceryItems.length} items
            </span>
          </div>

          <ul className="space-y-3">
            {groceryItems.map((item) => (
              <li
                key={item}
                onClick={() => toggleItem(item)}
                className={`flex cursor-pointer items-center justify-between gap-3 rounded-3xl border px-4 py-4 transition ${
                  checkedItems.has(item)
                    ? "border-emerald-200 bg-emerald-50 text-slate-500 line-through"
                    : "border-slate-200 bg-white/90 hover:border-emerald-300 hover:bg-emerald-50/90 hover:text-emerald-800"
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={checkedItems.has(item)}
                    onChange={() => toggleItem(item)}
                    className="h-5 w-5 accent-emerald-600"
                  />
                  <span className="font-medium text-slate-800">{item}</span>
                </div>
                <span className="text-xs text-slate-500">Click to mark</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Grocery;
