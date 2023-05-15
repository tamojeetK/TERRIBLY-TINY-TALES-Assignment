import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import ApexCharts from 'apexcharts';
import './App.css';

const App = () => {
  const [histogramData, setHistogramData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSubmitButton, setShowSubmitButton] = useState(true);
  const [showCheckMark, setShowCheckMark] = useState(false);

  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: 'bar',
    },
    xaxis: {
      categories: [],
    },
    colors: ['#fe6519'],
  });
  
  const [chartSeries, setChartSeries] = useState([
    {
      name: 'Frequency',
      data: [],
    },
  ]);

  useEffect(() => {
    setChartOptions((prevOptions) => ({
      ...prevOptions,
      xaxis: {
        categories: histogramData.map(([word]) => word),
      },
    }));

    setChartSeries([
      {
        name: 'Frequency',
        data: histogramData.map(([, frequency]) => frequency),
      },
    ]);

    console.log(chartOptions);
  }, [histogramData]);

  const fetchWordFrequency = async () => {
    setIsLoading(true);
    const response = await fetch('https://www.terriblytinytales.com/test.txt');
    const text = await response.text();
    const words = text.trim().split(/\s+/);
    const wordCountMap = new Map();

    for (const word of words) {
      if (wordCountMap.has(word)) {
        wordCountMap.set(word, wordCountMap.get(word) + 1);
      } else {
        wordCountMap.set(word, 1);
      }
    }

    const sortedData = Array.from(wordCountMap.entries()).sort(
      (a, b) => b[1] - a[1]
    );

    setHistogramData(sortedData.slice(0, 20));
    setIsLoading(false);
    setShowSubmitButton(false);
  };

  const handleExport = () => {
    let csvContent = 'data:text/csv;charset=utf-8,';
    const rows = [['Word', 'Frequency']];

    for (const [word, frequency] of histogramData) {
      rows.push([word, frequency]);
    }

    rows.forEach((rowArray) => {
      const row = rowArray.join(',');
      csvContent += row + '\r\n';
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'histogram_data.csv');
    document.body.appendChild(link);
    link.click();
    setShowCheckMark(true);
    setTimeout(() => {
      setShowCheckMark(false);
    }, 2000);
  };

  return (
    <div>
      <div className="submit-style">
        {showSubmitButton && (
          <button
            className="submit-button submit-btn"
            onClick={fetchWordFrequency}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Submit'}
          </button>
        )}
      </div>

      {!showSubmitButton && histogramData.length > 0 && (
        <div className="histogram-container">
          <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="bar"
          />
          <button className="export-button" onClick={handleExport}>
            {showCheckMark ? (
              <img
                src="https://media2.giphy.com/media/QAUxbMqnNcMo9U0jt8/giphy.gif?cid=ecf05e47eaq07lzjn5uxttr44babndekgesq6jyx4w03tx6r&ep=v1_stickers_search&rid=giphy.gif&ct=s"
                alt="Check Mark Animation"
                width="20"
                height="20"
              />
            ) : (
              'Export'
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
