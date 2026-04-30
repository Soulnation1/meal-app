import { NavLink } from "react-router-dom";
import "../styles/animations.css";
import { Home, Utensils, Calendar, ShoppingCart } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col fixed top-0 left-0 h-screen w-64 bg-[#061a00] text-white p-6">
      <h2 className="text-3xl font-bold mb-8 animate-fade-in-scale">
        Meal<span className="italic text-green-300/70 font-semibold">safe</span>
      </h2>
      <nav className="flex flex-col gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2
          ${isActive
              ? "font-semibold bg-green-300/50 px-3 py-2 rounded-lg  hover:translate-y-1 transition-all duration-300 "
              : "text-white/90 text-sm font-semibold px-3 py-2  hover:translate-y-1 transition-all duration-300"}`
          }
        >
          <Home size={18}  />Home
        </NavLink>

        <NavLink
          to="/meal-plan"
           className={({ isActive }) =>
            `flex items-center gap-2
          ${isActive
              ? "font-semibold bg-green-300/50 px-3 py-2 rounded-lg  hover:translate-y-1 transition-all duration-300 "
              : "text-white/90 text-sm font-semibold px-3 py-2  hover:translate-y-1 transition-all duration-300"}`
          }
        >
         <Calendar size={18} /> Meal Plan
        </NavLink>
        <NavLink
          to="/recipes"
           className={({ isActive }) =>
            `flex items-center gap-2
          ${isActive
              ? "font-semibold bg-green-300/50 px-3 py-2 rounded-lg  hover:translate-y-1 transition-all duration-300 "
              : "text-white/90 text-sm font-semibold px-3 py-2  hover:translate-y-1 transition-all duration-300"}`
          }
        >
         <Utensils size={18} /> Recipes
        </NavLink>
        <NavLink
          to="/grocery"
           className={({ isActive }) =>
            `flex items-center gap-2
          ${isActive
              ? "font-semibold bg-green-300/50 px-3 py-2 rounded-lg  hover:translate-y-1 transition-all duration-300 "
              : "text-white/90 text-sm font-semibold px-3 py-2  hover:translate-y-1 transition-all duration-300"}`
          }
        >
         <ShoppingCart size={18} /> Grocery
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
