import men from "/images/men.png"   
import women from "/images/women.png"
import acces from "/images/accessories.png"
import kids from "/images/kids.png"
import CategoryButton from "../components/ui-kit/CategoryButton"
const CategoryPick = () => {
  return (
    <section className=" relative flex flex-col justify-center gap-3 items-center font-montserrat py-10 ">
      <h3 className="text-2xl w-[187px] h-[32px]  text-slate-800 font-bold">EDITOR&apos;S PICK</h3>
      <p className="font-normal text-sm text-center w-[70%] lg:w-[500px] text-neutral-500">Problems trying to resolve the conflict between</p>
      <div className="flex flex-col lg:flex-row lg:gap-5 gap-5 py-10 mx-10 items-center ">
       <div className="relative">
        <img src={men}
     
        />
        <CategoryButton className=" w-[170px] pt-3 pr-12 pb-3 pl-12" >MEN</CategoryButton>
       </div>
       <div className="relative">
       <img src={women}/>
       <CategoryButton className=" pt-3 pr-12 pb-3 pl-12">WOMEN</CategoryButton>
       </div>
       <div className="flex flex-col gap-5 lg:gap-5">
        <div className="relative">
        <img src={acces}/>
        <CategoryButton className=" w-[170px] pt-3 pr-[26px] pb-3 pl-[26px]">ACCESSORIES</CategoryButton>
        </div>
       <div className="relative">
       <img src={kids}/>
       <CategoryButton className=" w-[120px] pt-3 pr-10 pb-3 pl-10">KIDS</CategoryButton>
       </div>
       </div>
      </div>
    </section>
  )
}

export default CategoryPick 
