import { IoIosSunny } from 'react-icons/io'
import { IoMoon } from "react-icons/io5";
import { useTheme } from 'next-themes'

function Nav (){
  const {theme, setTheme} = useTheme()
  return(
    <header className="bg-lmrs-element w-full flex justify-center shadow dark:bg-dmrs-element">
      <nav className="w-4/5 max-w-[1440px] flex justify-between items-center py-4">
        <h1 className="text-xl font-semibold ">Where in the world?</h1>
        <div className="flex items-center cursor-pointer ">
          {theme === 'light' ? 
            <div onClick={() => setTheme('dark')} className="flex">
              <IoIosSunny className='mr-2 text-xl'/><span>Light Mode</span>
            </div> 
            : <div  onClick={() => setTheme('light')} className="flex items-center ml-6">
              <IoMoon className='mr-2 text-xl'/><span>Dark Mode</span>
            </div>
          }
        </div>
      </nav>
    </header>
  )
}
export default Nav