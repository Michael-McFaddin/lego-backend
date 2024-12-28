const db = require("../db");

function getParts(req, res) {
  new Promise((resolve, reject) => {
    db.all("SELECT * FROM parts", (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  }).then((response) => {
    return res.send(response);
  });
}

function getPartByNumber(req, res) {
  const { id } = req.params;
  new Promise((resolve, reject) => {
    db.all("SELECT * FROM parts where part_num=(?)", id, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  }).then((response) => {
    return res.send(response);
  });
}

function getPartCategories(req, res) {
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
  getParts,
  getPartByNumber,
  getPartCategories,
};
