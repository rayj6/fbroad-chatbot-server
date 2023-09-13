import express from "express";
import cors from "cors";
import ChatBot from "./app.js";

const app = express();
app.use(cors());
const port = 3300;

function errorHandler(err, req, res, next) {
    res.status(500);

    console.log(err);

    res.json({ error: err.message });
}

ChatBot(app);

app.use(errorHandler);

// Start the server
app.listen(port, () => {
    console.clear();
    console.log(`Server is running on port: ${port}`);
    console.log(`Follow this link to access server: http://localhost:${port}`);
});