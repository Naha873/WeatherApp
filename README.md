# WeatherApp

[![Node.js CI](https://github.com/Naha873/WeatherApp/actions/workflows/node.js.yml/badge.svg)](https://github.com/Naha873/WeatherApp/actions/workflows/node.js.yml)
[![codecov](https://codecov.io/github/Naha873/WeatherApp/graph/badge.svg?token=O4C01XHHYJ)](https://codecov.io/github/Naha873/WeatherApp)

## Project introduction and proposal

**Project Goals**

This project aims to develop an internal weather application for company employees. It will provide accurate and timely weather information for various locations, enhancing employee operational efficiency and reducing third party dependencies. Furthermore, this project will foster a culture of innovation and learning within the development team to evaluate current processes and assess areas improvements. 

**API Selection and Development Approach**

The app will initially utilise the open-meteo.com weather API and geocoding API due to its free access. However, the project team should conduct a thorough evaluation of all API options in the long term. This evaluation should consider factors such as cost, data accuracy, feature set, and API limits to determine the most suitable solution for the project budget and requirements.

**High level overview of project**

![Image 19-01-2025 at 19 16](https://github.com/user-attachments/assets/01918fee-248b-4be3-ab36-7c9eac6efb34)

## Project requirement

1. User Interface
- Search bar for user to input location by city/town
- Clear temperature display 
- Button to switch between celsius and fahrenheit 
- Date, time and selected location displayed 
- 3/4 hours of hourly temperature forecast 

2. Data
- Live temperature data through API 
- Live location options through API

3. Error handling
- If connection to API isn’t working, display error message
- If invalid city name, display error message 

4. Validation
- Ensure valid city names have been input in search bar

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

## **Risk Management**
To ensure the product's success, it's important to identify and mitigate potential risks that could hinder the development of the weather app. Therefore, I've compiled a risk matrix. It evaluates each risk, considering its likelihood, its potential impact on the project, its overall risk level, and outlines a mitigation strategy.

Risk | Likelihood | Impact | Risk Level | Mitigation |
|---|---|---|---|---|
API is down |Low | High | Critical | Have a backup API or source |
Delay in project time due to additional feature demands | Medium | Medium | Medium | Ensure that you’re sticking to MoSCoW and User story cards, sticking to core functionalities |
Delay in project due to error and bugs | High | Medium | Medium | Use TTD and testing to mitigate this occurring | 

## Project Management 

### **Agile Development Methodology**
As I aim to have an iterative approach to adding features to the app, I will be using an agile development methodology. This approach allows for continuous improvement and adaptation based on user feedback and evolving needs. I will use the Scrum framework and work in sprints. [UPDATE WHEN COMPLETE] 

### **Project management Tool - GitHub Projects**

![Image 20-01-2025 at 11 55](https://github.com/user-attachments/assets/aa1f1554-cbc4-41f0-80c5-5027e1465ede)

To effectively manage the project, I used a Kanban methodology using GitHub Projects. This visual workflow, with columns for 'Backlog,' 'Ready,' 'In Progress,' 'In Review,' and 'Done,' provided a dynamic overview of the project's status. By moving tasks across these columns, I could maintain a constant awareness of the project's workload, track progress, and ensure timely completion. I also linked these tasks to corresponding Git branches which means that there was seamless integration and clear traceability between project management and the code development. 

### **Project Labels**

![Image 19-01-2025 at 16 45](https://github.com/user-attachments/assets/40952c95-24c7-4ebc-9591-4f72c709bff9)

To enhance clarity for future project contributors, I've implemented a labelling system for all tickets/issues. While some default GitHub labels are used, I've introduced custom labels for better readability.
- **Priority Labels**: Instead of relying on potentially confusing Kanban board conventions, I've implemented clear labels: "Low," "Medium," and "High." This provides unambiguous prioritisation guidance.
- **Time/Effort Labels**: To replace the less intuitive default GitHub labels (e.g., 's', 'xs'), I've introduced a 1-4 scale. '1' represents the least effort, while '4' signifies tasks requiring significant effort and potential breakdown into smaller sub-tasks.

This labelling system improves overall project transparency. By easily identifying each issue's type (e.g., feature, documentation, bug), priority level, and estimated effort, contributors can quickly understand and effectively manage their workload.

### **Ticket Template**

![Image 20-01-2025 at 12 08](https://github.com/user-attachments/assets/3ca29763-b448-4e9f-933d-f5172965239d)

To ensure consistency and clarity across all issues, I created ticket templates for features, bugs, and administrative tasks. These templates incorporate essential fields such as title, description, steps to reproduce (for bugs), acceptance criteria, and priority. This standardised format enhances issue clarity, enabling developers, testers, and stakeholders to quickly grasp the issue's context and requirements.

## Product Design 

### **Wireframes**

[**Link to FIGMA**](https://www.figma.com/design/TxahAcFE0fKvE83818Me3M/se_sum1_WeatherApp_design?node-id=21-205&t=QV6HiuyMMA8krCc4-1)

![Image 20-01-2025 at 11 36](https://github.com/user-attachments/assets/e71c282b-b6b9-45e7-bcf0-488c439cece5)

The initial stage of the project, following the gathering of requirements and user stories, involved designing the product. Utilising Figma, I adopted the role of a product designer and developed three functionally equivalent designs with distinct layouts. This approach enabled me to explore different visual presentations and information flows.
To determine the most effective design, user testing eg A/B testing would be ideal. However, due to ethical and security constraints within the context of this assignment, I conducted a simulated user testing process. I critically evaluated each design from the perspective of a target user, considering factors such as usability, accessibility, and overall user experience.
Based on this evaluation, I selected the third design. It demonstrated a well-balanced use of space, providing a clean and intuitive user interface while effectively conveying the necessary information.

## **Colour scheme**

![image](https://github.com/user-attachments/assets/379cde07-a346-43ff-afa9-b38ba375cdb4)

Source: https://www.bankofengland.co.uk/news/2022/march/new-visual-identity 

A crucial aspect of website design is ensuring accessibility, and this extends to the colour scheme. The World Wide Web Consortium (W3C) (https://www.w3.org/mission/accessibility/) provides essential guidance on this topic. Fortunately, my company adheres to these guidelines with a well-established colour scheme that I'll be incorporating into my design. Additionally, using this pre-defined scheme offers several advantages:
- Consistency: It aligns my design with the company's established brand identity.
- Efficiency: It saves time and resources compared to developing a new colour scheme from scratch.
- Accessibility Assurance: Since the scheme adheres to W3C guidelines, it inherently promotes accessibility in my design
