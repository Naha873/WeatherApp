const { getWeatherData, getDailyWeatherData, getLocation, celsiusToFahrenheit } = require('./index');

test('fetches current temperature and weather code', async () => {
    const latitude = 51.5085; // Example latitude
    const longitude = -0.1257; // Example longitude
  
    const weatherData = await getWeatherData(latitude, longitude);
  
    expect(weatherData.temperature).toBeDefined(); 
    expect(weatherData.weatherCode).toBeDefined(); 

  });

  test('fetches forecast weather code and max temperature', async () => {
    const latitude = 51.5085; // Example latitude
    const longitude = -0.1257; // Example longitude
  
    const weatherData = await getDailyWeatherData(latitude, longitude);
  
    expect(weatherData.weatherCode).toBeDefined();
    expect(weatherData.temperatureMax).toBeDefined(); // Assuming the property name is temperatureMax
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
