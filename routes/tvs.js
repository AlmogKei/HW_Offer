// קובץ שיעורי בית !!!
const express = require("express");
const axios = require("axios");
const router = express.Router();

// async to tvs
router.get("/",async(req,res) => {
    const url = "http://fs1.co.il/bus/tv.php"
    const resp = await axios.get(url);
    res.json(resp.data);
})


// חיפוש שם בתוך היו אר אל לפי אותיות
// חיפוש קטגוריה בתוך היו אר אל לפי אותיות
router.get("/search",async(req,res) => {
    const searchQ = req.query.s.toLowerCase();
    const url = "http://fs1.co.il/bus/tv.php"
    const {data} = await axios.get(url);
    const filter_ar = data.filter((item) => {
        return item.name.toLowerCase().includes(searchQ) ||
        item.genere.toLowerCase().includes(searchQ)
    })
    res.json(filter_ar);
})

// חיפוש לפי אינדקס 
router.get("/single/:index",async(req,res) => {
    const index = req.params.index
    const url = "http://fs1.co.il/bus/tv.php";
    const {data} = await axios.get(url);
    res.json(data[index])
  })


// export defult
module.exports = router;
