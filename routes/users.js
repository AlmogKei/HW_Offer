const express = require("express");
const router = express.Router();

// הגדרת הראוטר של הרואט שנגדיר באפ
router.get("/",(req,res) => {
    res.json({msg:"users work"})
})

// export defult
module.exports = router;
