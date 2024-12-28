const db = require("../db");

function getInventories(req, res) {
  new Promise((resolve, reject) => {
    db.all("SELECT * FROM inventories", (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  }).then((response) => {
    return res.send(response);
  });
}

function getInventoryById(req, res) {
  const { id } = req.params;
  console.log("getInventoryById ran", id);
  new Promise((resolve, reject) => {
    db.all("SELECT * FROM inventories where id=(?)", id, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  }).then((response) => {
    return res.send(response);
  });
}

module.exports = {
  getInventories,
  getInventoryById,
};
