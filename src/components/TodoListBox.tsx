import { useState, useEffect } from 'react';
import { Todo, TodoFilter } from '@/types/Todo';
import { FaTrash as Trash } from 'react-icons/fa';
import { Tab } from '@headlessui/react';

export default function TodoListBox({
  todos,
  clearTodos,
  deleteTodo,
  toggleTodo,
}: {
  todos: Todo[];
  deleteTodo: any;
  clearTodos: any;
  toggleTodo: any;
}) {
  const tabTypes: TodoFilter[] = [
    TodoFilter.ALL,
    TodoFilter.COMPLETED,
    TodoFilter.INCOMPLETE,
  ];

  return (
    <div className="max-w-md mx-auto bg-white/70 text-gray-900 mt-8 p-2.5">
      <div className="flex justify-between">
        <h3 className="font-bold">All Tasks ({todos.length})</h3>
        <button
          className="bg-amber-500 px-2 py-0.5 hover:bg-amber-700 text-white duration-100 text-xs"
          onClick={clearTodos}
        >
          Clear All
        </button>
      </div>

      <ul className="mt-2.5">
        <Tab.Group>
          <Tab.List className="flex gap-0.5 py-1">
            {tabTypes.map((tab, index) => {
              return (
                <Tab
                  className="px-4 py-1 border-amber-500 hover:underline underline-offset-4 duration-100 decoration-sky-500 decoration-2"
                  key={index}
                >
                  {tab}
                </Tab>
              );
            })}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              {todos.map((todo, index) => (
                <div key={index}>
                  <li className="flex justify-between items-center hover:bg-green-300 duration-100 rounded cursor-pointer">
                    <div
                      onClick={() => toggleTodo(todo.id)}
                      className="w-full py-2 px-1"
                    >
                      <h3
                        className={`font-bold text-base ${todo.isComplete ? 'line-through' : ''}`}
                      >
                        {todo.title}
                      </h3>
                      <p
                        className={`text-sm text-gray-700 ml-3 pl-1 border-l-2 border-sky-400 ${todo.isComplete ? 'line-through' : ''}`}
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
            </Tab.Panel>
            {/* COMPLETED */}
            <Tab.Panel>
              {todos.map((todo, index) => {
                if (todo.isComplete) {
                  return (
                    <div key={index}>
                      <li className="flex justify-between items-center hover:bg-green-300 duration-100 rounded cursor-pointer">
                        <div
                          onClick={() => toggleTodo(todo.id)}
                          className="w-full py-2 px-1"
                        >
                          <h3
                            className={`font-bold text-base ${todo.isComplete ? 'line-through' : ''}`}
                          >
                            {todo.title}
                          </h3>
                          <p
                            className={`text-sm text-gray-700 ml-3 pl-1 border-l-2 border-sky-400 ${todo.isComplete ? 'line-through' : ''}`}
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
                  );
                }
              })}
            </Tab.Panel>
            {/* INCOMPLETED */}
            <Tab.Panel>
              {todos.map((todo, index) => {
                if (!todo.isComplete) {
                  return (
                    <div key={index}>
                      <li className="flex justify-between items-center hover:bg-green-300 duration-100 rounded cursor-pointer">
                        <div
                          onClick={() => toggleTodo(todo.id)}
                          className="w-full py-2 px-1"
                        >
                          <h3
                            className={`font-bold text-base ${todo.isComplete ? 'line-through' : ''}`}
                          >
                            {todo.title}
                          </h3>
                          <p
                            className={`text-sm text-gray-700 ml-3 pl-1 border-l-2 border-sky-400 ${todo.isComplete ? 'line-through' : ''}`}
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
                  );
                }
              })}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </ul>
    </div>
  );
}
