import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';


// Custom marker component for displaying notes on the map
const Marker = ({ text }) => (
  <div style={{ color: 'white', background: 'blue', padding: '8px', borderRadius: '50%' }}>
    {text}
  </div>
);

const Map = () => {
  const firstNote =  {id:0 , lat:-37.8136 , lng:144.9631, text: "First", user: "Himanshu"};
  const [notes, setNotes] = useState([firstNote]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentLocation, setCurrentLocation] = useState({ lat: -37.8136, lng: 144.9631});

  // Fetch notes from API (replace with your backend API endpoint)
  useEffect(() => {
    fetch('/api/notes')
      .then(response => response.json())
      .then(data => setNotes(data))
      .catch(error => console.error(error));
  }, []);

  // Save a note at current location
  const saveNote = () => {
    // Replace with your own logic for saving notes to backend API
    const newNote = { lat: currentLocation.lat, lng: currentLocation.lng, text: 'Note text', user: 'Username' };
    setNotes(prevNotes => [...prevNotes, newNote]);
  };

  // Search for notes based on contained text or user-name
  const filteredNotes = notes.filter(note =>
    note.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCgV456R6PGFuq28XFrbCnzU0r7vR54ANU' }}
        defaultCenter={currentLocation}
        defaultZoom={12}
        onClick={( lat, lng ) => setCurrentLocation(lat, lng)}
      >
        {/* Render markers for saved notes on the map */}
        {filteredNotes.map(note => (
          <Marker
            key={note.id}
            lat={note.lat}
            lng={note.lng}
            text={note.text}
          />
        ))}
      </GoogleMapReact>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search notes by text or user-name"
        />
        <button onClick={saveNote}>Save Note</button>
      </div>
    </div>
  );
};

export default Map;
