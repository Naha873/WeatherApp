async function getWeatherData(latitude, longitude) {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&timezone=auto`
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      // Return an object containing both temperature and weather code
      return {
        temperature: data.current.temperature_2m,
        weatherCode: data.current.weather_code,
      };
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  }

  async function getLocation(location) {
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1&language=en&format=json` 
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      if (data.results.length === 0) {
        throw new Error(`Location "${location}" not found.`);
      }
  
      const { latitude, longitude } = data.results[0]; 
      return { latitude, longitude }; 
  
    } catch (error) {
      console.error('Error fetching location coordinates:', error);
      throw error; 
    }
  }

  function celsiusToFahrenheit(celsius) {
    if (typeof celsius !== 'number') {
      throw new Error('Input must be a number'); 
    }
    return (celsius * 9/5) + 32;
  }
 module.exports = {getWeatherData, getLocation, celsiusToFahrenheit}; // Export the function directly
  