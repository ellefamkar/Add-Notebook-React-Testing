import { useState } from "react";
import "./App.css";
import NoteHeader from "./components/NoteHeader";
import { NotesProvider } from "./context/NotesContext";
import NoteApp from "./components/NoteApp";

function App() {
  // let [notes, setNotes] = useState([]);
  let [sortBy, setSortBy] = useState("latest");

  // const handleAddNote = (newNote) => {
  //   dispatch({ type: "Add", payload: newNote });
  //   // setNotes((prevNotes) => [...prevNotes, newNote]);
  // };

  // const handleDeleteNote = (id) => {
  //   //Approach one
  //   // const filteredNote = notes.filter((note) => note.id !== id);
  //   // setNotes(filteredNote);

  //   //Approach Two
  //   // setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  //   dispatch({ type: "Delete", payload: id });
  // };

  // const handleCompleteNote = (e) => {
  //   const noteId = Number(e.target.value);
  //   // const newNotes = notes.map((note) => note.id === noteId ? {...note, completed: !note.completed} :  note)
  //   // setNotes(newNotes);

  //   // setNotes((prevNotes) =>
  //   //   prevNotes.map((note) =>
  //   //     note.id === noteId ? { ...note, completed: !note.completed } : note
  //   //   )
  //   // );
  //   dispatch({ type: "Completed", payload: noteId });
  // };

  return (
    <NotesProvider>
      <div className="container">
        <NoteHeader sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />
        <NoteApp sortBy={sortBy} />
      </div>
    </NotesProvider>
  );
}

export default App;
