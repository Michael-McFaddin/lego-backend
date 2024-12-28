const express = require("express");
const router = express.Router();
var {
  getInventoryMinifigs,
  getInventoryMinifigsById,
} = require("./inventoryMinifigsController");

router.get("/", getInventoryMinifigs);
router.get("/:id", getInventoryMinifigsById);

module.exports = router;
