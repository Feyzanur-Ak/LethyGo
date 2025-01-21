

const ShopCard = () => {
    const images=["/images/shop1.png",
        "/images/shop2.png",
        "/images/shop3.png",
        "/images/shop4.png",
        "/images/shop5.png"];
        
  return (
    <div className="flex items-center justify-center gap-5 py-10">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className=" md:w-[206px] h-[223px] "
        />
      ))}
    </div>
  )
}

export default ShopCard
