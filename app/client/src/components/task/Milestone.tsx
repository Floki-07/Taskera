import { useState } from "react";
import SubTasks from "./SubTasks";

function Milestone({
    ms, 
    taskIndex, 
    milestoneIndex, 
    updateSubtask,
}: {
    ms: any, 
    taskIndex: number, 
    milestoneIndex: number,
    updateSubtask: (taskIndex: number, milestoneIndex: number, subtaskIndex: number, done: boolean) => void
}) {

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3">
        <button className="w-2 h-2 bg-[--primary] rounded-full" onClick={()=>{setIsOpen(!isOpen)}}></button>
        <p className="text-xl">
          <span className="font-semibold text-[--secondary]">Milestone 1 </span>
          : Buy pink Book{" "}
        </p>
      </div>

      {isOpen && <div className="border-l ml-1 p-4">
            {ms.subtasks.map((task : any , i : number) =>(
              <SubTasks
                  key={i}
                  task={task}
                  taskIndex={taskIndex}
                  milestoneIndex={milestoneIndex}
                  subtaskIndex={i}
                  updateSubtask={updateSubtask}
              />
            ))}
      </div>}
    </div>
  );
}

export default Milestone;
