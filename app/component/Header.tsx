
import SearchBar from "./SearchBar(c)";

function Header({locations , cuisines} : any) {

  return (
    <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
      <div className="text-center mt-10 ">
        <h1 className=" font-bold  capitalize text-white text-4xl pt-5 mb-2">
          find your table for any occaision
        </h1>
        <SearchBar/>
      </div>
    </div>
  );
}

export default Header;
