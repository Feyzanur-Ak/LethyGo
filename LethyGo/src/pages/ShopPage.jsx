import BreadCrumb from "../components/BreadCrumb"
import ShopCard from "../components/ShopCard"
import ShopHead from "../components/ShopHead"


const ShopPage = () => {
  return (
    <section className="py-4">
      <div className="flex justify-around">
      <ShopHead />
      <BreadCrumb />
      </div>
      <ShopCard />
    </section>
  )
}

export default ShopPage
