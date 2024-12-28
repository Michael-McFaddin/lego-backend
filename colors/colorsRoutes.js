const express = require("express");
const router = express.Router();
var { getColors, getColorById } = require("./colorsController");

router.get("/", getColors);
router.get("/:id", getColorById);

// // GET ALL
// app.get("/colors", async function (req, res) {
//   const allColors = await colors.getColors();
//   res.send(allColors);
// });

// // GET
// app.get("/color/:id", async function (req, res) {
//   const color = await colors.getColorById(req.params.id);
//   res.send(color);
// });

// // POST
// app.post("/agent", async function (req, res) {
//   const firstName = req.body.firstName;
//   const lastName = req.body.lastName;
//   await agents.addAgent(firstName, lastName);
//   res.send({ message: "Success" });
// });

// // PUT
// app.put("/agent/:id", async function (req, res) {
//   const id = req.params.id;
//   const firstName = req.body.firstName;
//   const lastName = req.body.lastName;
//   await agents.editAgent(id, firstName, lastName);
//   res.send({ message: "Success" });
// });

// // DELETE
// app.delete("/agent/:id", async function (req, res) {
//   await agents.deleteAgent(req.params.id);
//   res.send({ message: "Success" });
// });

module.exports = router;
