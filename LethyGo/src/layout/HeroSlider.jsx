import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const HeroSlider = () => {
  const [curr, setCurr] = useState(0);

  const data = ["/images/carosel1.jpg", "/images/carosel2.jpg"];

  const prev = () => setCurr((curr) => (curr === 0 ? data.length - 1 : curr - 1));

  const next = () => setCurr((curr) => (curr === data.length - 1 ? 0 : curr + 1));

  return (
    <div className="relative  aspect-ratio-16/9 overflow-hidden">
      {/* Slider Container */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {data.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-[50vh] lg:h-[120vh] flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Sol ve Sağ Butonlar */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button onClick={prev} className="text-white">
          <ChevronLeft className="w-20 h-20" />
        </button>
        <button onClick={next} className="text-white">
          <ChevronRight className="w-20 h-20" />
        </button>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-4 flex justify-center w-full ">
        {data.map((_, index) => (
          <div
            key={index}
            className={`w-[63px] h-[10px]  ${
              curr === index ? "bg-neutral-50" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;