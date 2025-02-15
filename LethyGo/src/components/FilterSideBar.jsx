

function FilterSideBar() {
  return (
    <div className="flex justify-evenly gap-10 items-center py-4 font-montserrat ">
    {/* Sol taraf: Sonuç sayısı */}
    <h6 className="text-gray-500  font-bold">Showing all 12 results</h6>

    {/* Sağ taraf: Görünüm, Popülerlik ve Filtre */}
    <div className="flex items-center gap-4">
      {/* Görünüm Seçenekleri */}
      <div className="flex items-center gap-2">
        <h6 className="text-gray-600 font-medium">Views:</h6>
        <button className="p-2 border rounded hover:bg-gray-100">
          
        </button>
        <button className="p-2 border rounded hover:bg-gray-100">
          
        </button>
      </div>

      {/* Popülerlik Seçimi */}
      <div>
        <select className="border rounded px-4 py-2 text-gray-600">
          <option>Popularity</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest</option>
        </select>
      </div>

      {/* Filtre Butonu */}
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Filter
      </button>
    </div>
  </div>
);
}

export default FilterSideBar
