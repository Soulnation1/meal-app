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
  const { user } = useUser();
  const { plans } = useMeal();
  const todayPlan = plans ? plans[0] : {};
  const recipes = [
    {
      id: 1,
      name: "Amala & Ewedu",
      culture: "Yoruba",
      image: "/amala.jpg",
      kcal: 700,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Ofe Nsala",
      culture: "Igbo",
      image: "/nsala.jpg",
      kcal: 650,
      rating: 4.7,
    },
    {
      id: 3,
      name: "Jollof Rice",
      culture: "All",
      image: "/jollof.jpg",
      kcal: 600,
      rating: 4.9,
    },
  ];
  const blendRotation = ["Yoruba", "Igbo", "All"];
  const todayIndex = new Date().getDay();
  const blendedCulture = blendRotation[todayIndex % blendRotation.length];
  const activeCulture =
    user.activeCulture === "Blend" ? blendedCulture : user.activeCulture;
  const recommendedRecipes = recipes.filter(
    (recipe) =>
      activeCulture === "All" ||
      recipe.culture === activeCulture ||
      recipe.culture === "All",
  );

  return (
    <div className="min-h-full w-full overflow-x-hidden">
      <div className="flex flex-col gap-6 pb-24 md:pb-6">
        <div className="flex flex-col gap-4 rounded-[32px] bg-gradient-to-br from-lime-500/20 via-lime-500/10 to-lime-500/5 p-6 shadow-xl border border-lime-500/30 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-lime-400">Welcome back,</p>
            <h1 className="text-3xl font-semibold tracking-tight text-white">
              Hi, {user.name}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-3xl bg-lime-500/20 p-1 shadow-sm">
              <img
                src={user.avatar}
                alt="profile picture"
                className="h-12 w-12 rounded-3xl object-cover"
              />
            </div>
            <div className="rounded-3xl border border-lime-500/30 bg-lime-500/10 px-4 py-3 shadow-sm">
              <p className="text-xs uppercase tracking-[0.25em] text-lime-400">
                Culture
              </p>
              <p className="font-semibold text-white">{activeCulture}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="glass-card rounded-[32px] p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-gray-400">Today's Plan</p>
                <h2 className="text-xl font-semibold text-white">
                  Meal overview
                </h2>
              </div>
              <button 
                onClick={() => navigate("/meal-plan")}
                className=" rounded-full bg-lime-500 px-2 py-2 text-sm font-semibold text-center text-gray-950 shadow-sm shadow-lime-500/50 hover:-translate-y-1 transition hover:bg-lime-400 hover:shadow-lg hover:shadow-lime-500/70"
              >
                <EyeIcon size={16} className="inline" />
                <span className="ml-1 ">View Plan</span>
              </button>
            </div>

            <div className="mt-5 space-y-2 text-gray-300">
              {Object.entries(todayPlan).length ? (
                Object.entries(todayPlan).map(([meal, value]) => (
                  <p
                    key={meal}
                    className="rounded-3xl border border-lime-500/20 bg-lime-500/10 px-4 py-3"
                  >
                    <span className="font-semibold text-lime-400">
                      {meal}:
                    </span>{" "}
                    {value ? (
                      value.name
                    ) : (
                      <span className="text-gray-500">Not set</span>
                    )}
                  </p>
                ))
              ) : (
                <p className="text-gray-500">
                  No meals selected yet. Start by exploring recipes.
                </p>
              )}
            </div>
          </div>

          <div className="glass-card rounded-[32px] p-6 md:col-span-2">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-gray-400">Quick actions</p>
                <h2 className="text-xl font-semibold text-white">
                  Get cooking
                </h2>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {actions.map((item) => (
                <Card
                  key={item.name}
                  onClick={() => navigate(item.path)}
                  Icon={item.icon}
                  className="justify-center text-center text-white font-semibold hover:bg-lime-500/20 hover:border-lime-500/40 hover:shadow-xl hover:shadow-lime-500/20 transition-all duration-300 hover:-translate-y-1 "
                >
                  {item.name}
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[32px] bg-gradient-to-br from-lime-500/20 via-lime-500/10 to-lime-500/5 p-6 shadow-xl border border-lime-500/30">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-white">
                Recommended meals
              </h2>
              <p className="mt-1 text-sm text-lime-400">
                {activeCulture} meals for today.
              </p>
            </div>
            <button
              onClick={() => navigate("/recipes")}
              className="text-sm font-semibold text-lime-400 transition hover:text-lime-300"
            >
              See all
            </button>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {recommendedRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
