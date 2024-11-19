
function ProgressBar({progress}: {progress: number}) {
  const progressPercentage = progress * 100;

  return (
    <div className="w-full bg-[--ternary] rounded-full h-1.5">
      <div 
        className="bg-[--secondary] h-1.5 rounded-full" 
        style={{width: `${progressPercentage}%`}}
      ></div>
    </div>
  );
}

export default ProgressBar;