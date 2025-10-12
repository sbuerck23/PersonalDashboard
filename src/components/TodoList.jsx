import { useState, useEffect } from "react";

function TodoList() {
  const [tasks, setTasks] = useState(() => {
    // Load saved tasks from localStorage (or empty array)
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [newTask, setNewTask] = useState("");

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask() {
    if (newTask.trim() === "") return;
    const newItem = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false,
    };
    setTasks([...tasks, newItem]);
    setNewTask("");
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center w-80 mt-6">
      <h2 className="text-2xl font-semibold mb-4">📝 To-Do List</h2>

      {/* Input */}
      <div className="flex justify-center gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="px-2 py-1 rounded-md text-black flex-grow"
        />
        <button
          onClick={addTask}
          className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded-md"
        >
          Add
        </button>
      </div>

      {/* Tasks */}
      <ul className="text-left">
        {tasks.length === 0 && (
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
            No tasks yet
          </p>
        )}
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center mb-2 
                 bg-gray-100 dark:bg-gray-700 
                 p-2 rounded-md 
                 shadow-sm transition-colors duration-300"
          >
            <span
              onClick={() => toggleTask(task.id)}
              className={`flex-grow cursor-pointer select-none transition-colors duration-300 ${
                task.completed
                  ? "line-through text-gray-400 dark:text-gray-500"
                  : "text-gray-900 dark:text-gray-100"
              }`}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-500 transition-colors"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
