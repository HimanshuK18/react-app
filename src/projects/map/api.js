// api/notes.js

// Function to fetch notes from an API or database
export const getNotes = async () => {
    try {
      // Perform API call or database query to fetch notes
      //const response = await fetch('/api/notes');
      //const data = await response.json();
      return [];
    } catch (error) {
      console.error('Error fetching notes:', error);
      throw error;
    }
  };
  
  // Function to save a new note to the API or database
  export const saveNote = async (note) => {
    try {
      // Perform API call or database query to save note
      const response = await fetch('/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error saving note:', error);
      throw error;
    }
  };
  
  // Function to search for notes based on text or user name
  export const searchNotes = async (searchTerm) => {
    try {
      // Perform API call or database query to search notes
      const response = await fetch(`/api/notes?search=${searchTerm}`);
      const data = await response.json();
      return data.notes;
    } catch (error) {
      console.error('Error searching notes:', error);
      throw error;
    }
  };
  