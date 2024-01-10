const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.set(cookieParser());
app.set(cors);

const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Server listening on port ${port}!`));
