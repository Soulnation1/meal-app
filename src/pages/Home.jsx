import Card from "../components/Card";
import RecipeCard from "../components/RecipeCard";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useMeal } from "../context/MealContext";
import "../styles/animations.css";
import {
  Utensils,
  EyeIcon,
  Calendar,
  ShoppingCart,
  Activity,
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const actions = [
    { name: "Recipes", path: "/recipes", icon: Utensils },
    { name: "Planner", path: "/meal-plan", icon: Calendar },
    { name: "Groceries", path: "/grocery", icon: ShoppingCart },
    { name: "Nutrition", path: "/nutrition", icon: Activity },
  ];
  const { user, setActiveCulture } = useUser();
  const { plans } = useMeal();
  const todayPlan = plans ? plans[0] : {};
  const cultures = user?.cultures || ["Yoruba", "Igbo"];

  return (
    <div className="flex  min-h-screen w-full overflow-x-hidden">
      <div className="flex-1 min-w-0 pb-24 md:pb-6 ">
        <div className="relative mb-6 md:hidden rounded-2xl p-[2px] bg-gradient-to-r from-[#1d3e29] via-[#2f6f4e] to-[#1d3e29] shadow-xl animate-fade-in-scale">
  
  {/* inner container */}
  <div className="bg-white rounded-2xl px-5 py-4 flex items-center justify-center relative overflow-hidden">

    {/* subtle glow effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1d3e29]/10 to-transparent opacity-40 animate-pulse hover:scale-[1.02]" />

    {/* logo text */}
    <h1 className="text-[26px] font-extrabold tracking-wide text-gray-800 z-10 drop-shadow-sm">
      Taste
      <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#1d3e29] to-[#4ade80] ml-1">
        Sync
      </span>
    </h1>

  </div>
</div>
        {/* HEADER */}
        <div className="flex justify-between">
          <div className="">
          <label className="text-md font-bold mr-2 text-[#061a00]">Mode</label>

          <select
            value={user.activeCulture}
            onChange={(e) => setActiveCulture(e.target.value)}
            className=" mt-1 p-1 rounded-md border border-[#061a00] bg-white text-[#061a00]"
          >
            {cultures.map((culture) => (
  <option key={culture} value={culture} className="hover:translate-y-1 transition-all duration-300">
    {culture}
  </option>
))}

            <option value="All">All</option>
          </select>
        </div>

        <div className="flex  items-center gap-2 mb-6">
          <h2 className="text-xl font-semibold">Hi, {user.name}</h2>
          <img
            src={user.avatar}
            alt="profile picture"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
        </div>

        {/* TODAY PLAN */}
        <div className="bg-[#061a00] text-white p-5 rounded-2xl shadow-md">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Today’s Plan</h3>

            <button
              onClick={() => navigate("/meal-plan")}
              className="text-[10px]  flex items-center gap-1 hover:text-green-300/80 hover:translate-y-1 transition-all duration-300 hover:border border-white rounded-md p-0.5 "
            >
              <EyeIcon size={16} /> View Plan
            </button>
          </div>

          <div className="text-sm space-y-1">
            {Object.entries(todayPlan).map(([meal, value]) => (
              <p key={meal}>
                <span className="opacity-80">{meal}:</span>{" "}
                {value ? (
                  value.name
                ) : (
                  <span className="text-white/50">Not set</span>
                )}
              </p>
            ))}
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {actions.map((item) => (
            <Card
              key={item.name}
              onClick={() => navigate(item.path)}
              Icon={item.icon}
              className="text-center text-[#061a00] font-medium cursor-pointer"
            >
              {item.name}
            </Card>
          ))}
        </div>

        {/* RECOMMENDED */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-[#061a00]">Recommended</h3>
            <button
              onClick={() => navigate("/recipes")}
              className="text-sm text-[#061a00] font-medium"
            >
              See all
            </button>{" "}
          </div>

          <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-3 md:overflow-visible">
            {[1, 2, 3].map((item) => (
              <RecipeCard key={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
