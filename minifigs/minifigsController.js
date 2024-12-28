const db = require("../db");

function getMinifigs(req, res) {
  new Promise((resolve, reject) => {
    db.all("SELECT * FROM minifigs", (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  }).then((response) => {
    console.log("response.length", response.length);
    return res.send(response);
  });
}

function getMinifigsById(req, res) {
  const { id } = req.params;
  new Promise((resolve, reject) => {
    db.all("SELECT * FROM minifigs where fig_num=(?)", id, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  }).then((response) => {
    return res.send(response);
  });
}

module.exports = {
  getMinifigs,
  getMinifigsById,
};
