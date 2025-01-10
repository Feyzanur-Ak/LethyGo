import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
const Header = () => {
  return (
    <section >

           {/* Header Bar */}
      <div className="flex items-center justify-between px-20  bg-slate-800 h-[58px] text-white ">
             {/* Sol Taraf: Telefon ve E-Posta */}
       <div className="flex gap-8 items-start ">
        <div className='flex gap-2 items-center '>
        <Phone /> 
        <h3>(225)&nbsp;555&nbsp;0118</h3>
        </div>
       <div className='flex gap-2 items-center'>
       <Mail />
       <span>lethygo.support@gmail.com</span>
       </div>
       </div>

          {/* Ortadaki Yazı */}
        <div className='flex items-center'>
        <span>Follow Us  and get a chance to win %80 off</span>
        </div>

        {/* Sağdaki İkonlar */}
        <div className='flex items-end gap-4 '>
            <span>Follow Us :</span>
            <a> <Instagram /></a>
            <a> <Youtube /></a>
            <a> <Facebook /></a>
            <a> <Twitter /></a>
       </div>
      
       
      </div>
      <div className="bg-neutral-50 h-[58px] mt-18">
      <h1>DownSide</h1>
      </div>
    </section>
  )
}

export default Header
