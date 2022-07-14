import "./app.scss";
import { useState } from "react";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import MainContent from "./components/maincontent/maincontent";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import MainCharacter from "./components/maincharacter/maincharacter";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

          <div className="sections">
            <Route path="/" exact component={MainContent} />
            <Route path="/series/:id" component={MainCharacter} />
          </div>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
