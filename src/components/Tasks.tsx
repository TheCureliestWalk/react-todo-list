import { useEffect, useState } from "react";

export default function Tasks() {

    const [tasks, setTasks] = useState<{ id: number, title: string; description: string; }[]>([]);

    useEffect(() => {
        const tasks = localStorage.getItem("tasks");
        if (tasks) {
            setTasks(JSON.parse(tasks));
        }
    }, [])

    return (
        <div className="max-w-md mx-auto bg-white/70 text-gray-900 mt-8 p-2.5">
            <h1>All Tasks</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className="flex justify-between items-center py-2 hover:bg-green-300 duration-100 rounded">
                        <div>
                        <h3 className="font-bold text-base">{task.title}</h3>
                        <p className="text-sm text-gray-700 ml-3 pl-1 border-l-2 border-sky-400">{task.description}</p>
                        </div>

                        <div>
                            <button className="rounded bg-red-500 border border-red-400 px-4 text-white shadow-lg hover:bg-red-600 duration-100 font-bold text-sm">DELETE</button>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    )
}