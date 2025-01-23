async function getWeatherData(latitude, longitude) {
    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&timezone=auto`
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
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

function getWeatherDescription(code) {
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
