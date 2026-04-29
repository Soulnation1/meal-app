const Card = ({ children, className = "", onClick, Icon }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white p-4 rounded-2xl shadow-sm hover:shadow-lg hover:bg-[#1d3e29] hover:text-white hover:-translate-y-1 transition-all duration-300 ${className}`}
    >
     <div className="flex flex-col items-center gap-1">
  {Icon && <Icon size={20} />}
  <span>{children}</span>
</div>
    </div>
  );
};

export default Card;