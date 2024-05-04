
import type { Todo } from "@/types/Todo";
import { FaTrash as Trash } from 'react-icons/fa';

export default function TodoList({
  todos,
  deleteTodo,
  clearTodos,
  toggleTodo,
}: {
  todos: Todo[];
  deleteTodo: any;
  clearTodos: any;
  toggleTodo: any;
}) {

    const [filter, setFilter] = useState("all");
  return (
    <div className="max-w-md mx-auto bg-white/70 text-gray-900 mt-8 p-2.5">
      <div className="flex justify-between">
        <h1>All Tasks ({todos.length})</h1>
        <button
          className="bg-amber-500 px-2 py-0.5 hover:bg-amber-700 text-white duration-100 text-xs"
          onClick={clearTodos}
        >
          Clear All
        </button>
        <select
          name="todoFilter"
          id="todoFilter"
          className="outline outline-lime-300"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>

      <ul className="mt-2.5">
        {todos.reverse().map((todo, index) => (
          <div key={index}>
            <li
              className="flex justify-between items-center py-2 hover:bg-green-300 duration-100 rounded px-1 cursor-pointer"
            >
              <div onClick={() => toggleTodo(todo.id)} className="w-full">
                <h3
                  className={`font-bold text-base ${todo.isComplete ? "line-through" : ""}`}
                >
                  {todo.title}
                </h3>
                <p
                  className={`text-sm text-gray-700 ml-3 pl-1 border-l-2 border-sky-400 ${todo.isComplete ? "line-through" : ""}`}
                >
                  {todo.description}
                </p>
              </div>
              <div>
                <button
                  className="rounded bg-red-500 border text-white shadow-lg hover:bg-red-700 hover:shadow-xl duration-100 font-bold p-2"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <Trash />
                </button>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
