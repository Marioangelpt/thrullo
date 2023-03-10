const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("../routes/main.routes")
require("./config.js")


app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(routes);
app.listen(3000);
