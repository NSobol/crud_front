import React from "react";
import NoteItem from "../noteitem/NoteItem.jsx";

export default function NotesList(props) {
  const { notes, deleteHandler } = props;

  return (
    <ul className="app__notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} deleteHandler={deleteHandler} />
      ))}
    </ul>
  );
}
