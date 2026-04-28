import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { NavLink } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen w-full  overflow-x-hidden">
      {/* SIDEBAR (DESKTOP) */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 min-w-0 px-4 py-6 pb-24 md:pb-6 md:px-12 max-w-6xl mx-auto md:ml-64">
        
        <Outlet />
      </div>

      {/* MOBILE NAV */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around py-4 md:hidden">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#1d3e29] font-semibold bg-white/10"
              : "text-gray-500 text-xs"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/meal-plan"
          className={({ isActive }) =>
            isActive ? "text-[#1d3e29] font-semibold" : "text-gray-500 text-xs"
          }
        >
          Plan
        </NavLink>
        <NavLink
          to="/recipes"
          className={({ isActive }) =>
            isActive ? "text-[#1d3e29] font-semibold" : "text-gray-500 text-xs"
          }
        >
          Recipes
        </NavLink>
        <NavLink
          to="/grocery"
          className={({ isActive }) =>
            isActive ? "text-[#1d3e29] font-semibold" : "text-gray-500 text-xs"
          }
        >
          List
        </NavLink>

        <span className="text-xs text-gray-400">Profile</span>
      </div>
    </div>
  );
};

export default MainLayout;
