const express = require("express");
const router = express.Router();
var {
  getParts,
  getPartByNumber,
  getPartCategories,
} = require("./partsController");

router.get("/", getParts);
router.get("/part-number/:id", getPartByNumber);

router.get("/categories/", getPartCategories); // TODO move to own dir

module.exports = router;
