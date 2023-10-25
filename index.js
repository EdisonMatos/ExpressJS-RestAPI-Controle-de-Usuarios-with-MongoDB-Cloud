const express = require("express");

const app = express();

app.use(express.json());

const users = [];

console.log(
  "\n\nInstructions:",
  "\n\n",
  'To create a user, send a POST request to localhost:3000/users route with json format on body. Example: { "name": "Edison"}',
  "\n",
  "To find all users, send a GET request to localhost:3000/users",
  "\n",
  "To find a specific user, send a GET request to localhost:3000/users/1 or any other numerical that match with the users list order",
  "\n",
  'To update an user info, same as CREATE, but you need to send a PUT request with the new information. Example: {"name": "Matos"}',
  "\n",
  "To delete an user, send a DELETE request to localhost:3000/users/1 or any other numerical that match with the users list order",
  "\n\n",
  "Enjoy."
);

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

app.get("/users/:id", function (req, res) {
  const id = req.params.id - 1;

  if (id <= users.length - 1 && id >= 0) {
    res.send({ UserFound: users[id] });
  } else if (users.length == 0) {
    res.send({
      error:
        "No users found. First you have to create a user. Try a POST request to localhost:3000/users/",
    });
  } else {
    res.send({
      error:
        "The id must be a number between the quantity of users createad. Try a GET request to: localhost:3000/users/1",
    });
  }
});

app.post("/users", function (req, res) {
  const newUser = req.body;

  if (newUser.name == undefined || newUser.name == "") {
    res.send({
      error:
        "A name must be informed. Try a POST request with Body content in JSON format as followed:",
      example: { name: "Edison" },
    });
  } else {
    users.push(newUser);
    res.send({ UserCreated: newUser, message: "Created successfully." });
  }
});

app.put("/users/:id", function (req, res) {
  const id = req.params.id - 1;

  if (id <= users.length - 1 && id >= 0) {
    const newUser = req.body;

    if (newUser.name == undefined || newUser.name == "") {
      res.send({
        error:
          "A name must be informed. Try a POST request with Body content in JSON format as followed:",
        example: { name: "Edison" },
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

app.listen(3000, () => {});
