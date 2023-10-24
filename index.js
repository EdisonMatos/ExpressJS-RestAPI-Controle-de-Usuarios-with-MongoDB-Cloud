const express = require("express");

const app = express();

app.use(express.json());

const users = [];

// Find all

app.get("/users", function (req, res) {
  res.send(users.filter(Boolean));
});

// Find one (by id)

app.get("/users/:id", function (req, res) {
  const id = req.params.id - 1;
  res.send(users[id]);
});

// Create

app.post("/users", function (req, res) {
  const newUser = req.body;
  users.push(newUser);
  res.send(newUser);
});

// Update

app.put("/users/:id", function (req, res) {
  const id = req.params.id - 1;
  const newUser = req.body;
  users[id] = newUser;
  res.send(users[id]);
});

// Delete

app.delete("/users/:id", function (req, res) {
  const id = req.params.id - 1;
  const index = users[id];
  res.send(index);
  users.splice(index, 1);
});

app.listen(3000, () => {
  console.log("Runing at port 3000");
});
