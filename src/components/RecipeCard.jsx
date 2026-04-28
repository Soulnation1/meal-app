import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  const [fav, setFav] = useState(false);

  if (!recipe) return (null);

  return (
    <div className="relative cursor-pointer bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition">
      {/* HEART ICON */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // prevents navigation
          setFav(!fav);
        }}
        className="absolute bottom-2 left-4 text-lg"
      >
        {fav ? "❤️" : "🤍"}
      </button>

      {/* CLICKABLE AREA */}
      <div
        onClick={() => navigate(`/recipes/${recipe.id}`)}
        className="hover:-translate-y-1 transition-all duration-300"
      >
<img
  src={recipe.image || "/fallback-food.jpg"}
  className="w-full h-auto object-cover"
/>
        <div className="p-3 flex flex-col ">
          <div className="flex justify-between">
            <h4 className="font-medium text-sm">{recipe.name}</h4>
            <span className="text-xs text-yellow-500">
              ⭐ {recipe.rating}
            </span>{" "}
          </div>

          <div className="flex justify-end mt-2">
            <span className="text-xs text-gray-500">
              {recipe.kcal} kcal
            </span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
