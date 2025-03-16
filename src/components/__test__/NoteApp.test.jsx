import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import NoteApp from "../NoteApp";
import { NotesProvider } from "../../context/NotesContext";

function addNote(notes) {
  const inputTitle = screen.getByPlaceholderText(/New Note/i);
  const inputDescription = screen.getByPlaceholderText(/Note description.../i);
  const button = screen.getByRole("button", { name: /Add New Note/i });
  notes.forEach((note) => {
    fireEvent.change(inputTitle, { target: { value: note.title } });
    fireEvent.change(inputDescription, { target: { value: note.description } });
    fireEvent.click(button);
  });
}

test("Note App #1: input should be  empty after submit ", () => {
  render(
    <NotesProvider>
      <NoteApp sortBy="latest" />
    </NotesProvider>
  );
  addNote([{ title: "Note one title", description: "Note one description" }]);
  const inputTitle = screen.getByPlaceholderText(/New Note/i);
  const inputDescription = screen.getByPlaceholderText(/Note description.../i);
  expect(inputTitle.value).toBe("");
  expect(inputDescription.value).toBe("");
});

test("Note App #2: Should add multiple notes ", () => {
  render(
    <NotesProvider>
      <NoteApp sortBy="latest" />
    </NotesProvider>
  );
  addNote([
    { title: "Note one title", description: "Note one description" },
    { title: "Note one title", description: "Note one description" },
    { title: "Note one title", description: "Note one description" },
    { title: "Note one title", description: "Note one description" },
  ]);
  const divElement = screen.getAllByTestId("note-item");
  expect(divElement.length).toBe(4);
});

test("Note App #3: Should not have active class in initial render ", () => {
  render(
    <NotesProvider>
      <NoteApp sortBy="latest" />
    </NotesProvider>
  );
  addNote([{ title: "Note one title", description: "Note one description" }]);
  const divElement = screen.getByTestId("note-item");
  expect(divElement).not.toHaveClass("completed");
});


test("Note App #4: Should have complete class in when clicked on complete", () => {
    render(
      <NotesProvider>
        <NoteApp sortBy="latest" />
      </NotesProvider>
    );
    addNote([
      {title: "Note one title", description : "Note one description"}
    ]);
    const checked = screen.getByRole("checkbox");
    fireEvent.click(checked);
    const divElement = screen.getByTestId("note-item");
    expect(divElement).toHaveClass("completed")

  });