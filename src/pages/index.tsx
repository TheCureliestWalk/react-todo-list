import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import TodoNew from "@/components/TodoNew";
import TodoList from "@/components/TodoList";
import { AddTodo, Todo, TodoFilter } from "@/types/Todo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Fetch data from localStorage
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    console.log("fetching todo from localStorage"); // debug
    setTodos(savedTodos ? JSON.parse(savedTodos) : []);
  }, []);

  const addTodo = (todo: Todo) => {
    // check if data is empty
    if (todo.title.length === 0) {
      alert("Title is required");
      return;
    }

    const updatedTodos = [...todos, todo];
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const clearTodos = () => {
    localStorage.setItem("todos", "[]");
    setTodos([]);
  };

  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const filterTodos = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case TodoFilter.COMPLETED:
        console.log("completed");
        return todos.filter((todo) => todo.isComplete);
      case TodoFilter.INCOMPLETE:
        console.log("incomplete");
        return todos.filter((todo) => !todo.isComplete);
      case TodoFilter.ALL:
        console.log("all");
        return setTodos(todos);
      default:
        return todos;
    }
  };

  return (
    <main
      className={`mx-auto p-16 ${inter.className} bg-gradient-to-r from-pink-300 to-sky-300 text-gray-900 w-full max-h-screen`}
    >
      <h1 className="text-4xl text-center py-6">To-Do List</h1>
      <TodoNew addTodo={addTodo} todos={todos} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        clearTodos={clearTodos}
        toggleTodo={toggleTodo}
        filterTodos={filterTodos}
      />
    </main>
  );
}
