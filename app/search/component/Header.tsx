function Header() {
    return ( 
        <div className="bg-[url('https://cdn.otstatic.com/cfe/12/images/dtp-desktop-6b28de.png')] p-2">
            <div className="flex py-3 text-lg text-left m-auto justify-center">
              <input
                className="rounded  w-[450px] p-2  mr-3 focus:border-l-stone-300"
                type="search "
                placeholder="Location, Restaurant, or Cuisine"
              />
              <button className="rounded bg-red-600 hover:bg-[#b8222d] font-bold py-2 px-9 text-white">
                Let's Go
              </button>
            </div>
          </div>
     );
}

export default Header;