import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  const {
  favorites,
  toggleFavorite,
} = useUser();

const isFavorite =
  favorites.includes(recipe.id);
  if (!recipe) return null;
  return (
    <div
      className="relative cursor-pointer overflow-hidden rounded-[28px] glass-card border border-lime-500/20 transition-all duration-300 hover:-translate-y-1 hover:border-lime-500/40 hover:shadow-xl hover:shadow-lime-500/20"
      onClick={() => navigate(`/recipes/${recipe.id}`)}
    >
      <div className="relative overflow-hidden">
        <img
          src={recipe.image || "/fallback-food.jpg"}
          alt={recipe.name}
          className="h-44 w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-950/80 to-transparent" />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h4 className="text-base font-semibold text-white truncate">
              {recipe.name}
            </h4>
            <p className="text-xs uppercase tracking-[0.2em] text-lime-400 mt-1">
              {recipe.category || recipe.culture}
            </p>
          </div>
          <span className="rounded-full bg-lime-500/20 px-3 py-1 text-[11px] font-semibold text-lime-400 shadow-sm">
            {recipe.kcal} kcal
          </span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm text-gray-400">
            ⭐ {recipe.rating || 4.5}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(recipe.id);
            }}
            className="rounded-2xl border border-lime-500/30 bg-lime-500/10 px-3 py-1 text-sm text-lime-400 transition hover:bg-lime-500/20 hover:border-lime-500/50"
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
