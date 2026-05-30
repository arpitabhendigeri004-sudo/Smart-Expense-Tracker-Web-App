const Transaction = require("../models/Transaction");

const getDashboardData = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      user: req.user.id,
    });

    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach((item) => {
      if (item.type === "income") {
        totalIncome += item.amount;
      } else {
        totalExpense += item.amount;
      }
    });

    const balance =
      totalIncome - totalExpense;

    res.json({
      totalIncome,
      totalExpense,
      balance,
      transactionCount:
        transactions.length,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardData,
};