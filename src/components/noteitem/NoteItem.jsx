import React from "react";

export default function NoteItem(props) {
  const { note, deleteHandler } = props;

  const clickHandler = () => {
    deleteHandler(note.id);
  };

  return (
    <li className="list__item item">
      <button onClick={clickHandler} className="item__btn">
        X
      </button>
      <div className="item__content">{note.content}</div>
    </li>
  );
}
