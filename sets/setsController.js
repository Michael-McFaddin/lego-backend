const db = require("../db");

function getSets(req, res) {
  new Promise((resolve, reject) => {
    db.all("SELECT * FROM sets", (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  }).then((response) => {
    return res.send(response);
  });
}

function getSetsById(req, res) {
  const { id } = req.params;
  new Promise((resolve, reject) => {
    db.all("SELECT * FROM sets where set_num=(?)", id, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  }).then((response) => {
    return res.send(response);
  });
}

module.exports = {
  getSets,
  getSetsById,
};
