import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const MapModal = ({ isOpen, onClose, onLocationSelect }) => {
  const [markerPosition, setMarkerPosition] = useState(null);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyBpXkpGpBpPmSEI7WIgK5zjMt8osgJ-udY', // Replace with your API key
    libraries: ['places'], // Add 'places' library for Places API
  });

  const geocodeLatLng = (latLng) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: latLng }, (results, status) => {
      if (status === 'OK' && results[0]) {
        onLocationSelect(results[0].formatted_address); // Pass the place name
      } else {
        console.error('Geocoder failed due to:', status);
      }
    });
  };

  const handleMapClick = (event) => {
    const latLng = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setMarkerPosition(latLng);
    geocodeLatLng(latLng); // Fetch the place name
  };

  return (
    isOpen && isLoaded && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
          <GoogleMap
            mapContainerClassName="w-full h-96"
            center={{ lat: -34.397, lng: 150.644 }}
            zoom={10}
            onClick={handleMapClick}
          >
            {markerPosition && <Marker position={markerPosition} />}
          </GoogleMap>
          <div className="flex justify-end p-4">
            <button
              onClick={onClose}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default MapModal;