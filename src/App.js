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
        </a>{" "}
        and open-sourced on{" "}
        <a
          href="https://github.com/Lu-Smith/dictionary-project-luna-smith"
          alt="Luna Smith GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
