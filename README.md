# Word Frequency Histogram

The Word Frequency Histogram application is a React-based web application that generates a histogram representing the frequency of words in a given text file. It utilizes the Terribly Tiny Tales API to fetch the text data and provides an interactive interface to explore and export the word frequency data.
This React app fetches text data from the URL and displays the frequency of words in a bar chart using the `ApexCharts` library. The app also has an export feature that allows the user to download the histogram data as a CSV file.

---

## Usage

1. Clone the repository to your local machine using the following command:
    
    ```bash
    git clone https://github.com/tamojeetK/TERRIBLY-TINY-TALES-Assignment.git
    
    ```
    
2. Install the required dependencies by navigating to the project directory and running the following command:
    
    ```bash
    npm install
    
    ```
    
3. Start the development server by running the following command:
    
    ```bash
    npm start
    
    ```
    
4. Open your web browser and go to `http://localhost:3000` to access the application.
5. Click the "Submit" button to initiate the word frequency analysis. The application will fetch the text data from the Terribly Tiny Tales API and generate a histogram based on the frequency of words.
6. The generated histogram will display the top words and their corresponding frequencies in a tabular format.
9. To export the histogram data as a CSV file, click the "Export" button. The application will generate a CSV file named `histogram_data.csv` that can be downloaded to your local machine.

---
## Code Overview

The app is built using React and uses hooks such as `useState` and `useEffect` to manage state and side effects.

### State Management

The app uses several state variables to manage different aspects of its behavior:

- `histogramData`: An array of `[word, frequency]` tuples representing the word frequency histogram data.
- `isLoading`: A boolean indicating whether the app is currently fetching data from the URL.
- `showSubmitButton`: A boolean indicating whether to show the "Submit" button.
- `showCheckMark`: A boolean indicating whether to show a check mark animation after exporting the data.
- `chartOptions`: An object representing the options for the ApexCharts bar chart.
- `chartSeries`: An array representing the series data for the ApexCharts bar chart.

### Fetching Data

The `fetchWordFrequency` function is responsible for fetching text data from a URL, processing it, and updating the state with the resulting histogram data.

First, it sets `isLoading` to `true` to indicate that data is being fetched. Then, it uses the `fetch` function to fetch text data from a URL and converts it into an array of words using `split`.

Next, it uses a `Map` to count the frequency of each word in the array. It then converts the `Map` into an array of `[word, frequency]` tuples and sorts it in descending order of frequency.

Finally, it updates the `histogramData` state with the top 20 most frequent words, sets `isLoading` to `false`, and hides the "Submit" button by setting `showSubmitButton` to `false`.

### Updating Chart Data

The app uses a `useEffect` hook to update the chart options and series whenever the histogram data changes.

First, it updates the chart options by setting the x-axis categories to be an array of words from the histogram data. Then, it updates the chart series by setting its data to be an array of frequencies from the histogram data.

### Rendering Chart

The app uses the `ReactApexChart` component from the `react-apexcharts` library to render a bar chart representing the word frequency histogram. It passes in the chart options and series as props to this component.

### Exporting Data

The app provides an export feature that allows users to download the histogram data as a CSV file. This is implemented in the `handleExport` function.

First, it constructs a CSV string by iterating over each `[word, frequency]` tuple in the histogram data and appending a row containing these values separated by a comma.

Next, it creates an anchor element with its href attribute set to a data URI representing this CSV string and its download attribute set to `"histogram_data.csv"`. It then appends this anchor element to document body and triggers a click event on it to initiate download.

Finally, it shows a check mark animation by setting `showCheckMark` to true for 2 seconds.

This code forms the core functionality of the Word Frequency Histogram application, handling data fetching, UI rendering, and the export feature with the check mark animation.

---

## Dependencies

The Word Frequency Histogram application utilizes the following dependencies:

- React: A JavaScript library for building user interfaces.
- React DOM: A package for rendering React components in the browser.
- Node Fetch: A library used for making HTTP requests to fetch the text data from the Terribly Tiny Tales API.
- CSS: Custom CSS styles to enhance the visual presentation of the application.

---

## Folder Structure

The project structure is organized as follows:

```
├── src/
│   ├── App.js
│   ├── App.css
│   └── index.js
├── public/
│   └── index.html
├── package.json
├── package-lock.json
├── README.md
└── .gitignore

```

- The `src/` directory contains the main components and styling files for the application.
- The `public/` directory includes the HTML file that serves as the entry point for the application.
- The `package.json` file lists the project dependencies and provides various scripts to run and build the application.
- The `README.md` file you are currently reading provides an overview of the application, its usage instructions, and other relevant details.
- The `.gitignore` file specifies files and directories that should be ignored by version control systems, such as the `node_modules` directory.

---

