import "./app.scss";
import { useState } from "react";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import MainContent from "./components/maincontent/maincontent";
import { BrowserRouter, Link, Route } from "react-router-dom";
import MainCharacter from "./components/maincharacter/maincharacter";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <div className="sections">
          <Route path="/" exact component={MainContent} />
          <Route path="/series/:id" component={MainCharacter} />
          {/* <Route path="/series/:id" render={(routerProps)=>{console.log(routerProps)}}/> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
