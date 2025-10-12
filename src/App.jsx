import Clock from "./components/Clock";
import Weather from "./components/Weather";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Personal Dashboard</h1>
      <Clock />
      <Weather />
      <TodoList />
    </div>
  );
}

export default App;
