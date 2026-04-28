const Card = ({ children, className = "", onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white p-4 rounded-2xl shadow-sm hover:shadow-lg hover:bg-[#1d3e29] hover:text-white hover:-translate-y-1 transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;