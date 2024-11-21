// Box.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

// Explicit prop typing for Box
interface BoxProps {
  Icon: React.ReactNode;
  title: string;
  url: string;
}

const Box: React.FC<BoxProps> = ({ Icon, title, url }) => {
  const navigate = useNavigate(); 

  return (
    <div
      className="bg-[var(--background-2)] m-4 min-w-[120px] h-[109px] flex flex-col p-4 rounded-md cursor-pointer"
      onClick={() => navigate(url)} 
    >
      <div
        className="w-[32px] h-[32px] border-2 border-[var(--secondary)]
        rounded-[2px] mt-2 mr-2 flex items-center justify-center text-[var(--secondary)] p-1"
      >
        {Icon }
      </div>

      <div className="mt-3 ">
        <span className="text-center w-[15vw]">{title}</span>
      </div>
    </div>
  );
};

export default Box;
