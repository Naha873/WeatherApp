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

/*
  describe('handleSwitchChange', () => {
    it('should attach an event listener', () => {
      const mockCheckbox = {
        addEventListener: jest.fn(), 
        checked: false, // Add checked property for better testing
      };
  
      document.querySelector = jest.fn().mockReturnValueOnce(mockCheckbox); 
      handleSwitchChange(); 
  
      expect(mockCheckbox.addEventListener).toHaveBeenCalledTimes(1); 
    });
  
    it('should update text to Fahrenheit when checked', () => {
      const mockCheckbox = {
        addEventListener: jest.fn(), 
        checked: true, 
      };
      const mockTemperatureUnit = { 
        textContent: 'Celsius', 
      };
  
      document.querySelector = jest.fn().mockReturnValueOnce(mockCheckbox); 
      document.getElementById = jest.fn().mockReturnValueOnce(mockTemperatureUnit); 
  
      handleSwitchChange(); 
  
      expect(mockTemperatureUnit.textContent).toBe('Fahrenheit'); 
    });
  
    it('should update text to Celsius when unchecked', () => {
      const mockCheckbox = {
        addEventListener: jest.fn(), 
        checked: false, 
      };
      const mockTemperatureUnit = { 
        textContent: 'Fahrenheit', 
      };
  
      document.querySelector = jest.fn().mockReturnValueOnce(mockCheckbox); 
      document.getElementById = jest.fn().mockReturnValueOnce(mockTemperatureUnit); 
  
      handleSwitchChange(); 
  
      expect(mockTemperatureUnit.textContent).toBe('Celsius'); 
    });
  });
  */