async function getWeatherData(latitude, longitude) {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&timezone=auto`
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      return data.current.temperature_2m; // Only return current temperature
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  }
  
 module.exports = {getWeatherData}; // Export the function directly
  