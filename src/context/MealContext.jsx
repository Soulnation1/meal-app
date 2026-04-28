import { createContext, useContext, useState } from "react";

const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const [plans, setPlans] = useState({
  0: { Breakfast: null, Lunch: null, Dinner: null },
  1: { Breakfast: null, Lunch: null, Dinner: null },
  2: { Breakfast: null, Lunch: null, Dinner: null },
  3: { Breakfast: null, Lunch: null, Dinner: null },
  4: { Breakfast: null, Lunch: null, Dinner: null },
  5: { Breakfast: null, Lunch: null, Dinner: null },
  6: { Breakfast: null, Lunch: null, Dinner: null },
});

 const addToPlan = (day, mealType, recipe) => {
  setPlans((prev) => ({
    ...prev,
    [day]: {
      ...prev[day],
      [mealType]: recipe,
    },
  }));
};
const [activeDay, setActiveDay] = useState(0);
  return (
    <MealContext.Provider value={{ plans, addToPlan,activeDay,
    setActiveDay, }}>
      {children}
    </MealContext.Provider>
  );
};

export const useMeal = () => useContext(MealContext);