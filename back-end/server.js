require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./routers/auth");
const PORT = 8000;

app.use(express.json());

app.use("/api/auth", authRoute);

app.listen(PORT, () => console.log(`sever is runnning on Port $(PORT)`));
