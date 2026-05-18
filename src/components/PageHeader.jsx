import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PageHeader = ({ title, showBack = false, right }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-3">
        {showBack && (
          <button
            onClick={() => navigate(-1)}
            className="rounded-2xl border border-slate-200/80 bg-white/80 p-2 shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-50"
          >
            <ArrowLeft size={22} />
          </button>
        )}
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
          <p className="text-sm text-slate-500">
            Healthy meals, simpler planning.
          </p>
        </div>
      </div>

      {right && <div>{right}</div>}
    </div>
  );
};

export default PageHeader;
