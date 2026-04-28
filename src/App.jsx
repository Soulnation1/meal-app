import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Grocery from "./pages/Grocery";
import MealPlan from "./components/MealPlan";
import Recipes from "./components/Recipes";
import MainLayout from "./layout/MainLayout";
import RecipeDetails from "./components/RecipeDetails";
import Nutrition from "./pages/Nutrition";
function App() {
  return (
    <Routes>

      {/* LAYOUT WRAPPER */}
      <Route path="/" element={<MainLayout />}>

        <Route index element={<Home />} />
        <Route path="meal-plan" element={<MealPlan />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="grocery" element={<Grocery />} />
        <Route path="recipes/:id" element={<RecipeDetails />} />
        <Route path="nutrition" element={<Nutrition />} />

      </Route>

    </Routes>
  );
}

export default App;