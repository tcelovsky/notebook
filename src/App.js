import "./App.css";
import { db } from "./firebase.js";
import firebase from "firebase/app";
import Navbar from "./components/Navbar/Navbar.js";
import AddNote from "./components/AddNote/AddNote.js";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Navbar />
      <div className="note-section">
        <AddNote />
      </div>
    </div>
  );
}

export default App;
