import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  const [fav, setFav] = useState(false);

  if (!recipe) return null;

  return (
    <div
      className="relative cursor-pointer bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition"
      onClick={() => navigate(`/recipes/${recipe.id}`)}
    >
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
          <div className="">
            <h4 className="font-medium text-sm text-[#061a00]">
              {recipe.name}
            </h4>
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
      {/* HEART ICON */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // prevents navigation
          setFav(!fav);
        }}
        className="absolute top-2 right-2 text-lg z-10"
      >
        {fav ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

export default RecipeCard;
