import { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const [plans, setPlans] = useState(() => {
    const saved = localStorage.getItem("mealPlans");
    return saved
      ? JSON.parse(saved)
      : {
          0: {},
          1: {},
          2: {},
          3: {},
          4: {},
          5: {},
          6: {},
        };
  });

  useEffect(() => {
    localStorage.setItem("mealPlans", JSON.stringify(plans));
  }, [plans]);

  const addToPlan = (day, mealType, recipe) => {
    setPlans((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [mealType]: recipe,
      },
    }));
  };

  const [activeDay, setActiveDay] = useState(() => {
    return Number(localStorage.getItem("activeDay")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("activeDay", activeDay);
  }, [activeDay]);
  return (
    <MealContext.Provider value={{ plans, addToPlan, activeDay, setActiveDay }}>
      {children}
    </MealContext.Provider>
  );
};

export const useMeal = () => useContext(MealContext);
