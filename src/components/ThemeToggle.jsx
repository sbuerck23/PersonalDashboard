import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-6 right-6 p-2 rounded-full 
                 bg-gray-700 bg-opacity-70 dark:bg-gray-200 dark:bg-opacity-60 
                 hover:scale-105 transition-transform backdrop-blur-sm 
                 border border-gray-500 dark:border-gray-300"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Sun className="text-yellow-200" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Moon className="text-gray-800" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

export default ThemeToggle;
