import { IoIosArrowDown } from "react-icons/io";

function Filter({handleDropdown, dropdown}){
  return(
    <div className="relative flex items-center justify-center w-48 py-3 px-4 text-sm text-lmrs-text bg-lmrs-element rounded-md shadow cursor-pointer" onClick={handleDropdown}>
      <span className="font-semibold ">Filter by Region </span>
      <IoIosArrowDown className={`ml-10 text-lmrs-text ${dropdown ? "rotate-180": "rotate-0"}`}/>
      <div className={`${dropdown ? "flex": "hidden"} absolute top-14 w-48 p-4 px-6 bg-lmrs-element text-lmrs-text font-semibold text-opacity-80 rounded-md shadow cursor-pointer`}>
        <ul className="list-none">
          <li key="1">Africa</li>
          <li key="2">America</li>
          <li key="3">Asia</li>
          <li key="4">Europe</li>
          <li key="5">Oceania</li>
        </ul>
      </div>
    </div>
  )
}

export default Filter