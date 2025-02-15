

const Pagination = () => {
  return (
     <div className="flex justify-center items-center font-bold">
    <button className="px-6 py-6 border border-gray-300 bg-gray-200 text-gray-500 rounded-l-lg hover:bg-gray-300">
      First
    </button>
    <button className="px-6 py-6 border border-gray-300 bg-white text-blue-500 hover:bg-gray-100">
      1
    </button>
    <button className="px-6 py-6 border border-gray-300 bg-blue-500 text-white  hover:bg-blue-600">
      2
    </button>
    <button className="px-6 py-6 border border-gray-300 bg-white text-blue-500 hover:bg-gray-100">
      3
    </button>
    <button className="px-6 py-6 border border-gray-300 bg-gray-200 text-blue-500 rounded-r-lg hover:bg-gray-300">
      Next
    </button>
  </div>
);
  
}

export default Pagination
