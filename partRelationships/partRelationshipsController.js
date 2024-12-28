const db = require("../db");

function getPartRelationships(req, res) {
  new Promise((resolve, reject) => {
    db.all("SELECT * FROM part_relationships", (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  }).then((response) => {
    return res.send(response);
  });
}

function getPartRelationshipsByRelType(req, res) {
  const { id } = req.params;
  new Promise((resolve, reject) => {
    db.all(
      "SELECT * FROM part_relationships where rel_type=(?)",
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
  getPartRelationships,
  getPartRelationshipsByRelType,
};
