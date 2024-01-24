const express = require("express");
const { vips_ar } = require("../data/vipsJson")
const router = express.Router();

// הגדרת הראוטר של הרואט שנגדיר באפ
router.get("/",async(req,res) => {
    res.json(vips_ar)
   // res.json({msg:"vip work work"})
})


// vip/single/:index - > האינדקס מייצג משתנה פאראמס שניתן לאסוף מהכתובת
router.get("/single/:index", async(req,res) =>{
    // נאסוף את הפאראמס אינדקס
    const index = req.params.index;
    res.json(vips_ar[index])
    // res.json({msg:"index is :" + index})
})

// /vips/search?s= ראוטר שמאפשר לשלוח קווארי סטרינג
// בשם אס שמאפשר לעשות חיפוש במערך של שמות אנשים
router.get("/search",async(req,res) => {
    const searchQ = req.query.s.toLowerCase();
    const filter_ar = vips_ar.filter((item) => {
        return item.name.toLowerCase().includes(searchQ)
    })
    res.json(filter_ar);
    // res.json({msg:"s quesry is: searchQ"});
})

// export defult
module.exports = router;

