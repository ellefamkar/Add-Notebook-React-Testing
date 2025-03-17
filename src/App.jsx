import { useState } from "react";
import "./App.css";
import NoteHeader from "./components/NoteHeader";
import NoteApp from "./components/NoteApp";
import AppProviders from "./providers/AppProviders";

function App() {
  let [sortBy, setSortBy] = useState("latest");

  return (
    <AppProviders>
      <div className="container">
        <NoteHeader sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />
        <NoteApp sortBy={sortBy} />
      </div>
    </AppProviders>
  );
}

export default App;
