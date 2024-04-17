// App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataChart from './components/DataChart';
import SummaryTable from './components/SummaryTable';
import FilterForm from './components/FilterForm';
import HorizontalBarChart from './components/HorizontalBarChart';
function App() {
  const [data, setData] = useState([]);
  const [temperature, setTemperature] = useState(null); // State to store temperature
  const location = 'New York'; // Sample location
  // const [summary, setSummary] = useState({});
  // const [filteredData, setFilteredData] = useState([]);

  
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/data');
      setData(response.data);
      console.log(response.data)
      // calculateSummary(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // const calculateSummary = (data) => {
  //   const numberOfOnes = data.filter(item => item.machine_status === 1).length;
  //   const numberOfZeros = data.filter(item => item.machine_status === 0).length;
  //   // Calculate other summary metrics if needed
  //   setSummary({ numberOfOnes, numberOfZeros });
  // };

  // const handleFilter = async (startTime, endTime) => {
  //   try {
  //     const response = await axios.get(`/api/data?startTime=${startTime}&endTime=${endTime}`);
  //     setFilteredData(response.data);
  //   } catch (error) {
  //     console.error('Error fetching filtered data:', error);
  //   }
  // };

  const fetchTemperature = async (location) => {
    try {
      const apiKey = '662291ba2271face72a6810c58a72de8';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

   
      //https://home.openweathermap.org/api_keys

      const response = await axios.get(apiUrl);
      const temperature = response.data.main.temp;

      return temperature;
    } catch (error) {
      console.error('Error fetching temperature data:', error);
      return null;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   fetchTemperature();
  // }, []);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const temperatureData = await fetchTemperature(location);
        setTemperature(temperatureData);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
  
    fetchWeatherData();
  }, []);



  // return (
  //   <div>
  //     <h1>MERN Application</h1>
  //     <FilterForm onFilter={handleFilter} />
  //     <DataChart data={data} />
  //     {/* <SummaryTable summary={summary} /> */}
  //   </div>
  // );



  
  return (
    <div>
      <HorizontalBarChart
        data={data}
      />
    </div>
  );
}

export default App;
