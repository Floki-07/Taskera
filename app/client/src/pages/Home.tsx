// Home.tsx
import React from "react";
import Box from "../components/DashboardBox/Box";
import { ChartNoAxesCombined, FolderPlus, Plus } from "lucide-react";

// Explicit typing for homeItems
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

function Home() {
  return (
    <div className="flex flex-col">
      <h1 className="text-[34px] ml-4 mt-6">Welcome back Aaryan,</h1>
      <div className="flex">
        {homeItems.map((item, index) => (
          <Box
            key={item.title} // Use title as a key
            Icon={item.icon}
            url={item.url}
            title={item.title}
          />
        ))}
      </div>


      <div className="flex justify-center w-[90vw] mt-8 ">
        <div className="flex flex-col">
          <img src="minions.png" alt="" width="100px" className="m-auto" />
          <div className="w-[22vw] text-center">
            <h1 className="text-[29px] leading-tight">Create a new task to get started🌈</h1>

            <button className="bg-[var(--secondary)] text-black rounded-md px-3 py-2 mt-3">Create +</button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;
