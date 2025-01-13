import men from "/images/men.png"   
import women from "/images/women.png"
import acces from "/images/accessories.png"
import kids from "/images/kids.png"
const CategoryPick = () => {
  return (
    <section className=" flex flex-col justify-center gap-3 items-center font-montserrat py-10 ">
      <h3 className="text-2xl w-[187px] h-[32px]  text-slate-800 font-bold">EDITOR&apos;S PICK</h3>
      <p className="font-normal text-sm text-center w-[500px] h-[20px] text-neutral-500">Problems trying to resolve the conflict between</p>
      <div className="flex flex-row gap-5">
       <div>
        <img src={men}/>
       </div>
       <div>
       <img src={women}/>
       </div>
       <div className="flex flex-col gap-5">
       <img src={acces}/>
       <img src={kids}/>
       </div>
      </div>
    </section>
  )
}

export default CategoryPick 
