import { useNotes } from "../context/NotesContext";
import Message from "./Message";

function NoteStatus() {
  const notes = useNotes();

  const allNotes = notes.length;
  const completedNotes = notes.filter((n) => n.completed).length;
  const openNotes = allNotes - completedNotes;

  if (!allNotes)
    return (
      <Message>
        ℹ️ <span>There are no notes written.</span> <span>🤷‍♀️</span>
      </Message>
    );

  return (
    <ul className="note-status">
      <li>
        All <span>{allNotes}</span>
      </li>
      <li>
        Completed <span>{completedNotes}</span>
      </li>
      <li>
        Open <span>{openNotes}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
