const app = require("./app");

const port = process.env.APP_PORT;

app.listen(port, () => {
    console.log(`${process.env.APP_NAME} running on port: ${port}`)
})