const express = require('express');
const router = express.Router();

router.post('/',(req,res,next)=>{

    res.json({status: true, data: {}});
});

module.exports = router;