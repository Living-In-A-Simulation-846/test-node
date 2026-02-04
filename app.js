require("dotenv").config();
const path = require("path");
const express = require("express");
const knex = require("knex");
const winston = require("winston");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.options("*", cors());

app.use((req, res, next) => {
    res.requestTime = new Date().toISOString();
    res.setHeader("Content-Type", "application/json");
});

module.exports = app;
