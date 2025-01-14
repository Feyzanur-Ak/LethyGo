const SubscribeForm = () => {
  return (
    <div>
      <h3 className="text-slate-800 text-[20px] md:text-[24px] font-bold">Get In Touch</h3>
      <div className="flex border-2 border-neutral-200 rounded-lg overflow-hidden">
        <input 
        type="email" 
        placeholder="Your Email"
        className="flex-grow px-4 py-2 text-neutral-500 outline-none"
         />
         <button className="bg-sky-500 text-white text-lg px-6 rounded-tr-lg rounded-br-lg">
            Subscribe
         </button>
      </div>
      <p className="text-sm text-neutral-500  ">Stay updated with our latest news and offers.</p>
    </div>
  )
}

export default SubscribeForm
