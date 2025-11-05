import { useState } from "react";

export default function Quote() {
  const [quote, setQuote] = useState("Click the button to get today’s quote!");
  const [isLoading, setIsLoading] = useState(false); 
  const [isError, setIsError] = useState(false); 

  async function getQuote() {
    setIsError(false); 
    setIsLoading(true);
    setQuote("Loading...");
    try {
      const response = await fetch(
        "https://api.allorigins.win/raw?url=https://zenquotes.io/api/today"
      );
      const data = await response.json();
      const todayQuote = data[0];
      setQuote(`"${todayQuote.q}" — ${todayQuote.a}`);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("Failed to load quote. Try again!");
      setIsError(true); 
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className={`quote ${isError ? "error" : ""}`}>
      <h2>💬 Quote of the Day</h2>
      <p>{quote}</p>
      <button className="quote-button" onClick={getQuote} disabled={isLoading}>
        {isLoading ? "Loading..." : "Get Quote"}
      </button>
    </section>
  );
}
