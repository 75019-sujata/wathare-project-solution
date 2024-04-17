// sampleDataGenerator.js

// Sample data generation function
const generateSampleData = () => {
    const data = [];
    const startDate = new Date('2024-01-01');
    const endDate = new Date('2024-01-07');
  
    for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
      const temperature = Math.floor(Math.random() * (40 - 20) + 20); // Generate random temperature between 20 to 40
      const location = 'New York'; // Sample location
  
      // Generate data for each hour of the day
      for (let hour = 0; hour < 24; hour++) {
        const timestamp = new Date(date);
        timestamp.setHours(hour);
        const machineStatus = Math.random() > 0.5 ? 1 : 0; // Randomly generate machine status
        data.push({ timestamp, location, temperature, machineStatus });
      }
    }
  
    return data;
  };
  
  // Export the function
  module.exports = generateSampleData;
  