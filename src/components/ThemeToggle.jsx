import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react"; // optional icons, install below

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-6 right-6 p-2 rounded-full bg-gray-700 dark:bg-gray-200 hover:scale-105 transition-transform"
    >
      {theme === "dark" ? (
        <Sun className="text-yellow-400" />
      ) : (
        <Moon className="text-gray-800" />
      )}
    </button>
  );
}

export default ThemeToggle;
