async function getWeatherData(latitude, longitude) {
    try {
        // Fetch weather data from the Open-Meteo API using the provided coordinates
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&timezone=auto`
        );
        // Check if the API request was successful (status code 200)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); 
        }
        // Convert the response to JSON format
        const data = await response.json(); 
        // Return an object containing the retrieved temperature and weather code
        return {
            temperature: data.current.temperature_2m, 
            weatherCode: data.current.weather_code, 
        };
    } catch (error) {
        // Log and re-throw the error for proper handling.
        console.error('Error fetching weather data:', error); 
        throw error;
    }
}

async function getLocation(location) {
 // Try block to handle potential errors during location lookup
    try {
        // Fetch location data from the OpenMeteo Geocoding API
        const response = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1&language=en&format=json`
        );
        // Check if the response was successful (status code 200)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); 
        }
        // Convert the response to JSON format
        const data = await response.json();
        // Check if the location was not found in the response
        if (data.results.length === 0) {
            throw new Error(`Location "${location}" not found.`); 
        }
        // Extract latitude and longitude from the first search result
        const { latitude, longitude } = data.results[0];
        // Return an object containing the retrieved latitude and longitude
        return { latitude, longitude };
    } catch (error) {
        // Log and re-throw the error for proper handling.
        console.error('Error fetching location coordinates:', error);
        throw error;
    }
}

function celsiusToFahrenheit(celsius) {
    if (typeof celsius !== 'number') {
        // throws an error is celsius is not a number
        throw new Error('Input must be a number'); 
    }
    // conversion calculation
    return (celsius * 9/5) + 32; 
}

function getWeatherDescription(code) {
    /**
   * Returns a human-readable description of the weather based on the given weather code.
   * @param {number} code - The weather code, as defined by the Open-Meteo API.
   * @returns {string} - A description of the weather condition.
   */
    if (code === 0) return "Clear sky";
    if (code >= 1 && code <= 3) return "Partly cloudy";
    if (code === 45 || code === 48) return "Foggy";
    if (code >= 51 && code <= 55) return "Drizzle";
    if (code === 56 || code === 57) return "Freezing drizzle";
    if (code >= 61 && code <= 65) return "Rain";
    if (code === 66 || code === 67) return "Freezing rain";
    if (code >= 71 && code <= 75) return "Snow";
    if (code === 77) return "Snow grains";
    if (code >= 80 && code <= 82) return "Rain showers";
    if (code === 85 || code === 86) return "Snow showers";
    if (code === 95) return "Thunderstorm";
    if (code === 96 || code === 99) return "Thunderstorm with hail";
    return "Unknown weather condition";
}

 module.exports = {getWeatherData, getLocation, celsiusToFahrenheit, getWeatherDescription}; // Export the function directly
