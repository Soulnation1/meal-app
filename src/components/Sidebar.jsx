import { NavLink } from "react-router-dom";
import "../styles/animations.css";
import { Home, Utensils, Calendar, ShoppingCart } from "lucide-react";
import TasteSyncLogo from "./Logo";

const Sidebar = () => {
  return (
    <div className="hidden md:flex fixed inset-y-0 left-0 w-72 p-[2px] bg-gradient-to-b from-slate-950/90 via-slate-950 to-slate-950/90 shadow-2xl backdrop-blur-xl">
      <div className="flex flex-col h-full rounded-r-3xl bg-slate-950/90 px-6 py-8 text-white border border-white/10">
        <div className="mb-10 animate-fade-in-scale">
          <TasteSyncLogo size={36} />
          <div className="mt-4 h-[2px] w-16 bg-gradient-to-r from-emerald-400 to-transparent rounded-full" />
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
                        ? "bg-emerald-400/20 text-white shadow-[0_12px_30px_rgba(16,185,129,0.16)]"
                        : "text-slate-200 hover:text-white hover:bg-white/15 hover:border-white/10"
                    }`}
                  >
                    <div
                      className={`absolute left-0 top-0 h-full w-1 rounded-r-full transition-all duration-300 ${
                        isActive ? "bg-emerald-400" : "bg-transparent"
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

        <div className="mt-auto rounded-3xl border border-white/10 bg-white/5 p-4 text-xs text-slate-300 shadow-inner">
          <p className="font-semibold text-slate-100">TasteSync</p>
          <p className="mt-2 text-[11px] text-slate-400">
            Your weekly meal experience, tailored and simple.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
