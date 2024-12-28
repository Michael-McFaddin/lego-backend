const express = require("express");
const router = express.Router();
var {
  getInventorySets,
  getInventorySetsById,
} = require("./inventorySetsController");

router.get("/", getInventorySets);
router.get("/:id", getInventorySetsById);

module.exports = router;
