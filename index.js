const express = require('express');
const { body, validationResult } = require('express-validator');
const userRoutes = require('./routes/user.routes');

const app = express();

const port = 5008;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/api", userRoutes)

app.get("/", (req,res) => {
    res.send("Welcome to Home page");
})


app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});

