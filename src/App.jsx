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
      <Weather />
      <Quote />
      <TodoList />
    </div>
  );
}

export default App;
