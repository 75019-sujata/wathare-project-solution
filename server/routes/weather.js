const axios = require('axios');

// Function to fetch temperature data based on location
const fetchTemperature = async (location) => {
  try {
    const apiKey = '662291ba2271face72a6810c58a72de8';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    const response = await axios.get(apiUrl);
    const temperature = response.data.main.temp;
    
    return temperature;
  } catch (error) {
    console.error('Error fetching temperature data:', error);
    return null;
  }
};

// Example usage
fetchTemperature('New York')
  .then(temperature => {
    console.log('Temperature in New York:', temperature);
  })
  .catch(error => {
    console.error('Error:', error);
  });
