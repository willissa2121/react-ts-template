const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  setTimeout(() => {
    res.send({
      data: { line: "line-1", color: "green", isHidden: false, number: 50 },
    });
  }, 2000);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
