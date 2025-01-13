import { Phone, Mail, Instagram, Youtube, Facebook, Twitter, User, Search, ShoppingCart, Heart, Menu,X } from "lucide-react";
import { useState } from "react";
import DropDownMenu from "../components/DropDownMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="font-montserrat">
      {/* Mobil Header */}
      <div className="flex md:hidden items-center justify-between px-4 h-[58px] bg-neutral-50">
        <h1 className="text-xl font-bold">LethyGo</h1>
        <div className="flex gap-4 items-center">
          <User /> {/* Mobilde User ikonunu ekledik */}
          <Search />
          <ShoppingCart />
         {/* Menü İkonu */}
         <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobil Menü */}
      {isMenuOpen && (
        <div className="absolute top-[58px] left-0 w-full bg-neutral-50 hadow-lg">
          <ul className="flex flex-col items-center gap-4 py-4 text-neutral-500 cursor-pointer">
            <li>Home</li>
            <li className="font-bold ">
            <a href="#">Product</a></li>
            <li className="font-bold ">Pricing</li>
            <li className="font-bold ">Contact</li>
          </ul>
        </div>
      )}


      {/* Büyük Ekran Header */}
      <div className="hidden md:flex flex-col">
        {/* Üst Header Bar */}
        <div className="flex items-center justify-between px-20 bg-slate-800 h-[58px] text-white">
          {/* Sol Taraf: Telefon ve E-Posta */}
          <div className="flex gap-8 items-start">
            <div className="flex gap-2 items-center">
              <Phone />
              <h3>(225)&nbsp;555&nbsp;0118</h3>
            </div>
            <div className="flex gap-2 items-center">
              <Mail />
              <span>lethygo.support@gmail.com</span>
            </div>
          </div>

          {/* Ortadaki Yazı */}
          <div className="flex items-center">
            <span>Follow Us and get a chance to win %80 off</span>
          </div>

          {/* Sağdaki İkonlar */}
          <div className="flex items-end gap-4">
            <span>Follow Us :</span>
            <a>
              <Instagram />
            </a>
            <a>
              <Youtube />
            </a>
            <a>
              <Facebook />
            </a>
            <a>
              <Twitter />
            </a>
          </div>
        </div>

        {/* Alt Header Bar */}
        <div className="flex justify-between bg-neutral-50 h-[58px] px-20 pt-5">
          <div className="flex gap-20">
            <h3 className="text-3xl font-bold mr-10">LethyGo</h3>
            <nav>
              <ul className="flex gap-8 text-neutral-500 font-bold">
                <li>Home</li>
                <DropDownMenu />
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Pages</li>
              </ul>
            </nav>
          </div>
          <div className="flex justify-end gap-8 cursor-pointer text-sky-500">
            <div className="flex gap-2">
              <User />
              <span> Login/ Register</span>
            </div>
            <Search />
            <ShoppingCart />
            <Heart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
