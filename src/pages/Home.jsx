import Card from "../components/Card";
import RecipeCard from "../components/RecipeCard";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useMeal } from "../context/MealContext";

const Home = () => {
  const navigate = useNavigate();
  const actions = [
    { name: "Recipes", path: "/recipes" },
    { name: "Planner", path: "/meal-plan" },
    { name: "Groceries", path: "/grocery" },
    { name: "Nutrition", path: "/nutrition" },
  ];
  const { user } = useUser();
  const { plans } = useMeal();
  const todayPlan = plans ? plans[0] : {};

  return (
    <div className="flex bg-gray-100 min-h-screen w-full overflow-x-hidden">
      <div className="flex-1 min-w-0 pb-24 md:pb-6 ">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Hi, {user.name} 👩‍🍳</h2>
          <img
            src={user.avatar}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />{" "}
        </div>

        {/* TODAY PLAN */}
        <div className="bg-[#1d3e29] text-white p-5 rounded-2xl shadow-md">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Today’s Plan</h3>

            <button
              onClick={() => navigate("/meal-plan")}
              className="text-sm underline"
            >
              View Plan
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
              className="text-center font-medium cursor-pointer"
            >
              {item.name}
            </Card>
          ))}
        </div>

        {/* RECOMMENDED */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Recommended</h3>
            <button
              onClick={() => navigate("/recipes")}
              className="text-sm text-[#1d3e29] font-medium"
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
