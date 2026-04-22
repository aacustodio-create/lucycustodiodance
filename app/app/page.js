export default function Home() {
  const years = ["2026", "2025", "2024"];

  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #312e81, #7c3aed, #1d4ed8)",
      color: "white",
      fontFamily: "Arial, sans-serif",
      padding: "40px"
    }}>
      <header style={{ textAlign: "center", padding: "60px 20px" }}>
        <h1 style={{ fontSize: "56px", marginBottom: "10px" }}>
          Lucy Custodio Dance
        </h1>
        <p style={{ fontSize: "22px", opacity: 0.9 }}>
          A professional showcase celebrating artistry, passion, and unforgettable performances.
        </p>
      </header>

      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
        gap: "20px",
        maxWidth: "1100px",
        margin: "0 auto"
      }}>
        {years.map((year) => (
          <div key={year} style={{
            background: "rgba(255,255,255,0.12)",
            padding: "30px",
            borderRadius: "20px"
          }}>
            <h2 style={{ fontSize: "32px" }}>{year}</h2>
            <p>
              Featured routines, competition performances, solos, duets, and highlights.
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
