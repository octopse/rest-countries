import { IoIosSunny } from 'react-icons/Io'

function Nav (){
  return(
    <header className="bg-lmrs-element w-full flex justify-center shadow">
      <nav className="w-4/5 max-w-[1440px] flex justify-between items-center py-4">
        <h1 className="text-xl font-semibold ">Where in the world ?</h1>
        <div className="flex items-center "><IoIosSunny className='mr-2 text-xl'/>Light Mode</div>
      </nav>
    </header>
  )
}
export default Nav