import { useState } from "react";
import Card from "../components/Card";
import { useMeal } from "../context/MealContext";
import PageHeader from "../components/PageHeader";
// import { CheckCircle } from "lucide-react";

const MealPlan = () => {
const { plans, activeDay, setActiveDay } = useMeal();
  const currentPlan = plans[activeDay];

  const [checked, setChecked] = useState({
    Breakfast: false,
    Lunch: false,
    Dinner: false,
  });

  const meals = [
    { title: "Breakfast", food: "Oatmeal & Banana", kcal: 350 },
    { title: "Lunch", food: "Grilled Chicken Salad", kcal: 520 },
    { title: "Dinner", food: "Rice & Stew", kcal: 600 },
  ];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const toggleCheck = (meal) => {
    setChecked((prev) => ({
      ...prev,
      [meal]: !prev[meal],
    }));
  };
  const totalCalories = Object.values(currentPlan)
  .filter(Boolean)
  .reduce((sum, meal) => sum + meal.kcal, 0);
  return (
    <div>
      {/* HEADER */}

      <div className="flex justify-between items-center mb-6">
        <PageHeader title="Meal Plan" showBack />
        <h2 className="text-xl font-semibold">calendar icon</h2>
      </div>

      {/* SUMMARY */}
      <div className="bg-[#1d3e29] text-white p-5 rounded-2xl shadow-md">
        <h3 className="font-semibold">Today’s Intake</h3>
        <p className="text-sm opacity-90">{totalCalories} kcal</p>
      </div>
      <div className="flex gap-2 overflow-x-auto mt-6 md:justify-center">
        {days.map((day, index) => (
          <div
            key={day}
            onClick={() => setActiveDay(index)}
            className={`px-4 py-2 rounded-xl  text-sm cursor-pointer ${
              activeDay === index ? "bg-[#1d3e29] text-white" : "bg-white"
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      {/* MEALS */}
      <div className="mt-6 space-y-6">
        {meals.map((meal) => (
          <div
            onClick={() => toggleCheck(meal.title)}
            key={meal.title}
            className="cursor-pointer"
          >
            {/* TITLE + CHECKBOX (OUTSIDE CARD) */}
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">{meal.title}</h3>
            </div>

            {/* CARD */}
            <Card className="flex items-center gap-4 ">
              <div className="w-12 h-12 bg-gray-200 rounded-xl "></div>
              <div className="flex justify-between items-center w-full  ">
                <div className="flex flex-col gap-1 ">
                  <p className="text-sm  ">
                    {currentPlan[meal.title]
                      ? `✅ ${currentPlan[meal.title].name}`
                      : meal.food}
                  </p>

                  <span className="text-sm ">
                    {currentPlan[meal.title]
                      ? currentPlan[meal.title].kcal
                      : meal.kcal}{" "}
                    kcal
                  </span>
                </div>

                <input
                  type="checkbox"
                  checked={checked[meal.title]}
                  onChange={() => toggleCheck(meal.title)}
                  className="w-4 h-4 accent-[#1d3e29] rounded-full cursor-pointer  border-red-500 "
                />
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealPlan;
