import { useState } from "react";
import SubTasks from "./SubTasks";

function Milestone() {

    const [isOpen, setIsOpen] = useState(false);

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
            <SubTasks/>
            <SubTasks/>
            <SubTasks/>
      </div>}
    </div>
  );
}

export default Milestone;
