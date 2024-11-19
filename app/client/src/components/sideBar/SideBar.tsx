import { CalendarClock, ChartNoAxesCombined, Home, LayoutList, UsersRound } from "lucide-react"
import { Link } from "react-router-dom"

const sideBarItems = [{
    icon:<Home/>,
    url:'/home'
},
{
    icon:<ChartNoAxesCombined />,
    url:'/analytics'
},{
    icon:<LayoutList />,
    url:'/tasks'
},{
    icon:<CalendarClock/>,
    url:'/calendar'
},{
    icon:<UsersRound />,
    url:'/groups'
},]

function SideBar() {

    const list = sideBarItems.map((item : any,i : any) => (
        <Link to={item.url}>{item.icon}</Link>
    ))

  return (
    <div className="w-[60px] border-r border-[--border-line] h-full flex flex-col items-center py-10 justify-between">
        <div className="flex flex-col gap-5 ">
            {list}
        </div>
        A
    </div>
  )
}

export default SideBar