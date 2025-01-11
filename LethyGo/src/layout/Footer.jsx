import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <section className="px-5 py-8 font-montserrat">
      {/* Üst Kısım */}
      <div className="flex flex-col md:flex-row md:justify-around gap-8">
        {/* Get In Touch Bölümü */}
        <div className="flex flex-col gap-4 text-left">
          <h3 className="text-slate-800 text-[20px] md:text-[24px] font-bold">Get In Touch</h3>
          <p className="text-neutral-500 text-[14px] md:w-4/5">
            the quick fox jumps over the lazy dog
          </p>
          <div className="flex gap-4 text-sky-500">
            <Facebook />
            <Instagram />
            <Twitter />
          </div>
        </div>

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
      </div>

      {/* Alt Kısım */}
      <div className="bg-neutral-50 mt-8 h-[76px] text-neutral-500 font-bold text-center py-4">
        <h6>Made With Love By LethGo All Right Reserved</h6>
      </div>
    </section>
  );
};

export default Footer;
