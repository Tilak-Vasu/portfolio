import React, { useState, useEffect, type FormEvent } from 'react';
import './WeatherWidget.css'; // We will create this file next

// A more specific TypeScript interface for our new API response
interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    main: string;
    description: string;
  }[];
  wind: {
    speed: number; // This comes in meter/sec
  };
}

const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState<string>('Ahmedabad'); // The location we want to fetch
  const [userInput, setUserInput] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // IMPORTANT: Use environment variables for your API key for security
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  // This effect runs whenever the `location` state changes
  useEffect(() => {
    if (!location) return; // Don't fetch if location is empty

    setLoading(true);
    setError(null);
    setWeather(null);

    // This is the more reliable free-tier endpoint
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          if (response.status === 401) {
            throw new Error('API key is invalid or inactive.');
          }
          if (response.status === 404) {
            throw new Error(`Location "${location}" not found.`);
          }
          throw new Error('Could not fetch weather data.');
        }
        return response.json();
      })
      .then(data => {
        setWeather(data);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [location, apiKey]); // Re-run the effect if location or apiKey changes

  // Handle form submission to update the location
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (userInput.trim()) {
      setLocation(userInput.trim());
      setUserInput(''); // Clear the input field after submission
    }
  };

  // --- RENDER LOGIC ---
  const renderWeatherContent = () => {
    if (loading) {
      return <p className="widget-status-notice">Loading...</p>;
    }
    // Show the error with the highest priority
    if (error) {
      return <p className="widget-error-notice">Error: {error}</p>;
    }
    if (!weather) {
      return <p className="widget-status-notice">Enter a location to see the weather.</p>;
    }

    // Convert wind speed from m/s to km/h
    const windSpeedKmh = (weather.wind.speed * 3.6).toFixed(1);

    return (
      <>
        <h3>Weather in {weather.name}</h3>
        <div className="weather-main">
          <span className="temperature">{Math.round(weather.main.temp)}°C</span>
          <span className="description">{weather.weather[0].main}</span>
        </div>
        <div className="weather-details">
          <span>Humidity: {weather.main.humidity}%</span>
          <span>Wind: {windSpeedKmh} km/h</span>
        </div>
      </>
    );
  };

  return (
    <div className="card weather-widget">
      <form onSubmit={handleSubmit} className="location-form">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter city name..."
          className="location-input"
        />
        <button type="submit" className="location-button">Get Weather</button>
      </form>

      <div className="weather-content-area">
        {renderWeatherContent()}
      </div>
    </div>
  );
};

export default WeatherWidget;