import "./App.css";
import Dictionary from "./Dictionary";
import Elf from "./elfreading.png";
import Turtle from "./turtlereading.png";

function App() {
  return (
    <div className="App">
      <header className="title">
        <img
          src={Turtle}
          alt="owl rading the book by Luna Smith"
          className="book"
        />
        <span className="ictionary">ictionary</span>
      </header>
      <main>
        <Dictionary initialKeyword="mythology" />
      </main>
      <img src={Elf} alt="elf rading the book by Luna Smith" className="elf" />
      <footer className="text-center">
        Coded by{" "}
        <a
          href="https://preeminent-seahorse-84c5ef.netlify.app/"
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
