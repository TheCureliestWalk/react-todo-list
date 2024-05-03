import Image from "next/image";
import { Inter } from "next/font/google";
import NewTaskForm from "@/components/NewTaskForm";
import Tasks from "@/components/Tasks";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`mx-auto p-16 ${inter.className} bg-sky-100 text-gray-900`}>
      <h1 className="text-4xl text-center py-6">To-Do List</h1>
      <NewTaskForm />
      <Tasks />
    </main>
  );
}
