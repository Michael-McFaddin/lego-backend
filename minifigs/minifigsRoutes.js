const express = require("express");
const router = express.Router();
var { getMinifigs, getMinifigsById } = require("./minifigsController");

router.get("/", getMinifigs);
router.get("/:id", getMinifigsById);

module.exports = router;
