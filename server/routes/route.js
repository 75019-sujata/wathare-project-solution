const express = require("express")
const router = express.Router()
const Data = require("../model/model")

router.get("/",async (req, res) => {
    // try {
    //   const data = await Data.find();
    //   res.json(data);
    // } 
    try {
      const { startTime, endTime, frequency } = req.query;
  
      // Parse startTime and endTime if needed
  
      // Implement filtering logic based on startTime, endTime, and frequency
      // Example: Filter data from startTime to endTime with specified frequency
  
      // Sample filtering logic
      const filteredData = await Data.find({
        timestamp: { $gte: startTime, $lte: endTime }
      });
  
      res.json(filteredData);
    }
    catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })



module.exports = router;
