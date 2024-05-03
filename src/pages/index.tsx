import { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import TodoNew from "@/components/TodoNew";
import TodoList from "@/components/TodoList";
import { Todo } from "@/types/Todo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");

    return () => {
        setTodos(savedTodos ? JSON.parse(savedTodos) : []);
    }
}, []);

  return (
    <main className={`mx-auto p-16 ${inter.className} bg-sky-100 text-gray-900`}>
      <h1 className="text-4xl text-center py-6">To-Do List</h1>
      <TodoNew todos={todos}/>
      <TodoList todos={todos}/>
    </main>
  );
}
