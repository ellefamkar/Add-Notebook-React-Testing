import { useState } from "react";

function AddNewNote({ onAddNote }) {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) return null;

    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    onAddNote(newNote);
    setTitle("");
    setDescription("");

    console.log(newNote);
  };

  return (
    <>
      <div className="add-new-note">
        <h2>Add New Note</h2>
        <form className="note-form" onSubmit={handleSubmit}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="text-field"
            placeholder="New note"
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            className="text-field"
            placeholder="Note description..."
          />
          <button type="submit" className="btn btn--primary">
            Add New Note
          </button>
        </form>
      </div>
    </>
  );
}

export default AddNewNote;
