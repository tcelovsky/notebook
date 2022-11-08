import "./App.css";
import { db } from "./firebase.js";
import firebase from "firebase/app";
import Navbar from "./components/Navbar/Navbar.js";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Navbar />
    </div>
  );
}

export default App;
