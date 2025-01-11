import { Instagram, Facebook, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <section className=" px-20 py-12 font-montserrat">
      <div className="flex justify-around ">
        <div className="flex flex-col gap-6">
            <h3 className="text-slate-800 text-[24px] font-bold">Get In Touch</h3>
            <p className="text-neutral-500 text-[14px] w-3/4">the quick fox jumps over the lazy dog</p>
            <div className="flex gap-4 text-sky-500">
            <Facebook />
             <Instagram />
             <Twitter />
            </div>
          
        </div>
        
        <div className="flex flex-col gap-6">
        <h3 className="text-slate-800 text-[24px] font-bold">Company info</h3>
        <ul className=" flex flex-col text-[14px] font-bold text-neutral-500 leading-[24px] gap-3">
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
        </ul>
        </div>

        <div className="flex flex-col gap-6 ">
        <h3 className="text-slate-800 text-[24px] font-bold">Features</h3>
        <ul className=" flex flex-col text-[14px] font-bold text-neutral-500 leading-[24px] gap-3">
            <li>Business Marketing</li>
            <li>User Analtytic</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
        </ul>
        </div>
        </div>
    
    </section>
  )
}

export default Footer
