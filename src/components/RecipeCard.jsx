import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  const [fav, setFav] = useState(false);
  if (!recipe) return null;
  return (
    <div
      className="relative cursor-pointer overflow-hidden rounded-[28px] glass-card border border-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200/90 hover:shadow-xl"
      onClick={() => navigate(`/recipes/${recipe.id}`)}
    >
      <div className="relative overflow-hidden">
        <img
          src={recipe.image || "/fallback-food.jpg"}
          alt={recipe.name}
          className="h-44 w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent" />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h4 className="text-base font-semibold text-slate-950 truncate">
              {recipe.name}
            </h4>
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-700/90 mt-1">
              {recipe.category || recipe.culture}
            </p>
          </div>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700 shadow-sm">
            {recipe.kcal} kcal
          </span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm text-slate-500">
            ⭐ {recipe.rating || 4.5}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setFav(!fav);
            }}
            className="rounded-2xl border border-emerald-200 bg-emerald-50/90 px-3 py-1 text-sm text-emerald-800 transition hover:bg-emerald-100 hover:border-emerald-300"
          >
            {fav ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
