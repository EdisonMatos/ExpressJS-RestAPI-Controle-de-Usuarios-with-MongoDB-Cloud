const express = require("express");

const app = express();

app.use(express.json());

const users = [];

// Find all

app.get("/users", function (req, res) {
  if (users.length <= 0) {
    res.send({
      error:
        "No users found. First you have to create a user. Try a POST request to localhost:3000/users/",
    });
  } else {
    res.send({ Users: users.filter(Boolean) });
  }
});

// Find one (by id)

app.get("/users/:id", function (req, res) {
  const id = req.params.id - 1;

  if (id <= users.length - 1 && id >= 0) {
    res.send({ UserFound: users[id] });
  } else if (users.length == 0) {
    res.send({
      error:
        "First you have to create a user. Try a POST request to localhost:3000/users/",
    });
  } else {
    res.send({
      error:
        "The id must be a number between the quantity of users createad. Try a GET request to: localhost:3000/users/1",
    });
  }
});

// Create

app.post("/users", function (req, res) {
  const newUser = req.body;

  if (newUser.name == undefined || newUser.name == "") {
    res.send({
      error:
        "Name must be informed. Try a POST request with Body content in JSON format as followed:",
      example: { name: "Edison" },
    });
  } else {
    users.push(newUser);
    res.send({ UserCreated: newUser, message: "Createad successfully." });
  }
});

// Update

app.put("/users/:id", function (req, res) {
  const id = req.params.id - 1;

  if (id <= users.length - 1 && id >= 0) {
    const newUser = req.body;

    if (newUser.name == undefined || newUser.name == "") {
      res.send({
        error:
          'Name must be informed. Try a POST request with Body content in JSON format as followed: { "name": "Edison" } ',
      });
    } else {
      users[id] = newUser;
      res.send({
        UserUpdated: users[id],
        message: "User updated successfully.",
      });
    }
  } else if (users.length == 0) {
    res.send({
      error:
        "First you have to create a user. Try a POST request to localhost:3000/users/",
    });
  } else {
    res.send({
      error:
        "The id must be a number between the quantity of users createad. Try a GET request to: localhost:3000/users/1 to find the users list",
    });
  }
});

// Delete

app.delete("/users/:id", function (req, res) {
  const id = req.params.id - 1;

  if (id <= users.length - 1 && id >= 0) {
    const userDeleted = users[id];
    res.send({ userDeleted, message: "User deleted successfully." });
    users.splice(id, 1);
  } else if (users.length == 0) {
    res.send({
      error:
        "First you have to create a user. Try a POST request to localhost:3000/users/",
    });
  } else {
    res.send({
      error:
        "The id must be a number between the quantity of users createad. Try a GET request to: localhost:3000/users/1 to find the users list",
    });
  }
});

app.listen(3000, () => {
  console.log("Runing at port 3000");
});
