const express = require("express");
const router = express.Router();
var {
  getPartRelationships,
  getPartRelationshipsByRelType,
} = require("./partRelationshipsController");

router.get("/", getPartRelationships);
router.get("/:id", getPartRelationshipsByRelType);

module.exports = router;
