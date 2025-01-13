import { useState } from "react";
import { ChevronDown } from "lucide-react";

const DropDownMenu = () => {

    const[isOpen, setIsOpen] = useState(false);

    const toggleDropDown = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div className="relative text-left">
      <button
        onClick={toggleDropDown}
        className=" flex text-slate-800 font-thin">
        Shop 
        <ChevronDown className="w-4 h-4 relative top-1"/>
      </button>
      {isOpen && (
      <div className="absolute mt-3 py-4 bg-white shadow-md rounded-lg w-[396px] h-[272px] z-50 ">
        <div className="cursor-pointer" >
            <div className="flex flex-row justify-around gap-8 px-4 "> 
                <div className="flex flex-col  gap-2">
                    <h4 className="text-slate-800 font-semibold">Kadın</h4>
                    <ul className="flex flex-col gap-4 text-neutral-500 py-6">
                        <li > <a href="#" ></a>Tshirt {/* Linkler güncellenecek sayfalar oluşturuldukça*/}
                        </li>
                        <li><a href="#" ></a>Shoes </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <h4 className="text-slate-800 font-semibold">Erkek</h4>
                    <ul className="flex flex-col gap-4 text-neutral-500 py-6">
                        <li> <a href="#"></a>Tshirt</li>
                        <li><a href="#"></a>Shoes</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
      )}
    </div>
  )
}

export default DropDownMenu
