// components/NoteForm.js

import React, { useState } from 'react';

const NoteForm = ( currentLocation, handleSaveNote) => {
  const [noteText, setNoteText] = useState('');
  const [userName, setUserName] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'noteText') {
      setNoteText(value);
    } else if (name === 'userName') {
      setUserName(value);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!noteText || !userName || !currentLocation) {
      alert('Please fill in all the fields');
      return;
    }
    const newNote = {
      text: noteText,
      userName,
      lat: currentLocation.lat,
      lng: currentLocation.lng,
    };
    handleSaveNote(newNote);
    setNoteText('');
    setUserName('');
  };

  return (
    <div>
      <h2>Add a Note</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="noteText">Note:</label>
          <input
            type="text"
            id="noteText"
            name="noteText"
            value={noteText}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={userName}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Save Note</button>
      </form>
    </div>
  );
};

export default NoteForm;
