"use client";

import React, { useEffect, useState } from "react";

export default function Nasa() {
  const [nasaData, setNasaData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchNasaData() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=h4Kf953HHtDP77VVdvtJV7TisdZlWWmX9ZwkEpWg"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setLoading(false);
      setNasaData(data);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchNasaData();
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log("NASA Data:", nasaData);

  return (
    <div>
      <h1 className="text-6xl">THIS IS THE NASA PAGE</h1>
      <p className="text-4xl">
        This page is dedicated to NASA's space exploration.
      </p>
      <p className="text-2xl mt-4">
        Here you can find information about various NASA missions, images from
        space, and much more!
      </p>
      {nasaData && (
        <div className="mt-8">
          <h2 className="text-3xl">{nasaData.title}</h2>
          <img
            src={nasaData.url}
            alt={nasaData.title}
            className="w-full h-auto mt-4"
          />
          <p className="mt-4">{nasaData.explanation}</p>
        </div>
      )}
    </div>
  );
}
