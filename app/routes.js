const app = require("../app");

module.exports = function loadRoutes(app) {
    app.get("/", (req, res, next) => {
        res.send("Root path working!");
    });
}
