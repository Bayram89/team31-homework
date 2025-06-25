import React, { use, useState } from 'react'

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
      
    </div>
  )
}
