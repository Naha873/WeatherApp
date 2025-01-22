const { getWeatherData, getLocation, celsiusToFahrenheit } = require('./index');

test('fetches current temperature and weather code', async () => {
    const latitude = 51.5085; // Example latitude
    const longitude = -0.1257; // Example longitude
  
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
  