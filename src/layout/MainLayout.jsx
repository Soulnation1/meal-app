import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { NavLink } from "react-router-dom";
import { Home, Utensils, Calendar, ShoppingCart } from "lucide-react";


const MainLayout = () => {
  return (
    <div className="flex  bg-gradient-to-br from-gray-100 via-white to-gray-200 min-h-screen w-full  overflow-x-hidden">
      {/* SIDEBAR (DESKTOP) */}
      <Sidebar />

      {/* MAIN CONTENT */}
     <div className="flex-1 min-w-0 px-4 py-6 pb-24 md:pb-6 md:px-12 max-w-6xl mx-auto md:ml-64">
  
  {/* subtle background pattern */}
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.08),transparent_60%)]" />

  {/* content wrapper */}
  <div className="relative bg-white/80 backdrop-blur-md rounded-3xl p-4 md:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-white/40">
    
    {/* soft glow overlay */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-100/20 via-transparent to-transparent pointer-events-none" />

    {/* actual page content */}
    <div className="relative z-10 animate-fade-in-scale">
      <Outlet />
    </div>

  </div>
</div>

      {/* MOBILE NAV */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-md md:hidden z-50">
  
  {/* GRADIENT BORDER */}
  <div className="p-[2px] rounded-2xl bg-gradient-to-r from-[#1d3e29] via-[#2f6f4e] to-[#1d3e29] shadow-2xl">

    {/* GLASS CONTAINER */}
    <div className="flex justify-between items-center bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3">

      {[
        { to: "/", icon: Home, label: "Home" },
        { to: "/meal-plan", icon: Calendar, label: "Plan" },
        { to: "/recipes", icon: Utensils, label: "Recipes" },
        { to: "/grocery", icon: ShoppingCart, label: "Grocery" },
      ].map((item) => {
        const Icon = item.icon;

        return (
          <NavLink key={item.to} to={item.to}>
            {({ isActive }) => (
              <div
                className={`relative flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all duration-300
                ${isActive ? "text-[#1d3e29]" : "text-gray-500"}`}
              >
                {/* ACTIVE BACKGROUND */}
                <div
                  className={`absolute inset-0 rounded-xl transition-all duration-300
                  ${
                    isActive
                      ? "bg-gradient-to-r from-green-400/20 to-green-300/10 scale-100"
                      : "scale-0"
                  }`}
                />

                {/* ICON */}
                <Icon
                  size={18}
                  className={`z-10 transition-all duration-300
                  ${
                    isActive
                      ? "scale-110 drop-shadow-[0_0_6px_rgba(34,197,94,0.6)]"
                      : "scale-100"
                  }`}
                />

                {/* LABEL */}
                <span className="text-[10px] font-semibold z-10 tracking-wide">
                  {item.label}
                </span>

                {/* ACTIVE DOT */}
                <div
                  className={`absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-green-500 transition-all duration-300
                  ${isActive ? "opacity-100" : "opacity-0"}`}
                />
              </div>
            )}
          </NavLink>
        );
      })}

      {/* PROFILE */}
      <div className="flex flex-col items-center text-gray-400 text-[10px]">
        <div className="w-5 h-5 rounded-full bg-gray-300" />
        Profile
      </div>

    </div>
  </div>
</div>
    </div>
  );
};

export default MainLayout;
