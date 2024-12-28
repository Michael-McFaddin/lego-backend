const express = require("express");
const router = express.Router();
var { getThemes, getThemesById } = require("./themesController");

router.get("/", getThemes);
router.get("/:id", getThemesById);

module.exports = router;
