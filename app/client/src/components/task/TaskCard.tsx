import {
  AlarmClock,
  ChevronDown,
  ChevronFirst,
  ChevronUp,
  Flag,
  Plus,
} from "lucide-react";
import { useState } from "react";
import ProgressBar from "../progressBar/progressBar";
import Milestone from "./Milestone";

function TaskCard() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex gap-3 py-4">
      <div
        onClick={() => {
          setIsCompleted(!isCompleted);
        }}
        className={`w-4 h-4 rounded-full ${
          isCompleted ? "bg-[--secondary]" : "bg-[--primary]"
        } border-6 border-black mt-6`}
      />
      <div className="flex flex-col w-full bg-[--background-2] px-10 py-7 rounded-xl gap-4">
        <div
          className="flex justify-between w-full"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <h1 className={`${isCompleted && "line-through"} text-4xl`}>
            EVS OBA completion
          </h1>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <button className="rounded border border-[--secondary] p-2">
              8:00am - 9:00am
            </button>
            <button className="rounded border border-[--secondary] p-2 flex gap-3">
              <Flag />
              Normal
            </button>
            <button className="rounded border border-[--secondary] p-2 flex gap-3">
              <AlarmClock />
              Reminders
            </button>
          </div>
          <button className="bg-[--secondary] text-[--ternary] rounded-full h-fit w-fit p-1">
            <Plus />
          </button>
        </div>

        <ProgressBar progress={0.1} />
        <div>
          <Milestone/>
          <Milestone/>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
