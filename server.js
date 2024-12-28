var express = require("express");
var bodyParser = require("body-parser");
const colorRoutes = require("./colors/colorsRoutes");
const partsRoutes = require("./parts/partsRouter");
const partCategoriesRoutes = require("./partCategories/partCategoriesRoutes");
const elementsRoutes = require("./elements/elementsRoutes");
const inventoriesRoutes = require("./inventories/inventoriesRoutes");
const inventoryPartsRoutes = require("./inventoryParts/inventoryPartsRoutes");
const inventorySetsRoutes = require("./inventorySets/inventorySetsRoutes");
const inventoryMinifigsRoutes = require("./inventoryMinifigs/inventoryMinifigsRoutes");
const minifigsRoutes = require("./minifigs/minifigsRoutes");
const setsRoutes = require("./sets/setsRoutes");
const partRelationshipsRoutes = require("./partRelationships/partRelationshipsRoutes");
const themesRoutes = require("./themes/themesRoutes");

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/colors", colorRoutes);
app.use("/api/parts", partsRoutes);
app.use("/api/part-categories", partCategoriesRoutes);
app.use("/api/elements", elementsRoutes);
app.use("/api/inventories", inventoriesRoutes);
app.use("/api/inventory-parts", inventoryPartsRoutes);
app.use("/api/inventory-sets", inventorySetsRoutes);
app.use("/api/inventory-minifigs", inventoryMinifigsRoutes);
app.use("/api/minifigs", minifigsRoutes);
app.use("/api/sets", setsRoutes);
app.use("/api/part-relationships", partRelationshipsRoutes);
app.use("/api/themes", themesRoutes);

app.listen(process.env.PORT || 3000, function (req, res) {
  console.log(`Server Started on port ${process.env.PORT || 3000}!`);
});
