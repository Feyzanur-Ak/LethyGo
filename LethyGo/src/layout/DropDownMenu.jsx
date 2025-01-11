import { useState } from "react";


const DropDownMenu = () => {

    const[isOpen, setIsOpen] = useState(false);

    const toggleDropDown = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div className="relative text-left">
      <button
        onClick={toggleDropDown}>
        Shop 
      </button>

      {isOpen && (
      <div className="absolute mt-3 py-4 bg-white shadow-md rounded-lg w-80">
        <div className="cursor-pointer" >
            <h3 className="text-center font-semibold mb-4">All Products</h3>
            <div className="flex flex-row justify-around gap-8 px-4 "> 
                <div className="flex flex-col  gap-2">
                    <h4 className="text-red-300 font-semibold">Women</h4>
                    <ul className="flex flex-col gap-2 text-red-400">
                        <li > <a href="#" ></a>Tshirt {/* Linkler güncellenecek sayfalar oluşturuldukça*/}
                        </li>
                        <li><a href="#" ></a>Shoes </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <h4 className="text-blue-300 font-semibold">Men</h4>
                    <ul className="flex flex-col gap-2 text-blue-400">
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
