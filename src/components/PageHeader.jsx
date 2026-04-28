import { useNavigate } from "react-router-dom";

const PageHeader = ({ title, showBack = false, right }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center mb-6">

      <div className="flex items-center gap-3">
        {showBack && (
          <button
            onClick={() => navigate(-1)}
            className="text-gray-500 text-sm"
          >
            ←
          </button>
        )}

        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      {right && <div>{right}</div>}
    </div>
  );
};

export default PageHeader;