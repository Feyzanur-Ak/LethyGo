import { Link } from "react-router-dom"


const BreadCrumb = () => {
  return (
    <nav className="flex gap-2">
      <Link to="/"

      className="text-neutral-800 font-bold "
      >Home</Link>

          <span className="text-neutral-400">{'>'}</span>

        <Link to="/shop"
         className="text-neutral-400 font-bold"
        >Shop</Link>
    </nav>
  )
}

export default BreadCrumb
