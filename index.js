const express = require("express");

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
    res.status(200).send("Updated?");
});


app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));