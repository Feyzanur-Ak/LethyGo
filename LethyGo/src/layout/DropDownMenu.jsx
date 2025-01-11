import { useState } from "react";


const DropDownMenu = () => {

    const[isOpen, setIsOpen] = useState(false);

    const toggleDropDown = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div>
      <button
        onClick={toggleDropDown}>
        Shop
      </button>

      {isOpen && (
      <div>
        <div >
            <h3>All Products</h3>
            <div className="flex "> 
                <div>
                    <h4>Women</h4>
                    <ul>
                        <li> <a href="#"></a>Tshirt</li>
                        <li><a href="#"></a>Shoes</li>
                    </ul>
                </div>
                <div>
                    <h4>Men</h4>
                    <ul>
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
