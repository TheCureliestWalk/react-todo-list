import { useState } from 'react';
import type { Todo, AddTodo } from '@/types/Todo';

export default function TodoNew({
  addTodo,
  todos,
}: {
  addTodo: Todo;
  todos: Todo[];
}) {
  const [todoTitle, setTodoTitle] = useState('');
  const [todoDescription, setTodoDescription] = useState('');

  const data: Todo = {
    id: todos.length + 1,
    title: todoTitle,
    description: todoDescription,
    isComplete: false,
  };

  const handleTodo = () => {
    addTodo(data);

    // reset input fields
    setTodoTitle('');
    setTodoDescription('');
  };

  return (
    <div className="flex flex-col max-w-md mx-auto">
      <div className="flex flex-col">
        <div className="rounded border border-gray-300 shadow-lg">
          <input
            type="text"
            id="todoTitle"
            name="todoTitle"
            className="w-full p-2.5 bg-white/70 border-b-2 border-b-gray-500"
            placeholder="I want to..."
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
          />
          <textarea
            name="todoDescription"
            id="todoDescription"
            placeholder="a little detail here..."
            className="w-full p-2.5 bg-white/70 text-sm"
            value={todoDescription}
            onChange={(e) => setTodoDescription(e.target.value)}
          ></textarea>
        </div>

        <button
          className="w-full shadow-lg px-4 py-2.5 rounded border border-green-500 bg-green-500 hover:bg-green-700 duration-100 text-white"
          onClick={handleTodo}
        >
          + Add New Todo
        </button>
      </div>
    </div>
  );
}
