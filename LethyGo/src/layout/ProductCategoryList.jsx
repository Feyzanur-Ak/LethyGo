import ProductCard from "../components/ProductCard"


const ProductCategoryList = () => {
  return (
    <div className="flex flex-col items-center justify-center font-montserrat ">
       <h4 className="font-normal text-xl text-neutral-500">Featured Products</h4>
       <h3 className="text-slate-800 text-2xl font-bold tracking-wider">BEST SELLER PRODUCTS</h3>
       <p className="text-sm font-normal tracking-wider text-neutral-500 ">Problems trying to resolve the conflict between</p>
      <ProductCard />
    </div>
  )
}

export default ProductCategoryList
