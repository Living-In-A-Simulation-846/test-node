const app = require("../app");

app.get('/', (req, res, next) => {
    res.send('Root path working!')
})
