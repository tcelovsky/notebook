import React, { useState } from "react";
import "./AddNote.css";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
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
        ></textarea>
      </div>
      <div className="addnote-button">
        <button>add note</button>
      </div>
    </div>
  );
};

export default AddNote;
