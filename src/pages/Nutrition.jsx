import PageHeader from "../components/PageHeader";

const Nutrition = () => {
  return (
    <div className="space-y-6">
      <PageHeader title="Nutrition" />
      <div className="glass-card rounded-[32px] p-8 text-gray-300">
        <h2 className="text-2xl font-semibold text-white">
          Nutrition insights coming soon
        </h2>
        <p className="mt-3 max-w-2xl text-gray-400">
          Track calories, macros, and meal balance with personalized
          recommendations. This section will help you eat smarter each day.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-lime-500/20 bg-lime-500/10 p-5">
            <h3 className="text-base font-semibold text-white">
              Daily calorie target
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              A full overview of meal energy and progress to keep you on track.
            </p>
          </div>
          <div className="rounded-3xl border border-lime-500/20 bg-lime-500/10 p-5">
            <h3 className="text-base font-semibold text-white">
              Macros & balance
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              A future chart will show proteins, carbs, and fats in each plan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
