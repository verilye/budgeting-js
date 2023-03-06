import * as express from "express";
const router = express.Router();

// TODO
// Add income
// subtract spending
// return information ready to be displayed in chart.js

// Charts I want to add:
// Line chart - 
// Pie chart - 
// Radar chart - 
// Bar chart - 
// Potentially make one call for each chart?



router.post('/debit', (req,res)=>{

    //Store transaction on db
  
});

router.post('/credit', (req,res)=>{

    //Store transaction on db
  
});

router.get('/', (req,res)=>{

    //Store transaction on db
  
});


module.exports = router;
  