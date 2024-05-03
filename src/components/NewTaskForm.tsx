export default function NewTaskForm() {
    return (
        <div className="flex flex-col max-w-md mx-auto">

        <form className="flex flex-col">
          <div className="rounded border border-gray-300 shadow-lg">
          <input
            type="text"
            id="taskTitle"
            name="taskTitle"
            className="w-full p-2.5 bg-white/70 border-b-2 border-b-sky-200"
            placeholder="I want to..."
          />
          <textarea
            name="taskDescription"
            id="taskDescriptio"
            placeholder="a little detail here..."
            className="w-full p-2.5 bg-white/70 text-sm"
          ></textarea>
          </div>

          <button type="submit" className="w-full shadow-lg px-4 py-2.5 rounded border border-green-500 bg-green-500 hover:bg-green-700 duration-100 text-white">
            Add Task
          </button>
        </form>
    </div>
    )
}