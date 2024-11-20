import { useState, useEffect } from "react";
import { motion, useAnimation, AnimationControls } from "framer-motion";
import Play from "../components/playPause/Play";
import Pause from "../components/playPause/Pause";
import { Plus, RotateCcw } from "lucide-react";

interface PomodoroProps {
  duration?: number; // in seconds
  radius?: number;
}

export default function Pomodoro({
  duration = 25 * 60,
  radius = 60,
}: PomodoroProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const controls: AnimationControls = useAnimation();
  const circumference: number = 2 * Math.PI * radius;

  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [startTime, setStartTime] = useState<number | null>(null);

  useEffect(() => {
    let interval: any | undefined;

    if (isPlaying) {
      setStartTime(Date.now() - elapsedTime * 1000);

      interval = setInterval(() => {
        const elapsed: number = (Date.now() - (startTime ?? Date.now())) / 1000;
        setElapsedTime(elapsed);

        const progress: number = Math.min(1, elapsed / duration);
        const offset: number = circumference * (1 - progress);
        controls.set({ strokeDashoffset: offset });

        if (elapsed >= duration) {
          setIsPlaying(false);
          clearInterval(interval);
        }
      }, 16);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, startTime, duration, controls, circumference]);

  const togglePlay = (): void => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = (): void => {
    setIsPlaying(false);
    setElapsedTime(0);
    setStartTime(null);
    controls.set({ strokeDashoffset: circumference });
  };

  return (
    <>
      <div className="flex flex-col items-cente justify-center w-full">
        <div className="flex items-center justify-center relative ">
          <h1 className="absolute text-8xl">
            {`${Math.floor((duration - Math.floor(elapsedTime)) / 60)
              .toString()
              .padStart(2, "0")}:${Math.floor(
              (duration - Math.floor(elapsedTime)) % 60
            )
              .toString()
              .padStart(2, "0")}`}
          </h1>
          <svg
            width="600"
            height="600"
            viewBox="0 0 200 200"
            className="select-none"
          >
            <circle
              cx="100"
              cy="100"
              r={radius}
              stroke="currentColor"
              strokeWidth="6"
              fill="none"
              className="text-[--secondary] rounded-full"
            />

            <motion.circle
              cx="100"
              cy="100"
              r={radius}
              stroke="currentColor"
              strokeWidth="7"
              fill="none"
              className="text-[--background-2] rounded-full "
              style={{ rotate: 90, transformOrigin: "center", rotateX: 180 }}
              initial={{
                strokeDasharray: circumference,
                strokeDashoffset: circumference,
              }}
              animate={controls}
            />
          </svg>
          <div className="w-fit absolute bottom-0 flex items-center gap-4">
            <button
              onClick={togglePlay}
              className=""
              aria-label={isPlaying ? "Pause timer" : "Start timer"}
            >
              {isPlaying ? <Pause /> : <Play />}
            </button>
            {elapsedTime !== 0 && (
              <button onClick={handleReset} className="text-[--secondary]">
                <RotateCcw size={50}/>
              </button>
            )}
          </div>
        </div>
        <div className="flex justify-center">
            <button className="bg-[--secondary] w-fit text-[--ternary] mt-4 px-4 py-2 rounded flex gap-3">Add task<Plus/></button>
        </div>
      </div>
    </>
  );
}
