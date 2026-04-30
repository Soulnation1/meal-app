const Card = ({ children, className = "", onClick, Icon }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white p-4 rounded-2xl shadow-sm hover:shadow-lg hover:bg-[#061a00] hover:text-white hover:-translate-y-1 transition-all duration-300 ${className}`}
    >
      <div className="flex items-center gap-2">
        {Icon && <Icon size={20} />}
        {children}
      </div>
    </div>
  );
};

export default Card;