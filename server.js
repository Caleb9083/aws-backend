const express = require("express");

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res, next) => {
  res.json({ status: "success", msg: "Welcome to Backend" });
});

app.listen(PORT, function () {
  console.log(`Server is running on http://localhost:${PORT}`);
});
