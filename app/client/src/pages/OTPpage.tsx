import React, { useRef, useState } from "react";
import { BASE_URL } from "../utils/vars";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function OTPpage() {
  const email = localStorage.getItem('email');
  const navigate = useNavigate();
  const [code, setCode] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleCodeChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async ()=>{
    const normalCode = code.join('');
    console.log(normalCode);
    try{
    console.log('email :',email);
    console.log('code :',code);
    const response = await axios.post(`${BASE_URL}/api/v1/auth/verify`,{
      email: email,
      code: String(normalCode),
    });
    console.log(response.data);
    const token = response.data.token;
    localStorage.setItem('token',token);
    navigate('/details');
  }catch(e){
    console.log('Error while verifying: ',e);
  }
  }

  return (
    <div className="h-[calc(100vh-60px)] w-[100vw] bg-[var(--ternary)] flex items-center justify-center">
      <div className="h-[70vh] w-[75vh] bg-[--background-2] rounded-md flex flex-col items-center gap-1 p-4">
        <h1 className="text-[--secondary] text-[40px] pt-[30px]">
          Verify Email
        </h1>
        <p className="text-[10px] pb-7">Code has been sent to {email}</p>
        <hr className="border-[--secondary] h-1 w-3/4 pb-6" />
        <div className="h-[65px] w-full flex justify-center gap-2">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => {
                handleCodeChange(index, e.target.value);
              }}
              onKeyDown={(e) => {
                handleKeyDown(index, e);
              }}
              className="h-[65px] w-[60px] rounded-[15px] focus:outline-none focus:bg-[--primary] text-[--ternary] text-center text-[25px]"
            />
          ))}
        </div>
        <p className="text-[10px]  pt-5">Didnt get the code?</p>
        <p className="text-[10px] text-[--secondary] pb-3">Resend OTP</p>

        <button className="h-fit w-[80%] bg-[--ternary] p-4 text-[--secondary] flex justify-center items-center rounded-[40px] mb-5" onClick={handleVerify}>
          Verify
        </button>
        <hr className="border-[--secondary] h-1 w-3/4 pb-6" />
        <div className="flex w-full ml-[90px]">
          <p className="text-[--secondary] text-[12px] inline">Go back</p>
        </div>
      </div>
    </div>
  );
}

export default OTPpage;
