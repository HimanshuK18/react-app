import React, { useRef, useEffect } from 'react';
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from 'react-google-maps';


const MapGoogle = withScriptjs(withGoogleMap(({ notes, onMarkerClick }) => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 37.7749, lng: -122.4194 }} // Set default center of the map
    >
      {/* Render markers for each note */}
      {notes.map((note) => (
        <Marker
          key={note.id}
          position={{ lat: note.lat, lng: note.lng }}
          onClick={() => onMarkerClick(note)}
        />
      ))}
    </GoogleMap>
  )));

const MapComponent = ({ currentLocation, notes, setNotes, setCurrentLocation,onMarkerClick }) => {
  const mapRef = useRef(null);

  // Initialize map on component mount
  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: currentLocation?.lat || 0, lng: currentLocation?.lng || 0 },
      zoom: 14,
    });

    // Add markers for notes on the map
    notes.forEach((note) => {
      const marker = new window.google.maps.Marker({
        position: { lat: note.lat, lng: note.lng },
        title: note.text,
      });
      marker.setMap(map);
    });

    // Add click event listener to the map to save current location
    map.addListener('click', (e) => {
      setCurrentLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    });

    return () => {
      map.setMap(null);
    };
  }, [currentLocation, notes, setCurrentLocation]);

  return <div ref={mapRef} style={{ height: '400px', width: '100%' }}>
<MapGoogle
        notes={notes}
        onMarkerClick={onMarkerClick}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAtzUZTPvgdqz6jqRIT468B7oFowdC3xX0&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />

  </div>;
};

export default MapComponent;