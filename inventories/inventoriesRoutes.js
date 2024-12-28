const express = require("express");
const router = express.Router();
var { getInventories, getInventoryById } = require("./inventoriesController");

router.get("/", getInventories);
router.get("/:id", getInventoryById);

module.exports = router;
