import { useEffect, useState } from "react";
import type { Todo } from "@/types/Todo";

export default function TodoList({todos}: {todos: Todo[]}) {

    return (
        <div className="max-w-md mx-auto bg-white/70 text-gray-900 mt-8 p-2.5">
            <h1>All Tasks ({todos.length})</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className="flex justify-between items-center py-2 hover:bg-green-300 duration-100 rounded">
                        <div>
                        <h3 className="font-bold text-base">{todo.title}</h3>
                        <p className="text-sm text-gray-700 ml-3 pl-1 border-l-2 border-sky-400">{todo.description}</p>
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