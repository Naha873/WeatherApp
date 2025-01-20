const { getWeatherData } = require('./index');

test('fetches current temperature and 4-hour forecast data', async () => {
    const latitude = 51.5085; // Example latitude
    const longitude = -0.1257; // Example longitude
  
    const weatherData = await getWeatherData(latitude, longitude);
  
    expect(weatherData).toBe(5.7);})

