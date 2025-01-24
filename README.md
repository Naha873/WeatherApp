# WeatherApp

[![Node.js CI](https://github.com/Naha873/WeatherApp/actions/workflows/node.js.yml/badge.svg)](https://github.com/Naha873/WeatherApp/actions/workflows/node.js.yml)
[![codecov](https://codecov.io/github/Naha873/WeatherApp/graph/badge.svg?token=O4C01XHHYJ)](https://codecov.io/github/Naha873/WeatherApp)

## About

[**Live app**](https://naha873.github.io/WeatherApp/)

Author: Hana Wainwright

Github Username: @Naha873

**Preview**
![Screenshot 2025-01-23 at 22 45 01](https://github.com/user-attachments/assets/324f4938-5969-4082-b25a-8a9c01db5a8f)

This weather app displays current temperature, date, and weather for a searched location, with Celsius/Fahrenheit units. 

# User Documentation

This project requires npm to execute the files, so ensure that it is installed.

### 1. Ensure node and npm are installed by running the following commands in your terminal:

```sh
node -v
```
```sh
npm -v
```
If they are not installed, follow the steps on [npm Docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

### 2. Afterwards, clone this repo:

```sh
git clone https://github.com/Naha873/WeatherApp.git
```
Now, you should have everything that you need to proceed! Navigate into the folder you just cloned to find our code.

## Running all tests

### 3. Before running any code below, make sure npm is installed.

```sh
npm install
```
### 4. To run unit tests, run the following command:

```sh
npm test
```
## Technical documentation

1. Technical stack
    - HTML
    - JEST
    - CSS
    - Javascript

2. Files used to run the app
    - index.js
    - Index.css
    - index.html

3. Files used in testing
    - index.test.js
    - index.js
    - package.json

4. User end links
    - Repo name: Weather app
    - Repo link: https://naha873.github.io/WeatherApp/
    - Weather data API link: https://open-meteo.com/en/docs#current=temperature_2m,weather_code&hourly=
    - Location data API link: https://open-meteo.com/en/docs/geocoding-api#name=london&count=100

## Project introduction and proposal

**Project Goals**

This project aims to develop an internal weather application for company employees. It will provide accurate and timely weather information for various locations, reducing third party dependencies. It will also foster a culture of innovation within the team to evaluate current processes and assess areas improvements. 

**API Selection and Development Approach**

The app will initially use the open-meteo.com’s weather and geocoding API due to its free access. However, the project team should conduct a thorough evaluation of all API options in the long term, considering factors such as cost, data accuracy, feature set, and API limits to determine the most suitable solution for the project budget and requirements.

**High level overview of project**

![Image 23-01-2025 at 17 39](https://github.com/user-attachments/assets/56837d46-4c8c-4b10-861b-04774f085f2f)

## Project requirement

1. User Interface
    - Search bar for user to input location 
    - Clear temperature display 
    - Button to switch between celsius and fahrenheit 
    - Display Date and select location
  
2. Data
    - Live temperature data through API 
    - Live location options through API

3. Error handling
    - If connection to API isn’t working, display error message
    - If invalid city name, display error message 

4. Validation
    - Ensure valid city names have been input in search bar

**MoSCoW Prioritisation**

Having outlined the requirements above, I prioritised them using the MoSCoW method. This agile framework categorises requirements into four levels:
* Must Have: Essential for the project's success.
* Should Have: Highly desirable and increase the project's value.
* Could Have: Enhance the project but are not critical.
* Won't Have: Not included in the current scope but may be considered in future iterations.

| Must Have | Should Have | Could Have | Won't Have |
|---|---|---|---|
| User input box | Location validation | Error message displayed for errors | Other weather info |
| locations and temperature API | Temperature metric conversion  | Forecasts| Weather alerts  |
| Location, temperature displayed |  |  | Mobile app development |
|  | | | Visualisations | 

## Agile Story Cards
User stories are concise descriptions of features, told from the user's perspective. By focusing on "who," "what," and "why," user stories clearly communicate what features are of high priority. They help those involved to best understand user needs and goals, leading to the development of the right features in the right way. Below, I’ve written 3 stories which establish a clear roadmap for development, ensuring the final product meets user expectations.

### ***User Story 1: View Current Temperature***

**As a** company employee,

**I want to** easily view the current temperature,

**So that** I can plan my workday accordingly (e.g. be prepared for outdoor tasks).

**Acceptance criteria:** 
- [ ] Display the current location and date. 
- [ ] The temperature should be displayed in the default unit Celsius, with a user-friendly mechanism to switch between Celsius and Fahrenheit.

### ***User Story 2: Search and View Weather for Different Locations***

**As a** company employee,

**I want to** search for and view weather information for different locations

**So that** I can see the weather of the cities I am travelling to.

**Acceptance criteria:** 
- [ ] Include a search bar for entering location names
- [ ] Current temperature in the selected location.
- [ ] Current weather conditions
- [ ] The app should handle invalid location searches or API errors.

### ***User Story 3: Switch between temperature units - Celsius and Farenheit***

**As a** company employee,

**I want to** switch between fahrenheit and celsius, 

**So that** I can view the temperature in my preferred units.

**Acceptance criteria:** 
- [ ] Initially display the current temperature in Celsius.
- [ ] A user-friendly mechanism must be provided to switch between Celsius and Fahrenheit.
- [ ] When the unit is switched, the displayed temperature must be dynamically updated to the selected unit.
- [ ] The temperature conversion must be accurate (Fahrenheit = (°C * 9/5) + 32).


## **Risk Management**
To ensure success, it's important to identify and mitigate potential risks that could hinder the development of the weather app. Therefore, I've compiled a risk matrix. It evaluates each risk, considering its likelihood, its potential impact on the project, its overall risk level, and outlines a mitigation strategy.

Risk | Likelihood | Impact | Risk Level | Mitigation |
|---|---|---|---|---|
API is down |Low | High | Critical | Have a backup API or source |
Delay in project time due to additional feature demands | Medium | Medium | Medium | Ensure that you’re sticking to MoSCoW and User story cards, sticking to core functionalities |
Delay in project due to error and bugs | High | Medium | Medium | Use TTD and testing to mitigate this early on | 

## Project Stakeholders 

| Role    | Responsibility | Notes |
| -------- | ------- | ------- |
| Project Manager  | Project oversight    | As this is a solo project, I’ll be project manager |
| Developer | Product development     | As this is a solo project, I’ll be developer   |
| Designer    | Product designer   | As this is a solo project, I’ll be designer  |
| Analyst    | Client representative   |  As this is a solo project, I’ll be the analyst|

## Project Management 

### **Agile Development Methodology**
I wanted an iterative approach to adding features to the app, so I used an agile development methodology.This approach allows for continuous improvement and adaptation based on my evolving understanding of the project. I used the Scrum framework and worked in sprints to maintain focus, break down the project into manageable chunks, and ensure consistent progress towards the final goal.

### **Project management Tool - GitHub Projects**

![Image 20-01-2025 at 11 55](https://github.com/user-attachments/assets/aa1f1554-cbc4-41f0-80c5-5027e1465ede)

To effectively manage the project, I used a Kanban methodology using GitHub Projects. This visual workflow, with columns for 'Backlog,' 'Ready,' 'In Progress,' 'In Review,' and 'Done,' provided a dynamic overview of the project's status. By moving tasks across these columns, I maintained a constant awareness of the project's workload, tracked progress, and ensured timely completion. I also linked these tasks to corresponding Git branches so that there was seamless integration and clear traceability between project management and the code development.

**Example issue with branch linked**
![Image 24-01-2025 at 11 58](https://github.com/user-attachments/assets/2129e200-01e8-4e24-96f4-11ef4e4befd4)

### **Project Labels**

![Image 19-01-2025 at 16 45](https://github.com/user-attachments/assets/40952c95-24c7-4ebc-9591-4f72c709bff9)

To enhance clarity for future project contributors, I've implemented a labelling system for all tickets/issues. While some default GitHub labels are used, I've introduced custom labels for better readability.
- **Priority Labels**: Instead of relying on potentially confusing Kanban board conventions, I've implemented clear labels: "Low," "Medium," and "High." This provides unambiguous prioritisation guidance.
- **Time/Effort Labels**: To replace the less intuitive default GitHub labels (e.g., 's', 'xs'), I've introduced a 1-4 scale. '1' represents the least effort, while '4' signifies tasks requiring significant effort and potential breakdown into smaller sub-tasks.

This labelling system improves overall project transparency. By easily identifying each issue's type, priority level, and estimated effort, contributors can quickly understand and effectively manage their workload.

### **Ticket Template**

![Image 20-01-2025 at 12 08](https://github.com/user-attachments/assets/3ca29763-b448-4e9f-933d-f5172965239d)

To ensure consistency and clarity across all issues, I created ticket templates for features, bugs, and administrative tasks. These templates incorporate essential fields such as title, description, steps to reproduce (for bugs), acceptance criteria, and priority. This standardised format enhances issue clarity, enabling developers, testers, and stakeholders to quickly grasp the issue's context and requirements.

## Product Design 

### **Wireframes**

[**Link to FIGMA**](https://www.figma.com/design/TxahAcFE0fKvE83818Me3M/se_sum1_WeatherApp_design?node-id=21-205&t=QV6HiuyMMA8krCc4-1)

![Image 23-01-2025 at 12 27](https://github.com/user-attachments/assets/8402801d-beb1-43f2-b4f4-c738dbba6b9d)


The initial stage of the project, following the gathering of requirements and user stories, involved designing the product. Utilising Figma, I adopted the role of product designer and developed three functionally equivalent designs with distinct layouts. This approach enabled me to explore different visual presentations and information flows.
To determine the most effective design, user testing eg A/B testing would be ideal. However, due to ethical and security constraints within the context of this assignment, I conducted a simulated user testing process. I critically evaluated each design from the perspective of a target user, considering factors such as usability, accessibility, and overall user experience.
Based on this evaluation, I selected the second design as it demonstrated a well-balanced use of space, providing a clean and intuitive user interface while effectively conveying the necessary information.

## **Colour scheme**

![image](https://github.com/user-attachments/assets/379cde07-a346-43ff-afa9-b38ba375cdb4)

Source: https://www.bankofengland.co.uk/news/2022/march/new-visual-identity 

A crucial aspect of website design is ensuring accessibility, and this extends to the colour scheme. The World Wide Web Consortium (W3C) (https://www.w3.org/mission/accessibility/) provides essential guidance on this topic. Fortunately, my company adheres to these guidelines with a well-established colour scheme that I'll be incorporating into my design. Additionally, using this pre-defined scheme offers several advantages:
- Consistency: It aligns my design with the company's established brand identity.
- Efficiency: It saves time and resources compared to developing a new colour scheme from scratch.
- Accessibility Assurance: Since the scheme adheres to W3C guidelines, it inherently promotes accessibility in my design

## Code Implementation

Step-by-Step guide on how i made the prototype. 

1. Project Setup:
    - Cloned the repository.
    - Installed Node.js and configured the environment.
    - Created the files: index.js, index.test.js, index.html, index.css.

2. API Integration:
    - Wrote initial failing tests for API call functions in index.test.js.
    - Implemented API call functions and ensured all tests passed.
    - Added robust error handling to API calls and tested these scenarios.

3. Temperature Conversion:
    - Wrote failing tests for temperature metric conversion functions in index.test.js.
    - Implemented functions to convert temperature metrics accurately.

4. Weather Description Mapping:
    - Wrote failing tests for this mapping function and ensured its correctness.
    - Implemented a function to map weather codes to meaningful descriptions.

5. Frontend Development:
    - Designed and implemented the CSS and HTML structure for the UI.
    - Connected the JavaScript functions to the HTML elements using DOM manipulation.

6. Testing and Refinement:
    - Ran all tests and reviewed test coverage.

7. Deployment:
    - Deployed the project to GitHub Pages for public access.

## Coding Practice

To maintain code readability and maintainability, I adhered to consistent camelCase naming conventions throughout the JavaScript files. Code is correctly indented and includes clear concise comments in plain English to explain the purpose of each line or block of code.

![Image 23-01-2025 at 22 21](https://github.com/user-attachments/assets/e3644d3d-34cc-48fb-a3e4-c6d598720b2d)

## Test driven development (TDD) - Unit testing 

I used Test-Driven Development (TDD) to create Jest unit tests for the logic functions employed within the project and are documented within the 'index.test.js' file. Jest is a JavaScript testing framework that is simple to set up and is renowned for its speed and efficiency. Unit tests helped to ensure that we identified any potential bugs and errors in the code development very early on and ultimately led to a more robust and reliable final product. Moreover, this approach forced me to focus on key requirements and implementing accurate logic and therefore, minimised deviations from the specified user needs.

**Example test**
![Image 23-01-2025 at 21 43](https://github.com/user-attachments/assets/58f9523f-926b-46ac-87ac-75d7fd66b419)

**All test passed with 100% coverage score**
![Image 23-01-2025 at 17 46](https://github.com/user-attachments/assets/c891cb68-5045-4a31-bb49-1bc4fc198b08)

## Continuous Integration and Development (CI/CD)

To ensure CI and CD , I implemented GitHub Actions to automatically deploy and execute the tests whenever code is pushed to the repository. The repository owner could quickly identify and address any potential issues or breaking changes before they impact the production environment. To do this, I created a workflow which can be found in .githubs/workflow folder.

## Performance and Accessibility testing

To evaluate the performance of the weather app, I utilised a free Chrome-based service called Lighthouse to conduct tests across performance, accessibility, best practices, and SEO (Search Engine Optimisation). As demonstrated by the results, with scores of 100, 90, 100, and 90 respectively, the app exhibits strong performance across all key metrics. This implies that the app is highly optimised for user experience, accessible to a wide range of users, adheres to industry best practices, and is well-positioned for search engine visibility.

![Screenshot 2025-01-23 at 11 51 43](https://github.com/user-attachments/assets/c01680ef-234c-4616-a9e4-e6702230cda0)

Both accessibility and SEO highlighted a single area for improvement, as outlined below. While I attempted to address these issues, there were time constraints and technical challenges and so we decided to prioritise these for future sprints. It's important to remember that this is a Minimum Viable Product (MVP), essentially a prototype, and therefore should focus on core functionality and gather user feedback before implementing extensive refinements.

![Image 23-01-2025 at 20 37](https://github.com/user-attachments/assets/dd3f12f2-1c96-4cf1-9681-4a746d613455)

![Image 23-01-2025 at 20 38](https://github.com/user-attachments/assets/7c6ca398-ff05-445b-82c7-d622d6eb5d22)

## Manual testing

Manual testing was conducted to verify specific functionalities. Inputting gibberish into the search bar successfully triggered the expected error message, confirming the functionality of both the search bar and its associated button. Furthermore, manual conversion calculations were performed using a calculator, and the results were successfully matched, demonstrating the successful implementation of DOM reactive elements.

![Screenshot 2025-01-23 at 20 45 45](https://github.com/user-attachments/assets/05b8179e-5031-4e1c-85c9-064cb8afff3c)

## Final Product
![Screenshot 2025-01-23 at 22 45 01](https://github.com/user-attachments/assets/d4e89e48-f643-4871-8f11-e53f738081a0)

![Image 23-01-2025 at 22 54](https://github.com/user-attachments/assets/8445e482-d609-441c-93b5-beda62260dc7)

## Evaluation
The weather app successfully meets all acceptance criteria outlined in the user story cards, effectively addressing user needs with clear presentation of essential information. Interactive features, such as the intuitive search bar and the convenient Celsius/Fahrenheit toggle, enhance user experience.

While successful, the prototype exhibits some limitations. Firstly, the current API displays a 15-minute delay in temperature updates, necessitating budget discussions for a more accurate and real-time data source. Secondly, the current layout is not responsive, becoming unusable on narrower screens.
These limitations, along with user feedback on the MVP and the lighthouse results, will inform the next iteration, ensuring they’re fully addressed in the final version.


