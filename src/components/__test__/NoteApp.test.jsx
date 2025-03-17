// import { fireEvent, render, screen } from "@testing-library/react";
import { fireEvent, render, screen } from "../../test-utils";
import { expect, test } from "vitest";
import NoteApp from "../NoteApp";

// function baraye inke modam code ro nanevisim ---
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

//Check "input" is "empty" after submit ------
test("Note App #1: input should be  empty after submit ", () => {
  render(<NoteApp sortBy="latest" />);
  addNote([{ title: "Note one title", description: "Note one description" }]);

  const inputTitle = screen.getByPlaceholderText(/New Note/i);
  const inputDescription = screen.getByPlaceholderText(/Note description.../i);

  expect(inputTitle.value).toBe("");
  expect(inputDescription.value).toBe("");
});


// Check it adds multiple Notes - integration test ----------
test("Note App #2: Should add multiple notes ", () => {
  render(<NoteApp sortBy="latest" />);
  addNote([
    { title: "Note one title", description: "Note one description" },
    { title: "Note one title", description: "Note one description" },
    { title: "Note one title", description: "Note one description" },
    { title: "Note one title", description: "Note one description" },
  ]);

  //element e sakhte shode ro check mikonim 
  const divElement = screen.getAllByTestId("note-item");
  expect(divElement.length).toBe(4);
});


// Should not have completed class in first initialization --------
test("Note App #3: Should not have active class in initial render ", () => {
  render(<NoteApp sortBy="latest" />);
  addNote([{ title: "Note one title", description: "Note one description" }]);

  const initialDiv = screen.getByTestId("note-item");
  expect(initialDiv).not.toHaveClass("completed");
});



// Should have complete class when clicked on checkbox
test("Note App #4: Should have complete class in when clicked on complete", () => {
  render(<NoteApp sortBy="latest" />);
  addNote([{ title: "Note one title", description: "Note one description" }]);

  const checked = screen.getByRole("checkbox");
  fireEvent.click(checked);

  const divElement = screen.getByTestId("note-item");
  expect(divElement).toHaveClass("completed");
});
