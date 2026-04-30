import { useId } from "react";

const TasteSyncLogo = ({ size = 40 }) => {
  const gradientId = useId(); // 🔥 unique id per render

  return (
    <div className="flex items-center gap-2">
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block min-w-[40px] animate-soft-pulse"
      >
        {/* Background circle */}
        <circle cx="24" cy="24" r="22" fill={`url(#${gradientId})`} />

        {/* Fork */}
        <path
          d="M20 12v10M18 12v6M22 12v6M20 22v14"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Leaf */}
        <path
          d="M26 20c6-2 10 2 6 6-3 3-8 2-10-2 1-2 2-3 4-4z"
          fill="white"
        />

        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="48" y2="48">
            <stop offset="0%" stopColor="#1d3e29" />
            <stop offset="100%" stopColor="#4ade80" />
          </linearGradient>
        </defs>
      </svg>

      <h1 className="text-xl font-extrabold tracking-wide text-gray-900 md:text-white animate-soft-pulse">
        Taste
        <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#1d3e29] to-green-400 ml-1">
          Sync
        </span>
      </h1>
    </div>
  );
};

export default TasteSyncLogo;