import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div className="bg-[#282d42] h-[300px] w-[300px] rounded-full absolute -top-24 -left-24 -z-3"></div>
      <div className="flex flex-col mt-[15%] w-[1440px]">
        <div className="w-screen h-screen">
          <div className="w-full h-full flex justify-center items-center flex-col relative">
            <div className="flex flex-col items-center absolute z-10">
              <p className="text-5xl translate-y-8">Welcome to</p>
              <h1 className="flex items-center text-[--secondary] text-[110px] font-medium">
                <img
                  src="/Taskera.png"
                  alt=""
                  className="h-[200px] w-[140px] object-cover"
                />
                Taskera
              </h1>
              <p className="text-[20px] -translate-y-7 translate-x-4">
                Intelligently scheduling your tasks with smart algorithmic
                precision
              </p>
              <Link
                to="/signup"
                className="border border-[--secondary] text-[--secondary] rounded-md px-4 py-2"
              >
                Get Started
              </Link>
            </div>

            <img
              src="/Goodnite.png"
              alt=""
              className="h-[600px] translate-x-[53%] translate-y-[50%] absolute"
            />
            <img
              src="/pomodoro-page.png"
              alt=""
              className="absolute top-[50%] translate-y-[33%] h-[600px]"
            />
          </div>
        </div>
        <div className="h-screen relative">
          <div className="h-[1300px] w-[1300px] bg-[#282d42] absolute rounded-full translate-y-[60%] -translate-x-[20%] flex justify-center items-center">
            <p className="text-4xl w-2/3 translate-x-20 inline">
              Effortlessly Transform{" "}
              <h1 className="text-[--secondary] text-5xl">Complexity </h1> into{" "}
              <h1 className="text-[--secondary] text-5xl">Clarity !!</h1>
            </p>
            <img
              src="/tasks-page.png"
              alt=""
              className="right-0 absolute h-[600px] translate-x-[60%] translate-y-[0%]"
            />
            <div className="absolute bottom-0 translate-x-[350px] flex flex-col items-center gap-4 mb-10">
              <p className="text-sm">{`Built with love <3  by team CodeSnorters`}</p>
              <div className="flex gap-5">
                <Link to='' className="bg-[#D9D9D9]/20 px-4 py-1 rounded-md flex items-center gap-2"><img src="/github.png" alt="" className="h-6"/>Star on GitHub</Link>
                <Link to=''  className="bg-[#D9D9D9]/20 px-4 py-1 rounded-md flex items-center gap-2"><Mail/>Contact Us</Link>
              </div>
            <div className="translate-y-10 mb-6 w-screen px-12 flex justify-between items-center">
              <h1 className="text-4xl ">Taskera</h1>
              <div className="flex gap-4">
                <p>Privacy policy</p>
                <p>Terms & conditions</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
