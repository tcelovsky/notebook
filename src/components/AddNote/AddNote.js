import React from "react";
import "./AddNote.css";

const AddNote = () => {
  return (
    <div className="addnote">
      <h1>add a new note</h1>
      <div className="form-group">
        <input
          type="text"
          className="addnote-header"
          name="addnote-header"
          placeholder="Note Title"
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
