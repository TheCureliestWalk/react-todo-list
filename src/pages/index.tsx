import { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import TodoNew from '@/components/TodoNew';
import TodoListBox from '@/components/TodoListBox';
import { Todo } from '@/types/Todo';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Fetch data from localStorage
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    console.log('fetching todo from localStorage'); // debug
    setTodos(savedTodos ? JSON.parse(savedTodos) : []);
  }, []);

  const addTodo = (todo: Todo) => {
    // check if data is empty
    if (todo.title.length === 0) {
      alert('Title is required');
      return;
    }

    const updatedTodos = [...todos, todo];
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const clearTodos = () => {
    localStorage.setItem('todos', '[]');
    setTodos([]);
  };

  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });

    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  return (
    <main
      className={`mx-auto p-16 ${inter.className} bg-gradient-to-r from-pink-300 to-sky-300 text-gray-900 w-full min-h-screen`}
    >
      <h1 className="text-4xl text-center py-6">To-Do List</h1>
      <TodoNew addTodo={addTodo} todos={todos} />
      <TodoListBox
        todos={todos}
        deleteTodo={deleteTodo}
        clearTodos={clearTodos}
        toggleTodo={toggleTodo}
      />
    </main>
  );
}
