import { createContext, useContext, useReducer } from "react";

const NotesContext = createContext(null);
const NotesDispatchContext = createContext(null);

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

export function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(noteReducer, []);

  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

export function useNotes() {
  return useContext(NotesContext);
}

export function useNotesDispatch() {
  return useContext(NotesDispatchContext);
}
