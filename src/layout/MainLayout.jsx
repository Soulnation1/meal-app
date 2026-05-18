import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { NavLink } from "react-router-dom";
import { Home, Utensils, Calendar, ShoppingCart } from "lucide-react";

const MainLayout = () => {
  return (
    <div className="relative flex min-h-screen w-full overflow-x-hidden bg-[radial-gradient(circle_at_top,_rgba(22,163,74,0.16),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(15,118,110,0.14),_transparent_22%)]">
      <Sidebar />

      <div className="flex-1 min-w-0 px-4 py-6 pb-28 md:pb-6 md:px-12 max-w-7xl mx-auto md:ml-64">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(22,163,74,0.1),_transparent_34%)]" />

        <div className="relative glass-panel rounded-[38px] p-4 md:p-6 shadow-[0_28px_80px_rgba(15,23,42,0.08)] border border-white/60 overflow-hidden">
          <div className="absolute inset-0 rounded-[38px] bg-gradient-to-br from-white/80 via-emerald-50/50 to-transparent pointer-events-none" />

          <div className="relative z-10 animate-fade-in-scale">
            <Outlet />
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 left-1/2 z-50 w-[95%] max-w-md -translate-x-1/2 md:hidden">
        <div className="rounded-3xl bg-emerald-50/45 border border-emerald-100/55 p-[2px] shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3 rounded-3xl bg-emerald-100/90 p-3 shadow-lg backdrop-blur-xl">
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
                    <div className="relative flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-2xl transition-all duration-300 hover:bg-emerald-100/60 hover:text-emerald-800">
                      <div
                        className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                          isActive ? "bg-emerald-200/80" : "bg-transparent"
                        }`}
                      />

                      <Icon
                        size={18}
                        className={`relative z-10 transition-all duration-300 ${
                          isActive
                            ? "text-emerald-700 scale-110"
                            : "text-slate-400"
                        }`}
                      />

                      <span
                        className={`text-[10px] font-semibold z-10 tracking-wide ${isActive ? "text-emerald-700" : "text-slate-500"}`}
                      >
                        {item.label}
                      </span>
                    </div>
                  )}
                </NavLink>
              );
            })}

            <div className="hidden rounded-2xl bg-emerald-100/85 px-3 py-2 text-[10px] font-semibold text-emerald-700 md:flex">
              Menu
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
