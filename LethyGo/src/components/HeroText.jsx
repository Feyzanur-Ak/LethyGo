
import { Link } from 'react-router-dom';

const HeroText = () => {
  return (
    <div className="absolute flex flex-col inset-y-0 left-[10%] lg:left-[15%] z-50 text-left justify-center items-left gap-4 lg:gap-6 text-white font-montserrat">
      <h5 className="text-sm lg:text-lg font-bold">SUMMER 2024</h5>
      <h1 className="text-4xl lg:text-[80px] leading-tight lg:leading-[80px] font-bold tracking-wide lg:tracking-wider">
        NEW COLLECTION
      </h1>
      <h4 className="text-base lg:text-2xl w-4/5 lg:w-3/5 font-normal">
        We know how large objects will act, but things on a small scale.
      </h4>
      <Link to="/shop">
        <button
          className=" w-[150px] lg:w-[221px] h-[50px] lg:h-[62px] rounded-[5px] bg-green-500 font-bold text-lg lg:text-2xl cursor-pointer transition-all duration-300 hover:bg-green-700 hover:scale-105"
        >
          SHOP NOW
        </button>
      </Link>
    </div>
  );
};

export default HeroText;
