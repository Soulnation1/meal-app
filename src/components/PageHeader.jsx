import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PageHeader = ({ title, showBack = false, right }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center ">

      <div className="flex  items-center gap-3">
      {showBack && (
  <button onClick={() => navigate(-1)}>
    <ArrowLeft size={24} />
  </button>
)}

        <h2 className="text-xl  font-semibold text-[#061a00]">{title}</h2>
      </div>

      {right && <div>{right}</div>}
    </div>
  );
};

export default PageHeader;