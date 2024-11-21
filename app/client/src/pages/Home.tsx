// Home.tsx
import React, { useEffect, useState } from "react";
import Box from "../components/DashboardBox/Box";
import { ChartNoAxesCombined, FolderPlus, Plus, FilePlus2, Flag, MoveRight } from "lucide-react";

interface HomeItem {
  icon: React.ReactNode;
  url: string;
  title: string;
}

const homeItems: HomeItem[] = [
  {
    icon: <Plus />,
    url: "/tasks",
    title: "Create Tasks",
  },
  {
    icon: <FilePlus2 />,
    url: "/tasks",
    title: "Create Course",
  },
  {
    icon: <FolderPlus />,
    url: "/tasks",
    title: "View Tasks",
  },
  {
    icon: <ChartNoAxesCombined />,
    url: "/analytics",
    title: "Your Progress",
  },
];

const initialCourseTypes = ["EVS", "MCES", "FAFL", "RMIPR"];
const priorities = [
  { value: "High", label: "High", color: "text-red-600" },
  { value: "Medium", label: "Medium", color: "text-yellow-500" },
  { value: "Low", label: "Low", color: "text-green-500" },
];

function Home() {
  const [taskModalOpen, setTaskModalOpen] = useState(false);
  const [courseTypes, setCourseTypes] = useState(initialCourseTypes);
  const [selectedPriority, setSelectedPriority] = useState<string | null>(null);
  const [isPriorityDropdownOpen, setIsPriorityDropdownOpen] = useState(false);
  const [remidersSelected, setRemidersSelected] = useState(false)
  return (
    <div className="flex flex-col px-5 py-4">
      <h1 className="text-[34px] ">Welcome back Aaryan,</h1>
      <div className="flex">
        {homeItems.map((item) => (
          <Box
            key={item.title}
            Icon={item.icon}
            url={item.url}
            title={item.title}
          />
        ))}
      </div>

      {/* Task Modal */}
      {taskModalOpen && (
        <>
          <div className="h-[100vh] w-[100vw] absolute bg-black/50 top-0 left-0 flex items-center z-[10]">
            
            <div className="relative bg-[var(--background-2)] h-[40vh] w-[65vw] mx-auto rounded-md translate-y-[-10%] z-[20] px-8 py-6">
              {/* Task Title Input */}
              <div className="h-[16vh] mb-4">
                <input
                  type="text"
                  className="text-xl outline-none text-white w-[43vw] bg-[var(--background-2)] placeholder:text-gray-400"
                  placeholder="Enter your task title"
                  autoFocus
                />
              </div>

              {/* Task Options */}
              <div className="flex gap-3 items-center mb-4">
                {/* Task Type Dropdown */}
                <select
                  name="taskType"
                  id="taskType"
                  className="bg-[var(--background-2)] border border-[var(--secondary)] py-2 outline-none rounded-md px-2 w-[9vw] text-white"
                >
                  <option value="">Task Type</option>
                  <option value="Exam Preparation">Exam Preparation</option>
                  <option value="Assignment">Assignment</option>
                  <option value="Practice/Project">Practice/Project</option>
                  <option value="Reading">Reading</option>
                  <option value="Other">Other</option>
                </select>

                {/* Course Types Dropdown */}
                <select
                  className="bg-[var(--background-2)] border border-[var(--secondary)] py-2 outline-none rounded-md px-2 w-[9vw] text-white"
                >
                  <option value="">Course Type</option>
                  {courseTypes.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>

                {/* Deadline Input */}
                <div className="relative">
                  <input
                    type="date"
                    placeholder="Deadline"
                    className="bg-white text-black py-2 px-3 rounded-md border cursor-pointer hover:bg-gray-100 w-[11vw]"
                  />
                </div>

                {/* Reminder Option */}
                <div className={`${remidersSelected ?'bg-[var(--secondary)]':'bg-white'} w-[10vw] 
                rounded-md flex justify-center items-center text-black py-2 px-1`}>
                  <input type="checkbox"
                    checked={remidersSelected} 
                    onChange={()=>setRemidersSelected(!remidersSelected)} 
                   className="mr-2 bg-black" />
                  Set Reminders
                </div>

                {/* Priority Dropdown */}
                <div className="relative w-[9vw]">
                  <div
                    className="bg-[var(--background-2)] border border-[var(--secondary)] py-2 px-2 rounded-md text-white cursor-pointer flex justify-between items-center"
                    onClick={() =>
                      setIsPriorityDropdownOpen(!isPriorityDropdownOpen)
                    }
                  >
                    {selectedPriority ? (
                      <span>{selectedPriority}</span>
                    ) : (
                      <span>Difficulty</span>
                    )}
                    <span>▼</span>
                  </div>
                  {isPriorityDropdownOpen && (
                    <div className="absolute bg-[var(--background-2)] border border-[var(--secondary)] mt-2 rounded-md w-full z-10">
                      {priorities.map((priority) => (
                        <div
                          key={priority.value}
                          className={`flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-700 ${priority.color}`}
                          onClick={() => {
                            setSelectedPriority(priority.label);
                            setIsPriorityDropdownOpen(false);
                          }}
                        >
                          <Flag /> {priority.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>


                  {/* Estd time */}

                  <input type="number"  className="py-2 rounded-md w-[8vw] text-black px-1" placeholder="Est. Time(hrs) "/>


              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button className="bg-[var(--secondary)]  px-3 py-1 rounded-[10px] text-center hover:bg-[var(--secondary)] w-[8vw] flex items-center text-black" >
                 <span className="text-black mx-auto font-bold "> Create </span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Initial State */}
      <div className="flex justify-center w-[90vw] mt-8">
        <div className="flex flex-col">
          <img src="minions.png" alt="" width="100px" className="m-auto" />
          <div className="w-[22vw] text-center">
            <h1 className="text-[29px] leading-tight">
              Create a new task to get started🌈
            </h1>
            <button
              className="bg-[var(--secondary)] text-black rounded-md px-3 py-2 mt-3"
              onClick={() => setTaskModalOpen(true)}
            >
              Create +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
