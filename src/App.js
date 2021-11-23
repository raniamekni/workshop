import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main.js";
import MainNavbar from "./components/MainNavbar";

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Main />
    </div>
  );
}

export default App;
