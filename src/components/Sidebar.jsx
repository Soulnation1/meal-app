import { NavLink } from "react-router-dom";
import "../styles/animations.css";
import { Home, Utensils, Calendar, ShoppingCart } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col fixed top-0 left-0 h-screen w-64 p-[2px] bg-gradient-to-b from-[#1d3e29] via-[#2f6f4e] to-[#061a00] shadow-2xl">
      {/* INNER CONTAINER */}
      <div className="flex flex-col h-full bg-[#061a00] rounded-r-2xl p-6">
        {/* LOGO */}
        <div className="mb-10 animate-fade-in-scale">
          <h2 className="text-3xl font-extrabold tracking-wide text-white">
            Taste
            <span className="ml-1 italic text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500">
              Sync
            </span>
          </h2>

          {/* subtle divider */}
          <div className="mt-3 h-[2px] w-12 bg-gradient-to-r from-green-400 to-transparent rounded-full" />
        </div>

        {/* NAV */}
        <nav className="flex flex-col gap-3">
          {[
            { to: "/", icon: Home, label: "Home" },
            { to: "/meal-plan", icon: Calendar, label: "Meal Plan" },
            { to: "/recipes", icon: Utensils, label: "Recipes" },
            { to: "/grocery", icon: ShoppingCart, label: "Grocery" },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <NavLink to={item.to}>
  {({ isActive }) => (
    <div
      className={`relative group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
      ${
        isActive
          ? "bg-gradient-to-r from-green-400/20 to-green-300/10 text-white shadow-md"
          : "text-white/80 hover:text-white hover:bg-white/5"
      }`}
    >
      {/* LEFT BAR */}
      <div
        className={`absolute left-0 top-0 h-full w-1 rounded-r transition-all duration-300
        ${isActive ? "bg-green-400" : "bg-transparent"}`}
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

        {/* FOOTER (optional but makes it feel complete) */}
        <div className="mt-auto mx-auto pt-6 text-xs text-white/40">
          <p>© {new Date().getFullYear()} TasteSync</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
