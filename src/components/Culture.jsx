import { useUser } from "../context/UserContext";

const Culture = () => {
  const { user, setActiveCulture } = useUser();
  const cultures = user?.cultures || ["Yoruba", "Igbo"];
  const blendRotation = ["Yoruba", "Igbo", "All"];
  const todayIndex = new Date().getDay();
  const blendedCulture = blendRotation[todayIndex % blendRotation.length];
  const activeLabel =
    user.activeCulture === "Blend"
      ? blendedCulture
      : user.activeCulture === "All"
        ? "All cultures"
        : user.activeCulture;

  return (
    <div className="glass-card rounded-3xl p-4 shadow-md border border-lime-500/20">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-white">Culture Mode</p>
          <p className="text-xs text-lime-400">
            Choose your flavor preferences
          </p>
        </div>
        <select
          value={user.activeCulture}
          onChange={(e) => setActiveCulture(e.target.value)}
          className="rounded-full border border-lime-500/30 bg-lime-500/10 px-4 py-2 text-sm text-lime-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500/50"
        >
          {cultures.map((culture) => (
            <option key={culture} value={culture}>
              {culture}
            </option>
          ))}
          <option value="Blend">Blend Mode</option>
          <option value="All">All</option>
        </select>
      </div>

      <p className="mt-4 text-sm text-gray-400">
        Active: <span className="font-semibold text-white">{activeLabel}</span>
      </p>
    </div>
  );
};

export default Culture;
