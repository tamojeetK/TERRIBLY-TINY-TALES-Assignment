# Word Frequency Histogram

# Word Frequency Histogram

The Word Frequency Histogram application is a React-based web application that generates a histogram representing the frequency of words in a given text file. It utilizes the Terribly Tiny Tales API to fetch the text data and provides an interactive interface to explore and export the word frequency data.

---

## Usage

1. Clone the repository to your local machine using the following command:
    
    ```bash
    git clone <repository_url>
    
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
5. In the input field, enter the desired number of most frequent words you want to analyze from the text file.
6. Click the "Submit" button to initiate the word frequency analysis. The application will fetch the text data from the Terribly Tiny Tales API and generate a histogram based on the frequency of words.
7. The generated histogram will display the top words and their corresponding frequencies in a tabular format.
8. To export the histogram data as a CSV file, click the "Export" button. The application will generate a CSV file named `histogram_data.csv` that can be downloaded to your local machine.

---

## Code Overview

The code in `App.js` file represents the main component of the Word Frequency Histogram application. 

- The imports at the beginning of the file bring in the necessary dependencies. `React` is imported for building the user interface, while `useState` and `useEffect` are React hooks used for managing state and side effects, respectively. The `'./App.css'` import is for styling the component.
- The `App` function component is defined. It represents the root component of the application.
- The state variables are defined using the `useState` hook:
    - `histogramData` stores an array representing the word frequency data.
    - `isLoading` indicates whether the application is currently fetching data.
    - `showSubmitButton` determines whether the submit button should be displayed.
    - `showCheckMark` controls the visibility of the check mark animation after exporting.
- The `fetchWordFrequency` function is an asynchronous function responsible for fetching the word frequency data from the Terribly Tiny Tales API. It sets the state variables accordingly to update the UI with the fetched data.
- The `handleExport` function is invoked when the export button is clicked. It prepares the histogram data for export by converting it into a CSV format. It creates a download link for the CSV file, attaches it to the DOM, and triggers a click event to initiate the download. Additionally, it sets the `showCheckMark` state to `true` to display the check mark animation and sets a timeout to hide it after 2 seconds.
- The JSX code represents the structure and layout of the application UI:
    - The submit button is conditionally rendered based on the `showSubmitButton` state.
    - When the submit button is clicked and data is available, the histogram table is displayed.
    - The histogram table is populated with rows containing word and frequency information. The width of the frequency visualization is dynamically set based on the frequency value.
    - The export button is rendered, and its content is conditionally set based on the `showCheckMark` state. If `showCheckMark` is `true`, an image element with the check mark animation is displayed; otherwise, the button displays the text "Export".
- The component is exported as the default export from the file.

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

## License

This project is licensed under the [MIT License](notion://www.notion.so/LICENSE). Feel free to modify and adapt the codebase according to your needs.