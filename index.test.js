const { getWeatherData, getLocation, celsiusToFahrenheit,getWeatherDescription } = require('./index');

test('fetches current temperature and weather code', async () => {
    const latitude = 51.5085; 
    const longitude = -0.1257; 
  
    const weatherData = await getWeatherData(latitude, longitude); 
  
    expect(weatherData.temperature).toBeDefined(); 
    expect(weatherData.weatherCode).toBeDefined();  

  });

test('fetches latitude and longitude data', async () => {
    const location = "Berlin"; 
    const locationData = await getLocation(location); 
  
    expect(locationData.latitude).toBeDefined();
    expect(locationData.longitude).toBeDefined(); 
  });
  
test('celsius to fahrenheit', async () => {
    const celsius = 30; 
    const fahrenheit = celsiusToFahrenheit(celsius); 
    expect(fahrenheit).toBe(86); 
  });

test('getWeatherData throws an error for non-OK responses', async () => {
    const latitude = 51.505;
    const longitude = -0.09;
  
    // Mock the fetch function to return a failed response with status 404
    const mockFetch = jest.fn().mockResolvedValueOnce(new Response('Not Found', { status: 404 })); 
    global.fetch = mockFetch;
  
    await expect(getWeatherData(latitude, longitude)).rejects.toThrow('HTTP error! status: 404'); 
  
    expect(mockFetch).toHaveBeenCalledWith(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&timezone=auto`
    );
  });

test('getLocation throws an error for non-OK responses or missing location data', async () => {
    const location = 'London';
  
    // Scenario 1: Mock fetch with non-OK response (e.g., 404 Not Found)
    const mockFetch1 = jest.fn().mockResolvedValueOnce(new Response('Not Found', { status: 404 }));
    global.fetch = mockFetch1;
  
    await expect(getLocation(location)).rejects.toThrow('HTTP error! status: 404');
    expect(mockFetch1).toHaveBeenCalledWith(
      `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1&language=en&format=json`
    );
  
    // Scenario 2: Mock fetch with empty results (location not found)
    const mockFetch2 = jest.fn().mockResolvedValueOnce(new Response(JSON.stringify({ results: [] })));
    global.fetch = mockFetch2;
  
    await expect(getLocation(location)).rejects.toThrow(`Location "${location}" not found.`);
    expect(mockFetch2).toHaveBeenCalledWith(
      `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1&language=en&format=json`
    );
  });

test('celsiusToFahrenheit throws an error for non-numeric input', () => {
    expect(() => celsiusToFahrenheit("invalid")).toThrow('Input must be a number');
    expect(() => celsiusToFahrenheit(null)).toThrow('Input must be a number');
    expect(() => celsiusToFahrenheit(undefined)).toThrow('Input must be a number');
    expect(() => celsiusToFahrenheit(true)).toThrow('Input must be a number');
    expect(() => celsiusToFahrenheit({})).toThrow('Input must be a number');
  });
  
  test('should return "Clear sky" for code 0', () => {
    expect(getWeatherDescription(0)).toBe("Clear sky");
});

test('should return "Partly cloudy" for codes 1-3', () => {
    expect(getWeatherDescription(1)).toBe("Partly cloudy");
    expect(getWeatherDescription(2)).toBe("Partly cloudy");
    expect(getWeatherDescription(3)).toBe("Partly cloudy");
});

test('should return "Foggy" for codes 45 and 48', () => {
    expect(getWeatherDescription(45)).toBe("Foggy");
    expect(getWeatherDescription(48)).toBe("Foggy");
});

test('should return "Drizzle" for codes 51-55', () => {
    expect(getWeatherDescription(51)).toBe("Drizzle");
    expect(getWeatherDescription(53)).toBe("Drizzle");
    expect(getWeatherDescription(55)).toBe("Drizzle");
});

test('should return "Freezing drizzle" for codes 56-57', () => {
    expect(getWeatherDescription(56)).toBe("Freezing drizzle");
    expect(getWeatherDescription(57)).toBe("Freezing drizzle");
});

test('should return "Rain" for codes 61-65', () => {
    expect(getWeatherDescription(61)).toBe("Rain");
    expect(getWeatherDescription(63)).toBe("Rain");
    expect(getWeatherDescription(65)).toBe("Rain");
});

test('should return "Freezing rain" for codes 66-67', () => {
    expect(getWeatherDescription(66)).toBe("Freezing rain");
    expect(getWeatherDescription(67)).toBe("Freezing rain");
});

test('should return "Snow" for codes 71-75', () => {
    expect(getWeatherDescription(71)).toBe("Snow");
    expect(getWeatherDescription(73)).toBe("Snow");
    expect(getWeatherDescription(75)).toBe("Snow");
});

test('should return "Snow grains" for code 77', () => {
    expect(getWeatherDescription(77)).toBe("Snow grains");
});

test('should return "Rain showers" for codes 80-82', () => {
    expect(getWeatherDescription(80)).toBe("Rain showers");
    expect(getWeatherDescription(81)).toBe("Rain showers");
    expect(getWeatherDescription(82)).toBe("Rain showers");
});

test('should return "Snow showers" for codes 85-86', () => {
    expect(getWeatherDescription(85)).toBe("Snow showers");
    expect(getWeatherDescription(86)).toBe("Snow showers");
});

test('should return "Thunderstorm" for code 95', () => {
    expect(getWeatherDescription(95)).toBe("Thunderstorm");
});

test('should return "Thunderstorm with hail" for codes 96 and 99', () => {
    expect(getWeatherDescription(96)).toBe("Thunderstorm with hail");
    expect(getWeatherDescription(99)).toBe("Thunderstorm with hail");
});

test('should return "Unknown weather condition" for invalid codes', () => {
    expect(getWeatherDescription(-1)).toBe("Unknown weather condition");
    expect(getWeatherDescription(100)).toBe("Unknown weather condition");
    expect(getWeatherDescription(null)).toBe("Unknown weather condition");
    expect(getWeatherDescription(undefined)).toBe("Unknown weather condition");
});