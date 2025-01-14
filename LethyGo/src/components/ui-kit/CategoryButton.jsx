

// eslint-disable-next-line react/prop-types
const CategoryButton = ({ children, className }) => {
    return (
      <button  className={`absolute top-[88%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 bg-white text-slate-800 h-[48px] text-center font-montserrat font-bold transition-transform duration-200 ease-in-out hover:scale-105 ${className}`}>
        {children}
      </button>
    );
  };
  
  export default CategoryButton;
