 "use client";
import { useState } from "react";

export default function Home() {
  const [pair, setPair] = useState("");
  const [entry, setEntry] = useState("");
  const [exit, setExit] = useState("");
  const [trades, setTrades] = useState<any[]>([]);

  const addTrade = () => {
    const profit = Number(exit) - Number(entry);

    const newTrade = {
      pair,
      entry,
      exit,
      profit,
    };

    setTrades([...trades, newTrade]);

    // reset
    setPair("");
    setEntry("");
    setExit("");
  };

  return (
    <main style={{ padding: "20px" }}>
      <h1>📊 Trading Journal</h1>
      <p>Welcome Dipankar 🚀</p>

      <input
        placeholder="Pair"
        value={pair}
        onChange={(e) => setPair(e.target.value)}
      /><br /><br />

      <input
        placeholder="Entry Price"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      /><br /><br />

      <input
        placeholder="Exit Price"
        value={exit}
        onChange={(e) => setExit(e.target.value)}
      /><br /><br />

      <button onClick={addTrade}>Add Trade</button>

      <h2>Trades:</h2>
      {trades.map((t, i) => (
        <div key={i}>
          {t.pair} | Entry: {t.entry} | Exit: {t.exit} | Profit: {t.profit}
        </div>
      ))}
    </main>
  );
}