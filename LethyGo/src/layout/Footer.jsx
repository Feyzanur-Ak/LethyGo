import { Instagram, Facebook, Twitter } from "lucide-react";
import SubscribeForm from "../components/SubscribeForm";

const Footer = () => {
  return (
    <section className="py-8 font-montserrat text-left">
      {/* Üst Kısım */}
      <div className="flex flex-col lg:justify-around  lg:flex-row gap-4 items-center  bg-neutral-50 h-[142px]  ">
        <h3 className="text-slate-800 text-xl font-bold">LethyGo</h3>
        <div className="flex gap-4 text-sky-500">
            <Facebook />
            <Instagram />
            <Twitter />
          </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-evenly py-8 max-w-6xl mx-auto">
       
        {/* Company Info Bölümü */}
        <div className="flex flex-col gap-4 text-left">
          <h3 className="text-slate-800 text-[20px] md:text-[24px] font-bold">Company info</h3>
          <ul className="flex flex-col text-[14px] font-bold text-neutral-500 leading-[24px] gap-2">
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>

          {/* Legal Bölümü */}
        <div className="flex flex-col gap-4 text-left">
          <h3 className="text-slate-800 text-[20px] md:text-[24px] font-bold">Legal</h3>
          <ul className="flex flex-col text-[14px] font-bold text-neutral-500 leading-[24px] gap-2">
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Features Bölümü */}
        <div className="flex flex-col gap-4 text-left">
          <h3 className="text-slate-800 text-[20px] md:text-[24px] font-bold">Features</h3>
          <ul className="flex flex-col text-[14px] font-bold text-neutral-500 leading-[24px] gap-2">
            <li>Business Marketing</li>
            <li>User Analytic</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
          </ul>
        </div>

          {/* Resources Bölümü */}
        <div className="flex flex-col gap-4 text-left">
          <h3 className="text-slate-800 text-[20px] md:text-[24px] font-bold">Resources</h3>
          <ul className="flex flex-col text-[14px] font-bold text-neutral-500 leading-[24px] gap-2">
            <li>IOS & Android</li>
            <li>Watch a Demo</li>
            <li>Customers</li>
            <li>API</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 ">
        <SubscribeForm/>
        </div>
      </div>

      {/* Alt Kısım */}
      <div className="bg-neutral-50  text-neutral-500 font-bold  py-4 h-full text-center">
        <h6>Made With Love By LethGo All Right Reserved</h6>
      </div>
    </section>
  );
};

export default Footer;
