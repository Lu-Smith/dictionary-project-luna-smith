import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="title">Dictionary</header>
      <main>
        <Dictionary />
      </main>
      <footer className="text-center">
        Coded by{" "}
        <a
          href="http://www.lunasmithart.com"
          alt="Luna Smith portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio"
        >
          Luna Smith
        </a>
      </footer>
    </div>
  );
}

export default App;
