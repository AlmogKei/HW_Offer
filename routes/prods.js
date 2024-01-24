const express = require("express");
const axios = require("axios");
const router = express.Router();

// הגדרת הראוטר של הרואט שנגדיר באפ
router.get("/",async(req,res) => {
    const url = "http://fs1.co.il/bus/shop.php"
    const resp = await axios.get(url);
    res.json(resp.data);
})

//search?= נחזיר מוצרים שבשם או בקטגוריה מופיע חלק מהביטוי קווארי אס

router.get("/search",async(req,res) => {
    const searchQ = req.query.s.toLowerCase();
    const url = "http://fs1.co.il/bus/shop.php"
    const {data} = await axios.get(url);
    const filter_ar = data.filter((item) => {
        return item.name.toLowerCase().includes(searchQ) ||
        item.cat.toLowerCase().includes(searchQ)
    })
    res.json(filter_ar);
    // res.json(resp.data);
})

router.get("/single/:index",async(req,res) => {
    const index = req.params.index
    const url = "http://fs1.co.il/bus/shop.php";
    // {data} - דיסטרקשן למאפיין דאטא
    const {data} = await axios.get(url);
    res.json(data[index])
  })

// export defult
module.exports = router;
