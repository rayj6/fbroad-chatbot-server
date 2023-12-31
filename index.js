const express = require("express");
const cors = require("cors");

const ChatBot = require("./app.js");

const app = express();
app.use(cors());

const port = 3300;

function errorHandler(err, req, res, next) {
    res.status(500);

    console.log(err);

    res.json({ error: err.message });
}

app.use(express.static("public"));

ChatBot(app);

app.use(errorHandler);

// Start the server
app.listen(port, () => {
    console.clear();
    console.log(`Server is running on port: ${port}`);
});

module.exports = app;
