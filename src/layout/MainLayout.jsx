import { Outlet, NavLink } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Home, Utensils, Calendar, ShoppingCart } from "lucide-react";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/meal-plan", icon: Calendar, label: "Plan" },
  { to: "/recipes", icon: Utensils, label: "Recipes" },
  { to: "/grocery", icon: ShoppingCart, label: "Grocery" },
];

const MainLayout = () => {
  return (
    <div className="relative flex min-h-screen w-full overflow-x-hidden bg-gray-950 text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-30 bg-gray-950" />

      {/* Soft gradient atmosphere */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-20
          bg-[radial-gradient(circle_at_top_left,_rgba(57,255,20,0.06),_transparent_35%),
              radial-gradient(circle_at_top_right,_rgba(57,255,20,0.04),_transparent_30%),
              radial-gradient(circle_at_bottom_left,_rgba(57,255,20,0.05),_transparent_35%)]
        "
      />

      {/* Decorative blurred orbs */}
      <div className="pointer-events-none absolute top-0 left-0 -z-10 h-72 w-72 rounded-full bg-lime-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-20 right-0 -z-10 h-80 w-80 rounded-full bg-lime-500/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-72 w-72 rounded-full bg-lime-500/10 blur-3xl" />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="relative flex-1 min-w-0 px-4 py-5 pb-28 md:ml-64 md:px-10 md:py-8 md:pb-8">
        <div className="mx-auto max-w-7xl">
          {/* Main Content Card */}
          <div
            className="
              relative overflow-hidden rounded-[36px]
              border border-lime-500/20
              bg-gray-900/80
              shadow-[0_20px_80px_rgba(57,255,20,0.1)]
              backdrop-blur-2xl
            "
          >
            {/* Subtle gradient overlay */}
            <div
              className="
                pointer-events-none absolute inset-0
                bg-[linear-gradient(135deg,rgba(0,0,0,0),rgba(30,30,30,0.3),rgba(30,30,30,0))]
              "
            />

            {/* Accent glow */}
            <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-lime-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-lime-500/15 blur-3xl" />

            {/* Inner highlight */}
            <div className="pointer-events-none absolute inset-0 rounded-[36px] ring-1 ring-lime-500/10" />

            {/* Top accent line */}
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-lime-500 via-lime-400 to-lime-500" />

            {/* Page Content */}
            <div className="relative z-10 p-4 md:p-8 animate-fade-in-scale">
              <Outlet />
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-4 left-1/2 z-50 w-[94%] max-w-md -translate-x-1/2 md:hidden">
        <div
          className="
            rounded-[30px]
            border border-lime-500/30
            bg-gray-900/90
            p-2
            shadow-[0_20px_60px_rgba(57,255,20,0.15)]
            backdrop-blur-2xl
          "
        >
          <div className="flex items-center justify-between gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink key={item.to} to={item.to} className="flex-1">
                  {({ isActive }) => (
                    <div
                      className={`
                        relative flex flex-col items-center justify-center
                        gap-1 rounded-2xl px-3 py-2.5
                        transition-all duration-300
                        ${
                          isActive
                            ? "bg-lime-500 shadow-lg shadow-lime-500/50"
                            : "hover:bg-gray-800"
                        }
                      `}
                    >
                      {/* Active indicator */}
                      {isActive && (
                        <>
                          <div className="absolute inset-0 rounded-2xl ring-1 ring-lime-500/40" />
                          <div className="absolute top-1 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-gradient-to-r from-lime-500 to-lime-400" />
                        </>
                      )}

                      {/* Icon */}
                      <Icon
                        size={19}
                        className={`
                          relative z-10 transition-all duration-300
                          ${
                            isActive
                              ? "scale-110 text-gray-950"
                              : "text-gray-400"
                          }
                        `}
                      />

                      {/* Label */}
                      <span
                        className={`
                          relative z-10 text-[10px] font-semibold tracking-wide
                          ${isActive ? "text-gray-950" : "text-gray-400"}
                        `}
                      >
                        {item.label}
                      </span>
                    </div>
                  )}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
