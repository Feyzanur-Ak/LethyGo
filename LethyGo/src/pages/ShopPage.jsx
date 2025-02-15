import BreadCrumb from "../components/BreadCrumb"
import ShopCard from "../components/ShopCard"
import ShopHead from "../components/ShopHead"
import FilterSideBar from "../components/FilterSideBar"
import ProductCard from "../components/ProductCard"
import Pagination from "../components/ui-kit/Pagination"

const ShopPage = () => {
  return (
    <section className="py-4 font-montserrat">
      <div className="flex justify-around">
      <ShopHead />
      <BreadCrumb />
      </div>
      <ShopCard />
      <div>
        <FilterSideBar />
      </div>
      <div className="flex flex-col items-center">
      <ProductCard />
      <ProductCard />
      </div>
      <Pagination />
    </section>
  )
}

export default ShopPage
