import { useEffect, useState } from "react";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("55987");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "c8c8368347b84266ab104829251210";

  async function fetchWeather() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
      );

      if (!response.ok) throw new Error("City not found");

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run once on mount

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center w-80 mt-6">
      <h2 className="text-2xl font-semibold mb-4">🌤 Weather</h2>

      <div className="flex justify-center gap-2 mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="px-2 py-1 rounded-md text-black"
        />
        <button
          onClick={fetchWeather}
          className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md"
        >
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-400">{error}</p>}

      {weather && (
        <div>
          <h3 className="text-xl font-bold">
            {weather.location.name}, {weather.location.region}
          </h3>
          <p className="text-lg">{weather.current.condition.text}</p>
          <p className="text-3xl font-bold mt-2">
            {Math.round(weather.current.temp_f)}°F
          </p>
        </div>
      )}
    </div>
  );
}

export default Weather;
