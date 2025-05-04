# Weather App

## Overview
Welcome to the Weather App, a responsive web application developed, built with React and TypeScript, this app leverages the OpenWeatherMap API to deliver real-time weather data, featuring a modern UI with light/dark mode, search functionality, and search history. Designed for seamless use across devices, it showcases best practices in state management, styling, and responsiveness.

---

## Features
- **Real-Time Weather**: Fetches and displays current weather for any city, defaulting to Chittagong, Bangladesh.
- **Search Functionality**: Search for weather by city with loading states and elegant error handling.
- **Today's Highlights**: Displays humidity, pressure, wind speed, high/low temperatures, and sunrise/sunset times.
- **Search History**: Stores up to 7 recent searches with city, temperature, description, and icon, updated automatically.
- **Dark Mode**: Toggle between light and dark themes with smooth transitions.
- **Tech Stack**:
  - React + TypeScript
  - Redux Toolkit for state management
  - Tailwind CSS for styling
  - Axios for API requests
  - Google Fonts (Inter for body, Poppins for headings)
  - React Icons for visual enhancements

---

## Prerequisites
- Node.js (v16 or later)
- npm (v7 or later)
- OpenWeatherMap API key

---

## Setup Instructions
Get the app running locally with these simple steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/sharifulislamshihan/digiden-it-task.git
   cd weather-app

2. **Install Dependencies:**:
   ```bash
   npm install
   ```
   Ensures all dependencies (`axios`, `@reduxjs/toolkit`, `react-redux`, `react-hook-form`, `tailwindcss`, `react-icons`) are installed.

3. **Run the App:**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser to explore.

4. **Build for Production:**:
   ```bash
   npm run build
   ```
  Generates production-ready files in the `dist` folder.

---

## Live Access
- Live Preview : [Weather App](https://digiden-it-task-five.vercel.app/)

---

## Code Link
- GitHub Repository
```bash
   https://github.com/sharifulislamshihan/digiden-it-task
```

---

## API Boundaries

This application utilizes the [OpenWeatherMap API](https://openweathermap.org/api), which has some known limitations:

* **Inconsistent Data:** The API may occasionally return weather information for cities that do not exist or are misspelled. For example, searching for "Londn" might incorrectly return data for "London". This can lead to misleading results.
* **Error Handling:** While the application includes robust error messages (e.g., "Oops! City Not Found") to mitigate this, users are strongly advised to verify the accuracy of city names before submitting requests.
* **Rate Limits:** The free tier of the OpenWeatherMap API has rate limits. Frequent requests may trigger throttling, potentially causing temporary delays or errors in receiving weather data.


Future improvements may involve implementing custom validation or integrating with a more reliable API source.

---

## Screenshots

* **Light Mode:** ![App Screenshot](https://i.ibb.co.com/ymxx7ZzV/image.png)

* **Dark Mode:** ![App Screenshot](https://i.ibb.co.com/JRLxXwGJ/image.png)

## Submission Details

* **GitHub Repository:** [Repository Link](https://github.com/sharifulislamshihan/digiden-it-task)
* **Live Deployment:** [Live Link](https://digiden-it-task-five.vercel.app/)

## Notes

* The navigation bar is fully responsive, stacking elements on mobile screens (below 640px width) for improved usability.

---

Crafted with 💻 by Shariful Islam Shihan