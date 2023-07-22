import Topbar from "./components/topbar/topbar"
import Intro from "./components/intro/intro"
import Portfolio from "./components/portfolio/portfolio"
import Contact from "./components/contact/contact"
import "./app.scss"
import Menu from "./components/menu/menu"
import { useState } from "react"
function App() {
  const [menuopen,setmenuopen]= useState(false)
  return (
    <div className="app">
     <Topbar menuopen={menuopen} setmenuopen={setmenuopen}/>
     <Menu menuopen={menuopen} setmenuopen={setmenuopen}/>
     <div className="section">
      <Intro/>
      <Portfolio/>
      <Contact/>
     </div>
    </div>
  );
}

export default App;
