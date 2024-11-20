import { useState } from "react";
import TaskCard from "../components/task/TaskCard"
import { Plus } from "lucide-react";
import ProgressBar from "../components/progressBar/ProgressBar";

function Tasks() {

    const [isActive, setIsActive] = useState<string>('All');

    const list = ['Today', 'All'].map((item : any,i : number) => (
        <button key={i} onClick={()=>{setIsActive(item)}} className={`${isActive === item ? 'bg-[--secondary] text-[--ternary]' : 'bg-[--background-2]  text-[--secondary]'} rounded px-3 py-1`}>{item}</button>
    ))

  return (
    <div className="w-full flex flex-col items-center py-10 gap-4">
        <div className="flex w-2/3 items-center justify-between">
            <div className="flex gap-4 ">
                {list}
            </div>
            <button className="bg-[--secondary] text-[--ternary] rounded-full p-1"><Plus/></button>
        </div>
        <div className="w-2/3">
            <ProgressBar progress={1}/>
            <TaskCard />
        </div>
    </div>
  )
}

export default Tasks