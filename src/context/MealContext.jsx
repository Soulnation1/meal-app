import { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const defaultPlans = Array(7)
    .fill(null)
    .map(() => ({
      Breakfast: null,
      Lunch: null,
      Dinner: null,
    }));

  const [plans, setPlans] = useState(() => {
    const savedPlans = localStorage.getItem("mealPlans");

    try {
      return savedPlans ? JSON.parse(savedPlans) : defaultPlans;
    } catch {
      return defaultPlans;
    }
  });
  const [lastUpdatedBy, setLastUpdatedBy] = useState("");

  useEffect(() => {
    localStorage.setItem("mealPlans", JSON.stringify(plans));
  }, [plans]);

  const addToPlan = (dayIndex, mealType, meal, updatedBy = "Partner") => {
    setPlans((prev) => {
      const updated = [...prev];

      updated[dayIndex] = {
        ...updated[dayIndex],
        [mealType]: meal,
      };

      return updated;
    });
    setLastUpdatedBy(updatedBy);
  };

  const [activeDay, setActiveDay] = useState(() => {
    return Number(localStorage.getItem("activeDay")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("activeDay", activeDay);
  }, [activeDay]);
  return (
    <MealContext.Provider
      value={{ plans, addToPlan, activeDay, setActiveDay, lastUpdatedBy }}
    >
      {children}
    </MealContext.Provider>
  );
};

export const useMeal = () => useContext(MealContext);
