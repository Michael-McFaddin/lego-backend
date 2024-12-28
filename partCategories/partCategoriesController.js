const db = require("../db");

function getPartCategories(req, res) {
  console.log("getPartCategories ran");
  new Promise((resolve, reject) => {
    db.all("SELECT * FROM part_categories", (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  }).then((response) => {
    return res.send(response);
  });
}

module.exports = {
  getPartCategories,
};
