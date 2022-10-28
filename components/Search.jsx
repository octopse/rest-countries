import { IoSearchSharp } from "react-icons/io5";

function Search(){
  return(
    <div className="relative flex w-96">
      <input placeholder="Search for a country..." className=" font-nunito w-full h-full rounded-md text-sm font-semibold placeholder:opacity-50 text-lmrs-input py-3 px-4 pl-16 shadow focus:outline-none"/>
      <IoSearchSharp className="absolute bottom-3 left-6 text-lmrs-input text-xl opacity-80"/>
    </div>
  );
}

export default Search