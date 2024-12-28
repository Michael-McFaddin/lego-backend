const db = require("../db");

function getInventoryParts(req, res) {
  new Promise((resolve, reject) => {
    db.all("SELECT * FROM inventory_parts limit 100", (err, rows) => {
      // Table has over 2.5 million rows
      if (err) reject(err);
      else resolve(rows);
    });
  }).then((response) => {
    return res.send(response);
  });
}

function getInventoryPartsById(req, res) {
  const { id } = req.params;
  new Promise((resolve, reject) => {
    db.all(
      "SELECT * FROM inventory_parts where inventory_id=(?)",
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
  getInventoryParts,
  getInventoryPartsById,
};
