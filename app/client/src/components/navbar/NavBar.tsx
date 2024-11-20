import { Bell, Moon, Sun } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

function NavBar({isLanding} : any) {

  const [isLight, setIsLight] = useState(false);

  return (
    <div className={`flex justify-between ${isLanding ? '' : 'border-b'} border-[--border-line] items-center h-[60px] pr-5`}>
        <div className={`text-[20px] w-[60px] ${isLanding ? '' : 'border-r'} border-[--border-line] h-full flex justify-center items-center`}>
            <Link to='/'><img src="/Taskera.png" alt="" className="h-16 w-16 object-cover"/></Link>
        </div>
        <div className="flex gap-10">
            <button onClick={()=>{setIsLight(!isLight)}}>{isLight ? <Sun /> : <Moon />}</button>
            <button><Bell /></button>
        </div>
    </div>
  )
}

export default NavBar