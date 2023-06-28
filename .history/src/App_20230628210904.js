import "./App.css";

function Header(props) {
  return (
    <header>
      <h1>
        <a href="/">{props.title}</a>
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

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {
  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "js", body: "js is ..." },
  ];

  return (
    <div>
      <Header title="REACT"></Header>

      <Nav topics={topics}></Nav>

      <Article title="Welcome" body="Hello,WEB"></Article>
    </div>
  );
}

export default App;
