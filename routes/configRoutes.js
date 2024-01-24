const indexR = require("./index");
const usersR = require("./users");
const vipR = require("./vips");
const prodsR = require("./prods");

// שיעורי בית
const tvR = require("./tvs")

exports.routesInit = (app) => {
// הגדרת ראוטים לאיזה ראוטר הם שייכים
    app.use("/", indexR);
    app.use("/users", usersR);
    app.use("/vips", vipR);
    app.use("/prods", prodsR);


    // שיעורי בית
    app.use("/tvs", tvR);
}