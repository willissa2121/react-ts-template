const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  setTimeout(() => {
    res.send({
      data: {
        line: "line-from-server",
        color: "green",
        isHidden: false,
        number: 1000,
      },
    });
  }, 5000);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
