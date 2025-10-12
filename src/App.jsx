import Clock from "./components/Clock";
import Weather from "./components/Weather";
import TodoList from "./components/TodoList";
import Quote from "./components/Quote";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      <ThemeToggle />
      <h1 className="text-4xl font-bold text-center py-6">
        Personal Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center px-6">
        <Clock />
        <Weather />
        <TodoList />
        <Quote />
      </div>
    </div>
  );
}

export default App;
