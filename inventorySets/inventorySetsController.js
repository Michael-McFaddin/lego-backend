const db = require("../db");

function getInventorySets(req, res) {
  new Promise((resolve, reject) => {
    db.all("SELECT * FROM inventory_sets", (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  }).then((response) => {
    return res.send(response);
  });
}

function getInventorySetsById(req, res) {
  const { id } = req.params;
  new Promise((resolve, reject) => {
    db.all(
      "SELECT * FROM inventory_sets where inventory_id=(?)",
      id,
      (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      }
    );
  }).then((response) => {
    return res.send(response);
  });
}

module.exports = {
  getInventorySets,
  getInventorySetsById,
};
