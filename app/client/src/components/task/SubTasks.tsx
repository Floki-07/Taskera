import { useState } from "react"

function SubTasks() {

    const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className="flex gap-2">
        <input type="checkbox" />
        <p>Go to college</p>
    </div>
  )
}

export default SubTasks