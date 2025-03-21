import { useNotes, useNotesDispatch } from "../context/NotesContext";

function NoteList({ sortBy }) {
  const notes = useNotes();

  let sortedNotes = notes;

  if (sortBy === "earliest") {
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  }

  if (sortBy === "latest") {
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  }

  if (sortBy === "completed") {
    sortedNotes = [...notes].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );
  }

  return (
    <div className="note-list">
      {sortedNotes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem({ note }) {
  const dispatch = useNotesDispatch();

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <>
      <div className={`note-item ${note.completed ? "completed" : ""}`}
        data-testid="note-item"
      >
        <div className="note-item__header">
          <div>
            <p className="title">{note.title}</p>
            <p className="desc">{note.description}</p>
          </div>
          <div className="actions">
            <button data-testid="delete-note"
              onClick={() => dispatch({ type: "Delete", payload: note.id })}
            >
              ❌
            </button>
            <input
              type="checkbox"
              name={note.title}
              id={note.id}
              value={note.id}
              checked={note.completed}
              onChange={(e) => {
                const noteId = Number(e.target.value);
                dispatch({ type: "Completed", payload: noteId });
              }}
            />
          </div>
        </div>
        <div className="note-item__footer">
          {new Date(note.createdAt).toLocaleDateString("en-US", options)}
        </div>
      </div>
    </>
  );
}
