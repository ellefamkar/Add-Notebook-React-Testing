import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
import { NotesProvider } from "./context/NotesContext";

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
        <div className="note-app">
          <AddNewNote />
          <div className="note-container">
            <NoteStatus />
            <NoteList sortBy={sortBy} />
          </div>
        </div>
      </div>
    </NotesProvider>
  );
}

export default App;
