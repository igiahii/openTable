
import SearchBar from "./SearchBar(c)";

function Header({locations , cuisines} : any) {

  return (
    <div className="sm:h-64 h-40 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
      <div className="text-center mt-5 sm:mt-10 ">
        <h1 className=" font-bold  capitalize text-white sm:text-4xl pt-5 mb-2 text-xl">
          find your table for any occaision
        </h1>
        <SearchBar/>
      </div>
    </div>
  );
}

export default Header;
