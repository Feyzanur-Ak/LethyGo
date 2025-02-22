import BreadCrumb from "../components/BreadCrumb"
import ShopCard from "../components/ShopCard"
import ShopHead from "../components/ShopHead"
import FilterSideBar from "../components/FilterSideBar"
import ProductCard from "../components/ProductCard"
import Pagination from "../components/ui-kit/Pagination"
import ShopPageUnder from "../components/ShopPageUnder"

const ShopPage = () => {
  return (
    <section className="py-4 font-montserrat">
      <div className="flex justify-around">
      <ShopHead />
      <BreadCrumb />
      </div>
      <ShopCard />
      <div className="px-60">
        <FilterSideBar />
      </div>
      <div className="flex flex-col items-center">
      <ProductCard />
      <ProductCard />
      </div>
      <Pagination />
      <div className="py-10">
      <ShopPageUnder />
      </div>
    </section>
  )
}

export default ShopPage
