import { useReducer, useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";

const noteReducer = (notes, { type, payload }) => {
  switch (type) {
    case "Add":
      return [...notes, payload];
    case "Delete":
      return notes.filter((note) => note.id !== payload);
    case "Completed": {
      return notes.map((note) =>
        note.id === payload ? { ...note, completed: !note.completed } : note
      );
    }
    default:
      throw new Error("Unknown Error" + type);
  }
};

function App() {
  // let [notes, setNotes] = useState([]);
  const [notes, dispatch] = useReducer(noteReducer, []);

  let [sortBy, setSortBy] = useState("latest");

  const handleAddNote = (newNote) => {
    dispatch({ type: "Add", payload: newNote });
    // setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleDeleteNote = (id) => {
    //Approach one
    // const filteredNote = notes.filter((note) => note.id !== id);
    // setNotes(filteredNote);

    //Approach Two
    // setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    dispatch({ type: "Delete", payload: id });
  };

  const handleCompleteNote = (e) => {
    const noteId = Number(e.target.value);
    // const newNotes = notes.map((note) => note.id === noteId ? {...note, completed: !note.completed} :  note)
    // setNotes(newNotes);

    // setNotes((prevNotes) =>
    //   prevNotes.map((note) =>
    //     note.id === noteId ? { ...note, completed: !note.completed } : note
    //   )
    // );
    dispatch({ type: "Completed", payload: noteId });
  };

  return (
    <>
      <div className="container">
        <NoteHeader
          notes={notes}
          sortBy={sortBy}
          onSort={(e) => setSortBy(e.target.value)}
        />
        <div className="note-app">
          <AddNewNote onAddNote={handleAddNote} />
          <div className="note-container">
            <NoteStatus notes={notes} />
            <NoteList
              notes={notes}
              sortBy={sortBy}
              onDelete={handleDeleteNote}
              onComplete={handleCompleteNote}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
