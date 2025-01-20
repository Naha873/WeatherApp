async function getWeatherData(latitude, longitude) {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&current=temperature_2m,weather_code&timezone=auto`
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
  
  async function getDailyWeatherData(latitude, longitude) {
    try {
      const response = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&daily=weather_code,temperature_2m_max&timezone=auto'
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      // Return an object with both properties
      return {
        weatherCode: data.daily.weather_code.slice(1,4),
        temperatureMax: data.daily.temperature_2m_max.slice(1,4), // Adjust property name if needed
      };
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  }

 module.exports = {getWeatherData, getDailyWeatherData}; // Export the function directly
  
