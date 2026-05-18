const Card = ({ children, className = "", onClick, Icon }) => {
  return (
    <div
      onClick={onClick}
      className={`glass-card rounded-3xl p-5 hover:shadow-xl transition-all duration-300 cursor-pointer ${className}`}
    >
      <div className="flex items-center gap-3 text-slate-900">
        {Icon && <Icon size={22} className="text-emerald-700" />}
        {children}
      </div>
    </div>
  );
};

export default Card;
