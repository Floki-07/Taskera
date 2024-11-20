import { useState } from "react";

function SubTasks({
    task, 
    taskIndex, 
    milestoneIndex, 
    subtaskIndex, 
    updateSubtask
}: {
    task: any, 
    taskIndex: number, 
    milestoneIndex: number, 
    subtaskIndex: number,
    updateSubtask: (taskIndex: number, milestoneIndex: number, subtaskIndex: number, done: boolean) => void
}) {
    const [isCompleted, setIsCompleted] = useState(task.done);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const done = e.target.checked;
        setIsCompleted(done);
        updateSubtask(taskIndex, milestoneIndex, subtaskIndex, done);
    }

    return (
        <div className="flex gap-2">
            <input 
                type="checkbox" 
                checked={isCompleted}
                onChange={handleCheckboxChange}
            />
            <p className={isCompleted ? 'line-through' : ''}>{task.name}</p>
        </div>
    )
}

export default SubTasks;