// components/NoteList.js

import React from 'react';

const NoteList = ({ notes }) => {
  return (
    <div>
      <h2>Notes</h2>
      {notes.length > 0 ? (
        <ul>
          {notes.map((note, index) => (
            <li key={index}>
              <strong>User: </strong>
              {note.userName}
              <br />
              <strong>Location: </strong>
              {note.lat}, {note.lng}
              <br />
              <strong>Note: </strong>
              {note.text}
            </li>
          ))}
        </ul>
      ) : (
        <p>No notes found</p>
      )}
    </div>
  );
};

export default NoteList;
