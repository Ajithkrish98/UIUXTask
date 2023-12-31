const express = require("express");
const bodyParser = require("body-parser");
const multer = require('multer');
const cors = require("cors");
const app = express();

app.use(cors());


// Increase the JSON payload size limit to 10MB
app.use(express.json({ limit: '10mb' }));

// parse requests of content-type - application/json
app.use(bodyParser.json());



 const db = require('./models');

 db.sequelize.sync();



// simple route
app.get("/api", (req, res) => {

    res.json({
        message: "Welcome to UI UX Solutions"
    });
});


require("./routes/index.js")(app);



// set port, listen for requests
const PORT = process.env.PORT || 8085;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
