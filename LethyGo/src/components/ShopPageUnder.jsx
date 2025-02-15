

const ShopPageUnder = () => {
  return (
    <section className=" px-20 py-10 bg-gray-50">
      {/* Başlık */}
    
      <h2 className="text-center text-gray-700 text-lg font-semibold mb-8">
        Trusted By Over 4000 Big Companies
      </h2>
      {/* İkonlar */}
      <div className="flex justify-evenly items-center ">
        {/* Cooli */}
        <i className="fab fa-hooli text-8xl text-gray-500"></i>

        {/* Lyft */}
        <i className="fab fa-lyft text-8xl text-gray-500"></i>

        {/* Stripe */}
        <i className="fab fa-stripe text-8xl text-gray-500"></i>

        {/* AWS */}
        <i className="fab fa-aws text-8xl text-gray-500"></i>

        {/* Reddit */}
        <i className="fab fa-reddit text-8xl text-gray-500"></i>
      </div>
    </section>
  );
}

export default ShopPageUnder
