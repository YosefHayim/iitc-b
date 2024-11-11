const express = require("express");

const usersRoute = express.Router();

usersRoute.get("/users", (req, res) => {});

usersRoute.post("/user", (req, res) => {});

usersRoute.put("/user", (req, res) => {});

usersRoute.patch("/user", (req, res) => {});

usersRoute.delete("/user", (req, res) => {});

module.exports = usersRoute;
