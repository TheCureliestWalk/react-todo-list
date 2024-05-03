import { useEffect, useState } from "react";

export default function NewTaskForm() {

    const [task, setTask] = useState<{ id: number, title: string; description: string; }[]>([]);

    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    const addTask = () => {
        setTask([...task, { id: task.length + 1, title: taskTitle, description: taskDescription }]);
        localStorage.setItem("tasks", JSON.stringify(task));
        console.log(task);

        // clear input fields
        setTaskTitle("");
        setTaskDescription("");
    }

    useEffect(() => {
        const tasks = localStorage.getItem("tasks");
        if (tasks) {
            setTask(JSON.parse(tasks));
        }
    }, []);

    return (
        <div className="flex flex-col max-w-md mx-auto">

        <div className="flex flex-col" >
          <div className="rounded border border-gray-300 shadow-lg">
          <input
            type="text"
            id="taskTitle"
            name="taskTitle"
            className="w-full p-2.5 bg-white/70 border-b-2 border-b-sky-200"
            placeholder="I want to..."
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <textarea
            name="taskDescription"
            id="taskDescriptio"
            placeholder="a little detail here..."
            className="w-full p-2.5 bg-white/70 text-sm"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          ></textarea>
          </div>

          <button className="w-full shadow-lg px-4 py-2.5 rounded border border-green-500 bg-green-500 hover:bg-green-700 duration-100 text-white" onClick={addTask}>
            Add Task
          </button>
        </div>
    </div>
    )
}