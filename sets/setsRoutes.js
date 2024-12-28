const express = require("express");
const router = express.Router();
var { getSets, getSetsById } = require("./setsController");

router.get("/", getSets);
router.get("/:id", getSetsById);

module.exports = router;
