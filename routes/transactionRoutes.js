const express = require("express");

const router = express.Router();

const protect = require(
  "../middleware/authMiddleware"
);

const {
  addTransaction,
  getTransactions,
} = require(
  "../controllers/transactionController"
);

router.post("/", protect, addTransaction);

router.get("/", protect, getTransactions);

module.exports = router;