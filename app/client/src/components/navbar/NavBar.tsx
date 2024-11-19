import { Bell, Sun } from "lucide-react"

function NavBar() {
  return (
    <div className="flex justify-between p-3 border-b border-[--border-line] items-center h-[60px]">
        <div className="text-[20px]">
            P
        </div>
        <div className="flex gap-10">
            <button><Sun /></button>
            <button><Bell /></button>
        </div>
    </div>
  )
}

export default NavBar