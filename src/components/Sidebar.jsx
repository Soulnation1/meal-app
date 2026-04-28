import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col fixed top-0 left-0 h-screen w-64 bg-[#1d3e29] text-white p-6">
      <h2 className="text-xl font-semibold mb-8">
        Meal<span className="italic">safe</span>
      </h2>
      <nav className="flex flex-col gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-semibold bg-green-300/50 px-3 py-2 rounded-lg  hover:translate-y-1 transition-all duration-300 "
              : "text-white/90 text-sm font-semibold px-3 py-2  hover:translate-y-1 transition-all duration-300"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/meal-plan"
          className={({ isActive }) =>
            isActive
                           ? "font-semibold bg-green-300/50 px-3 py-2 rounded-lg  hover:translate-y-1 transition-all duration-300 "
              : "text-white/90 text-sm font-semibold px-3 py-2  hover:translate-y-1 transition-all duration-300"
 }
        >
          Meal Plan
        </NavLink>
        <NavLink
          to="/recipes"
          className={({ isActive }) =>
            isActive
              ? "font-semibold bg-green-300/50 px-3 py-2 rounded-lg  hover:translate-y-1 transition-all duration-300 "
              : "text-white/90 text-sm font-semibold px-3 py-2  hover:translate-y-1 transition-all duration-300"
          }
        >
          Recipes
        </NavLink>
        <NavLink
          to="/grocery"
          className={({ isActive }) =>
            isActive
              ? "font-semibold bg-green-300/50 px-3 py-2 rounded-lg  hover:translate-y-1 transition-all duration-300 "
              : "text-white/90 text-sm font-semibold px-3 py-2  hover:translate-y-1 transition-all duration-300"
          }
        >
          Grocery
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
