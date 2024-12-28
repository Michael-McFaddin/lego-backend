const express = require("express");
const router = express.Router();
var { getElements, getElementById } = require("./elementsController");

router.get("/", getElements);
router.get("/:id", getElementById);

module.exports = router;
