const db = require("../db");

function getInventoryMinifigs(req, res) {
  new Promise((resolve, reject) => {
    db.all("SELECT * FROM inventory_minifigs", (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  }).then((response) => {
    return res.send(response);
  });
}

function getInventoryMinifigsById(req, res) {
  const { id } = req.params;
  new Promise((resolve, reject) => {
    db.all(
      "SELECT * FROM inventory_minifigs where inventory_id=(?)",
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
  getInventoryMinifigs,
  getInventoryMinifigsById,
};
