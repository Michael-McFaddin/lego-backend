const express = require("express");
const router = express.Router();
var { getPartCategories } = require("./partCategoriesController");

router.get("/", getPartCategories);

module.exports = router;
