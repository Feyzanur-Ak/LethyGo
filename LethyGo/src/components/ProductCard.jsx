
const ProductCard = () => {

    const images=["/images/product1.png",
                "/images/product2.png",
                "/images/product3.png",
                "/images/product4.png",
                "/images/product5.png",
                "/images/product6.png",
                "/images/product7.png",
                "/images/product8.png"];
  return (
    <div className="flex flex-wrap gap-8 py-10 justify-center w-[65%]">
        
    {images.map((image, index) => (
      <div key={index} className="relative ">
        {/* Görsel */}
        <img
          src={image}
          alt={`Product ${index + 1}`}
   
        />
        
        <div className="flex flex-col  gap-3 py-5 items-center mt-4 ">
            <h5 className="font-bold text-base text-slate-800">Graphic Design</h5>
            <p className="text-sm font-bold text-neutral-500 ">English Departmen</p>
            <div className="flex gap-2 text-base font-bold">
            <h5 className="text-stone-300">$16.48</h5>
            <h5 className="text-teal-700">$6.48</h5>
        </div>
        </div>
        </div>
    ))}
      </div>
  )
}

export default ProductCard
