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
    <div>
      <h2 className="text-xl font-semibold mb-6">Grocery List</h2>

      {groceryItems.length === 0 ? (
        <p>No items yet</p>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <ul className="space-y-3">
            {groceryItems.map((item) => (
              <li
                key={item}
                onClick={() => toggleItem(item)}
                className={`p-3 rounded-lg cursor-pointer transition-all ${
                  checkedItems.has(item)
                    ? "bg-[#1d3e29] line-through text-white font-bold "
                    : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                }`}
              >
                <span className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={checkedItems.has(item)}
                    onChange={() => toggleItem(item)}
                    className="w-4 h-4 cursor-pointer"
                  />
                  {item}
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
