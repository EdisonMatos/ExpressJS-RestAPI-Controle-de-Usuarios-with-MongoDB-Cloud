const express = require("express");

const app = express();

app.use(express.json());

const users = [];

// Find all

app.get("/users", function (req, res) {
  res.send(users);
});

// Find one

app.get("/users/:id", function (req, res) {
  const id = req.params.id - 1;
  res.send(users[id]);
});

// Create

app.post("/users", function (req, res) {
  const newUser = req.body.name;
  users.push(newUser);
  res.send(users);
});

app.listen(3000, () => {
  console.log("Runing at port 3000");
});
