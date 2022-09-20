import React, { useState } from "react";
import NoteList from "./notelist/NoteList.jsx";
import AddForm from "./addform/AddForm.jsx";
import TitleBox from "./titlebox/TitleBox.jsx";

function Crud(props) {
  const [state, setState] = useState({ notes: [] });
  const url = "http://localhost:7777/notes";

  async function updateNotes() {
    const request = await fetch(`${url}`);
    const response = await request.json();
    setState({ notes: response });
  }

  async function addNote(content) {
    await fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });
    this.updateNotes();
  }

  async function deleteNote(id) {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    updateNotes();
  }

  return (
    <div className="app">
      <TitleBox updateHandler={updateNotes} />
      <NoteList deleteHandler={deleteNote} notes={state.notes} />
      <AddForm handleAdd={addNote} />
    </div>
  );
}

export default Crud;
