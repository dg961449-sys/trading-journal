export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>📊 Trading Journal</h1>
      <p>Welcome Dipankar 🚀</p>

      <input placeholder="Pair" /><br /><br />
      <input placeholder="Entry Price" /><br /><br />
      <input placeholder="Exit Price" /><br /><br />

      <button>Add Trade</button>
    </main>
  );
}