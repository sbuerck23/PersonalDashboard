import { useState, useEffect } from "react";

function Quote() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchQuote() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://api.quotable.io/random", {
        mode: "cors",
        headers: {
          Accept: "application/json",
        },
      });
      if (!response.ok)
        throw new Error(`Failed to fetch quote: ${response.status}`);
      const data = await response.json();
      setQuote(data);
    } catch (err) {
      setError("Failed to fetch");
    } finally {
      setLoading(false);
    }
  }

  // Fetch one quote when component loads
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center w-80 mt-4">
      <h2 className="text-2xl font-semibold mb-4">💬 Quote of the Day</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-400">{error}</p>}

      {quote && (
        <>
          <p className="italic text-lg mb-4">"{quote.content}"</p>
          <p className="text-gray-400 mb-4">- {quote.author}</p>
        </>
      )}

      <button
        onClick={fetchQuote}
        className="bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded-md"
      >
        New Quote
      </button>
    </div>
  );
}

export default Quote;
