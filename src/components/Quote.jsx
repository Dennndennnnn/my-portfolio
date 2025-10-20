import { useState } from "react";

export default function Quote() {
  const [quote, setQuote] = useState("Click the button to get today’s quote!");

  async function getQuote() {
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
    }
  }

  return (
    <section className="quote">
      <h2>💬 Quote of the Day</h2>
      <p>{quote}</p>
      <button onClick={getQuote}>Get Quote</button>
    </section>
  );
}