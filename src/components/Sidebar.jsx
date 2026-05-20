import { NavLink } from "react-router-dom";
import "../styles/animations.css";
import { Home, Utensils, Calendar, ShoppingCart } from "lucide-react";
import TasteSyncLogo from "./Logo";

const Sidebar = () => {
  return (
    <div className="hidden md:flex fixed inset-y-0 left-0 w-72 p-[2px] bg-gradient-to-b from-gray-950/95 via-gray-950 to-gray-950/95 shadow-2xl backdrop-blur-xl">
      <div className="flex flex-col h-full rounded-r-3xl bg-gray-950/95 px-6 py-8 text-white border border-lime-500/15">
        <div className="mb-10 animate-fade-in-scale">
          <TasteSyncLogo size={36} />
          <div className="mt-4 h-[2px] w-16 bg-gradient-to-r from-lime-500 to-transparent rounded-full" />
        </div>

        <nav className="flex flex-col gap-3">
          {[
            { to: "/", icon: Home, label: "Home" },
            { to: "/meal-plan", icon: Calendar, label: "Meal Plan" },
            { to: "/recipes", icon: Utensils, label: "Recipes" },
            { to: "/grocery", icon: ShoppingCart, label: "Grocery" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <NavLink key={item.to} to={item.to} end>
                {({ isActive }) => (
                  <div
                    className={`relative flex items-center gap-3 rounded-3xl px-4 py-3 transition-all duration-300 ${
                      isActive
                        ? "bg-lime-500/20 text-lime-400 shadow-[0_12px_30px_rgba(57,255,20,0.15)]"
                        : "text-gray-400 hover:text-white hover:bg-gray-800/50 hover:border-lime-500/20"
                    }`}
                  >
                    <div
                      className={`absolute left-0 top-0 h-full w-1 rounded-r-full transition-all duration-300 ${
                        isActive ? "bg-lime-500" : "bg-transparent"
                      }`}
                    />
                    <Icon size={18} />
                    <span className="text-sm font-semibold tracking-wide">
                      {item.label}
                    </span>
                  </div>
                )}
              </NavLink>
            );
          })}
        </nav>

        <div className="mt-auto rounded-3xl border border-lime-500/15 bg-lime-500/10 p-4 text-xs text-gray-400 shadow-inner">
          <p className="font-semibold text-white">TasteSync</p>
          <p className="mt-2 text-[11px] text-gray-500">
            Your weekly meal experience, tailored and simple.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
