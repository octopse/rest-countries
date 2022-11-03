import { IoSearchSharp } from "react-icons/io5";

function Search({handleSearch}){
  return(
    <div className="relative flex w-full mb-6
    lg:w-2/5 lg:mb-0">
      <input placeholder="Search for a country..." onChange={handleSearch} className=" font-nunito w-full h-full rounded-md text-sm font-semibold placeholder:opacity-50 text-lmrs-input bg-lmrs-element bg py-3 px-4 pl-16 shadow focus:outline-none"/>
      <IoSearchSharp className="absolute bottom-3 left-6 text-lmrs-input text-xl opacity-80"/>
    </div>
  );
}

export default Search