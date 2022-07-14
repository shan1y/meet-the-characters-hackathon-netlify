import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <h2 className="menu-title">Episode List</h2>
        <li onClick={() => setMenuOpen(false)}>
          <a
            target="_blank"
            href="https://www.imdb.com/title/tt4574334/episodes"
          >
            Stranger Things
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a
            target="_blank"
            href="https://www.imdb.com/title/tt0903747/episodes"
          >
            Breaking Bad
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a
            target="_blank"
            href="https://www.imdb.com/title/tt2442560/episodes"
          >
            Peaky Blinders
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a
            target="_blank"
            href="https://www.imdb.com/title/tt5071412/episodes"
          >
            Ozark
          </a>
        </li>
      </ul>
    </div>
  );
}
