"use client";

import React, { useEffect, useState } from 'react'

export default function RoverPhotos() {

    const [nasaData, setNasaData] = useState(null);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchRoverPhotos() {
    setLoading(true);
    try {
 const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=h4Kf953HHtDP77VVdvtJV7TisdZlWWmX9ZwkEpWg'
 );
 if(!response.ok) {
        throw new Error('Network response was not ok');
 }
  const data = await response.json();
  setLoading(false);
  setNasaData(data);
  console.log('Rover Photos:', data);
  

    } catch (error) {
        setError(error)
        setLoading(false);
    }
}

useEffect(()=>{
    fetchRoverPhotos();
},[]);

console.log('NASA Data:', nasaData);

  return (
    <div>
      <h1>NASA Rover Photos</h1>
      <button onClick={fetchRoverPhotos}>Fetch Rover Photos</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {nasaData && (
        <div>
          <h2>Photos from Mars Rover Curiosity</h2>
          <ul>
            {nasaData.photos.map(photo => (
              <li key={photo.id}>
                <img src={photo.img_src} alt={`Mars Rover Photo ${photo.id}`} />
                <p>Taken by: {photo.rover.name} on {photo.earth_date}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
