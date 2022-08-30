import "./header.scss";

function Header({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="/" className="logo">
            Meet the Characters
          </a>
          <div className="itemContainer">
            <div className="icon" />
            <span></span>
          </div>
          <div className="itemContainer">
            <div className="icon" />
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line2"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
