# WeatherApp

## Project introduction and proposal

**Project Goals**

This project aims to develop an internal weather application for company employees. It will provide accurate and timely weather information for various locations, enhancing employee operational efficiency and reducing third party dependencies. Furthermore, this project will foster a culture of innovation and learning within the development team to evaluate current processes and assess areas improvements. 

**API Selection and Development Approach**

The app will initially utilise the open-meteo.com weather API and geocoding API due to its free access. However, the project team should conduct a thorough evaluation of all API options in the long term. This evaluation should consider factors such as cost, data accuracy, feature set, and API limits to determine the most suitable solution for the project budget and requirements.

**Agile Development Methodology**

As I aim to have an iterative approach to adding features to the app, I will be using an agile development methodology. This approach allows for continuous improvement and adaptation based on user feedback and evolving needs. I used the Scrum framework, working in sprints to develop this app which was …. 

## Project requirement

1. User Interface
- [ ] Search bar for user to input location by city/town
- [ ] Clear temperature display 
- [ ] Button to switch between celsius and fahrenheit 
- [ ] Date, time and selected location displayed 
- [ ] 3/4 hours of hourly temperature forecast 

2. Data
- [ ] Live temperature data through API 
- [ ] Live location options through API

3. Error handling
- [ ] If connection to API isn’t working, display error message
- [ ] If invalid city name, display error message 

4. Validation
- [ ] Ensure valid city names have been input in search bar

**MoSCoW Prioritisation**

Having outlined the requirements above, I prioritised them using the MoSCoW method. This well-established agile framework categorises requirements into four levels:
* Must Have: Essential for the project's success.
* Should Have: Highly desirable and increase the project's value.
* Could Have: Enhance the project but are not critical.
* Won't Have: Not included in the current scope but may be considered in future iterations.

| Must Have | Should Have | Could Have | Won't Have |
|---|---|---|---|
| User input box | Location validation | Error message displayed for Network error and invalid city | Other weather info |
| API for locations and temperature | Icon display for weather  |  | Weather alerts  |
| Location, temp displayed |  |  | Mobile app development |
| 3/4 hour forecast | | | Visualisations (Charts and graphs) | 

## Agile Story Cards
User stories are concise descriptions of features, told from the user's perspective. By focusing on "who," "what," and "why," user stories clearly communicate what features are of high priority. They help those involved to best understand user needs and goals, leading to the development of the right features in the right way. Below, I have written 4 stories which establish a clear roadmap for development, ensuring the final product meets user expectations.

### ***User Story 1: View Current Temperature***

**As a** company employee,

**I want to** be able to easily view the current temperature,

**So that** I can plan my workday accordingly (e.g., dress appropriately, be prepared for outdoor tasks, decide if I need to bring a jacket).

**Acceptance criteria:** 
- [ ] The app shall display the current temperature for the default location (London) on initial load.
- [ ] The app should have pictures that also depict the weather. 
- [ ] App shall Display the current location (the default, when initially opened) , date and time. 
- [ ] The temperature should be displayed in the default unit Celsius, with a user-friendly mechanism (e.g., a toggle button, a dropdown menu) to switch between Celsius and Fahrenheit.

### ***User Story 2: Search and View Weather for Different Locations***

**As a** company employee,

**I want to** be able to search for and view weather information for different locations

**So that** I can see the weather of the cities I am travelling to.

**Acceptance criteria:** 
- [ ] The app shall include a search bar for entering location names (e.g., city, country).
- [ ] The search functionality should provide suggestions as the user types, aiding in location selection.
- [ ] Current temperature in the selected location.
- [ ] Current weather conditions (e.g., sunny, cloudy, rainy).
- [ ] The app should handle invalid location searches or API errors.

### ***User Story 3: Switch between temperature units - Celsius and Farenheit***

**As a** company employee,

**I want to** be able to switch between fahrenheit and celsius, 

**So that** I can view the temperature in my preferred units.

**Acceptance criteria:** 
- [ ] The app must initially display the current temperature in Celsius.
- [ ] A user-friendly mechanism (e.g., a toggle button, a dropdown menu) must be provided to switch between Celsius and Fahrenheit.
- [ ] When the unit is switched, the displayed temperature must be dynamically updated to the selected unit.
- [ ] The temperature conversion must be accurate (e.g., Celsius to Fahrenheit: (°C * 9/5) + 32).

### ***User Story 4: View Short-Term Weather Forecast***

**As a** company employee, 

**I want to** see the temperature and weather for the next 3 or 4 hours, 

**So that** I can plan for immediate weather changes that may impact my work.

**Acceptance criteria:** 
- [ ] Temperature readings for the next 3-4 hours at hourly intervals.
- [ ] Weather conditions for each hour (e.g., sunny, cloudy, rainy).
- [ ] The forecast data should be presented in a clear and concise manner.
- [ ] The app should handle any errors in retrieving the forecast data.
