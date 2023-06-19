const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());


app.get("/api/getProducts", (req, res) => {
  fs.readFile("products.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading file");
      return;
    }

    const jsonData = JSON.parse(data);
    res.json(jsonData);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
