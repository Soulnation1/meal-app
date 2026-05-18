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
    <div className="glass-card rounded-3xl p-4 shadow-md border border-emerald-200/70">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-950">Culture Mode</p>
          <p className="text-xs text-emerald-700">
            Choose your flavor preferences
          </p>
        </div>
        <select
          value={user.activeCulture}
          onChange={(e) => setActiveCulture(e.target.value)}
          className="rounded-full border border-emerald-200 bg-emerald-50/95 px-4 py-2 text-sm text-emerald-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-200"
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

      <p className="mt-4 text-sm text-slate-600">
        Active:{" "}
        <span className="font-semibold text-slate-900">{activeLabel}</span>
      </p>
    </div>
  );
};

export default Culture;
