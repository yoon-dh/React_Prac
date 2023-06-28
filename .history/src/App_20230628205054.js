import "./App.css";

function Header() {
  return (
    <header>
      <h1>
        <a href="/">Header</a>
      </h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ol>
        <li>
          <a href="/read/1">html</a>
        </li>
        <li>
          <a href="/read/2">css</a>
        </li>
        <li>
          <a href="/read/3">js</a>
        </li>
      </ol>
    </nav>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <Header></Header>
      <Header></Header>

      <nav>
        <ol>
          <li>
            <a href="/read/1">html</a>
          </li>
          <li>
            <a href="/read/2">css</a>
          </li>
          <li>
            <a href="/read/3">js</a>
          </li>
        </ol>
      </nav>

      <article>
        <h2>Welcome</h2>
        Hello, WEB
      </article>
    </div>
  );
}

export default App;
