import { useState, useEffect } from "react";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const [id, setId] = useState(0);
  const [newNote, setNewNote] = useState("");

  const handleAdd = () => {
    setNotes((prev) => [
      ...prev,
      {
        id: id,
        note: newNote,
        isDone: false,
      },
    ]);
    setId((prev) => (prev += 1));
  };
  const handleDelete = (note) => {
    const filteredNotes = notes.filter((el) => el.id !== note.id);
    setNotes(filteredNotes);
  };

  const handleDone = (note) => {
    const newNotes = notes.map((el) => {
      if (el.id === note.id) {
        el.isDone = !el.isDone;
      }
      return el;
    });
    setNotes(newNotes);
  };
  return (
    <div>
      <input
        type="text"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAdd();
          }
        }}
      />
      <button onClick={handleAdd}>Add</button>
      {notes.map((note) => (
        <div key={note.id} style={{ display: "flex" }}>
          <h1
            style={{
              textDecoration: note.isDone ? "line-through" : "none",
              color: note.isDone ? "grey" : "black",
            }}
          >
            {note.note}
          </h1>
          <button onClick={() => handleDone(note)}>Done</button>
          <button onClick={() => handleDelete(note)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Notes;
