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

  if (id >= 0) {
    console.log(typeof id);
    res.send(users[id]);
  } else {
    res.send("The id must be a number. Try: users/1");
  }
});

// Create

app.post("/users", function (req, res) {
  const newUser = req.body;

  if (newUser.name == undefined || newUser.name == "") {
    res.send('Name must be informed. Try: { "name": "Edison" } ');
  } else {
    users.push(newUser);
    res.send(newUser);
  }
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
