import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup when component is removed
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center text-3xl font-mono mt-4">
      {time.toLocaleTimeString()}
    </div>
  );
}

export default Clock;
