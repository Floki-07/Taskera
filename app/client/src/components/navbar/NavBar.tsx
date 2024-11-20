import { Bell, Moon, Sun } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

function NavBar({isLanding} : any) {

  const [isLight, setIsLight] = useState(false);

  return (
    <div className={`flex justify-between ${isLanding ? 'absolute z-10' : 'border-b'} border-[--border-line] items-center h-[60px] pr-5 w-full`}>
        <div className={`text-[20px] w-[60px] ${isLanding ? '' : 'border-r'} border-[--border-line] h-full flex justify-center items-center`}>
            <Link to='/'><img src="/Taskera.png" alt="" className="h-16 w-16 object-cover" /></Link>
        </div>
        <div className="flex gap-10">
            <button onClick={()=>{setIsLight(!isLight)}}>{isLight ? <Sun /> : <Moon />}</button>
           {!isLanding &&  <button><Bell /></button>}
            {isLanding && <Link to='/signup' className="bg-[--secondary] text-[--ternary] px-4 py-1 rounded-md font-medium">Login</Link>}
        </div>
    </div>
  )
}

export default NavBar