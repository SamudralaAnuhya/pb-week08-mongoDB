// Budget API
// adding required dependencies "express" and also enabling cors to ensure web application is accessible from anywhere in the world

import connectDB from "./config/db.js";
import express, { json } from "express";
import BudgetRouter from "./router/BudgetRouter.js";

// const express = require("express");
// const mongoose = require('mongoose');
// const cors = require("cors");
const app = express();
const port = 3000;

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static("public"));

const budget = {
  myBudget: [
    {
      title: "Eat out",
      budget: 25,
    },
    {
      title: "Rent",
      budget: 275,
    },
    {
      title: "Grocery",
      budget: 110,
    },
  ],
};

// const budgetData = require("./budget-data.json")
// app.get("/budget", (req, res) => {
//   res.json(budgetData);
// });

app.listen(port, () => {
  console.log(`API served at http://localhost:${port}`);
});

connectDB();
app.use("/budget", BudgetRouter);
