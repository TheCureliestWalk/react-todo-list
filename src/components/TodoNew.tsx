import { useEffect, useState } from "react";
import type {Todo} from "@/types/Todo";

export default function TodoNew({todos}: {todos: Todo[]}) {

    const [newTodo, setNewTodo] = useState<Todo[]>([]);

    const [todoTitle, setTodoTitle] = useState("");
    const [todoDescription, setTodoDescription] = useState("");

    const addtodo = () => {
        // check if title is empty
        if (!todoTitle) {
            alert('todo title is required');
            return;
        }

        setNewTodo([...newTodo, { id: newTodo.length + 1, title: todoTitle, description: todoDescription, isComplete: false }]);
        localStorage.setItem("todos", JSON.stringify(newTodo));
        console.log(newTodo);

        // clear input fields
        setTodoTitle("");
        setTodoDescription("");
    }

    return (
        <div className="flex flex-col max-w-md mx-auto">

        <div className="flex flex-col" >
          <div className="rounded border border-gray-300 shadow-lg">
          <input
            type="text"
            id="todoTitle"
            name="todoTitle"
            className="w-full p-2.5 bg-white/70 border-b-2 border-b-sky-200"
            placeholder="I want to..."
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
          />
          <textarea
            name="todoDescription"
            id="todoDescriptio"
            placeholder="a little detail here..."
            className="w-full p-2.5 bg-white/70 text-sm"
            value={todoDescription}
            onChange={(e) => setTodoDescription(e.target.value)}
          ></textarea>
          </div>

          <button className="w-full shadow-lg px-4 py-2.5 rounded border border-green-500 bg-green-500 hover:bg-green-700 duration-100 text-white" onClick={addtodo}>
            Add todo
          </button>
        </div>
    </div>
    )
}