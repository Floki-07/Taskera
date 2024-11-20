import { CalendarClock, ChartNoAxesCombined, Home, LayoutList, UsersRound } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

const sideBarItems = [{
    name:'home',
    icon:<Home/>,
    url:'/home'
},
{
    name:'analytics',
    icon:<ChartNoAxesCombined />,
    url:'/analytics'

},{

    name:'tasks',
    icon:<LayoutList />,
    url:'/tasks'

},{

    name:'calendar',
    icon:<CalendarClock/>,
    url:'/calendar'

},{
    name:'groups',
    icon:<UsersRound />,
    url:'/groups'
},]

function SideBar({isLanding} : any) {


    const list = sideBarItems.map((item : any,i : any) => (
        <Link to={item.url} key={i} className={`${location.pathname === '/'+item.name ? 'text-[--secondary]' : ''}`}>{item.icon}</Link>
    ))

  return (
     <>
        {!isLanding && <div className="w-[60px] border-r border-[--border-line] h-full flex flex-col items-center py-10 justify-between">
        <div className="flex flex-col gap-5 ">
            {list}
        </div>
        A
    </div>}
     </>
  )
}

export default SideBar