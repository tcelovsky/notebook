import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "./AddNote.css";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const addNote = () => {
    if (title !== "" && text !== "") {
      firebase.database().ref("notebook").push({
        title: title,
        text: text,
      });
    }
  };

  return (
    <div className="addnote">
      <h1>add a new note</h1>
      <div className="form-group">
        <input
          type="text"
          className="addnote-header"
          name="addnote-header"
          placeholder="Note Title"
          value={title}
          onChange={(input) => handleTitleChange(input)}
        ></input>
      </div>
      <div className="form-group">
        <textarea
          name="addnote-description"
          className="addnote-description"
          placeholder="Note Text"
          value={text}
          onChange={(input) => handleTextChange(input)}
        ></textarea>
      </div>
      <div className="addnote-button">
        <button>onClick={() => addNote()} add note</button>
      </div>
    </div>
  );
};

export default AddNote;
