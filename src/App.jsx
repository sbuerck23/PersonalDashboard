import Clock from "./components/Clock";
import Weather from "./components/Weather";
import TodoList from "./components/TodoList";
import Quote from "./components/Quote";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div
      className="h-screen 
                    flex flex-col items-center justify-center
                    bg-gray-100 dark:bg-gray-900
                    text-gray-900 dark:text-white 
                    transition-colors duration-500 p-6"
    >
      <ThemeToggle />
      <h1 className="text-4xl font-bold mb-6">Personal Dashboard</h1>
      <Clock />

      <div className="w-full max-w-5xl flex flex-col md:flex-row items-start md:items-stretch gap-6">
        <div className="flex-1 space-y-6">
          <Weather />
          <Quote />
        </div>

        <div className="w-full md:w-96">
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
