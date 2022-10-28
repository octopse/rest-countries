import { FaCaretDown } from "react-icons/fa";

function Filter(){
  return(
    <div className="flex items-center justify-center w-48 p-3 text-sm text-lmrs-input bg-lmrs-element rounded-md shadow cursor-pointer">
      <span className="font-semibold">Filter by Region </span>
      <FaCaretDown className='ml-10'/>
    </div>
  )
}

export default Filter