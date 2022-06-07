import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="title">
        <span className="book">📖</span> Dictionary
      </header>
      <main>
        <Dictionary initialKeyword="mythology" />
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
        , open-source on{" "}
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
