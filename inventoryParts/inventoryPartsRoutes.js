const express = require("express");
const router = express.Router();
var {
  getInventoryParts,
  getInventoryPartsById,
} = require("./inventoryPartsController");

router.get("/", getInventoryParts);
router.get("/:id", getInventoryPartsById);

module.exports = router;
