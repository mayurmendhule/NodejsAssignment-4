const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// your code goes here

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/add", (req, res) => {
  // const num1 = parseInt(req.body.num1);
  // const num2 = parseInt(req.body.num2);
  const { num1, num2 } = req.body;

  if (isNaN(num1) || isNaN(num2)) {
    res.json({ status: "error", message: "Invalid data types" });
    return;
  }
  sum = num1 + num2;

  if (sum < -1000000) {
    res.json({ status: "error", message: "Underflow" });
  } else if (sum > 1000000) {
    res.json({ status: "error", message: "Overflow" });
  } else {
    res.json({
      status: "success",
      message: "the sum of given two numbers",
      sum: sum,
    });
  }
});

app.post("/sub", (req, res) => {
//   const num1 = parseFloat(req.body.num1);
//   const num2 = parseFloat(req.body.num2);
const { num1, num2 } = req.body;

  if (isNaN(num1) || isNaN(num2)) {
    res.json({ status: "error", message: "Invalid data types" });
    return;
  }

  difference = num1 - num2;

  if (difference < -1000000) {
    res.json({ status: "error", message: "Underflow" });
  } else if (difference > 1000000) {
    res.json({ status: "error", message: "Overflow" });
  } else {
    res.json({
      status: "success",
      message: "the difference of given two numbers",
      difference: difference,
    });
  }
});
app.post("/multiply", (req, res) => {
//   const num1 = parseFloat(req.body.num1);
//   const num2 = parseFloat(req.body.num2);
const { num1, num2 } = req.body;

  if (isNaN(num1) || isNaN(num2)) {
    res.json({ status: "error", message: "Invalid data types" });
    return;
  }
  result = num1 * num2;
  if (result < -1000000) {
    res.json({ status: "error", message: "Underflow" });
  } else if (result > 1000000) {
    res.json({ status: "error", message: "Overflow" });
  } else {
    res.json({
      status: "success",
      message: "the result of given two numbers",
      result: result,
    });
  }
});
app.post("/divide", (req, res) => {
//   const num1 = parseFloat(req.body.num1);
//   const num2 = parseFloat(req.body.num2);
const { num1, num2 } = req.body;

  if (isNaN(num1) || isNaN(num2)) {
    res.json({ status: "error", message: "Invalid data types" });
    return;
  } else if (num2 === 0) {
    res.json({ status: "error", message: "Cannot divide by zero" });
    return;
  }
  result = num1 / num2;
  if (result < -1000000) {
    res.json({ status: "error", message: "Underflow" });
  } else if (result > 1000000) {
    res.json({ status: "error", message: "Overflow" });
  } else {
    res.json({
      status: "success",
      message: "the result of given two numbers",
      result: result,
    });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
