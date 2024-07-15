const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://risshh18:Rishabh12@cluster0.5ls5cab.mongodb.net/ExpenseMonitor"
);

const expenseSchema = new mongoose.Schema({
  purpose: String,
  price: Number,
});

const Expense = mongoose.model("Expenses", expenseSchema);

app.get("/personal/getExpenses", (req, res) => {
  Expense.find({})
    .then(function (expenses) {
      res.json(expenses);
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.post("/personal/addExpense", async (req, res) => {
  const { purpose, price } = req.body;
  const Exp = new Expense({
    purpose: purpose,
    price: price,
  });
  const result = await Exp.save();
  res.status(201).json(result);
});

app.listen(2000, () => {
  console.log("Server is running");
});