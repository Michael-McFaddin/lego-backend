const db = require("../db");

function getThemes(req, res) {
  new Promise((resolve, reject) => {
    db.all("SELECT * FROM themes", (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  }).then((response) => {
    return res.send(response);
  });
}

function getThemesById(req, res) {
  const { id } = req.params;
  new Promise((resolve, reject) => {
    db.all("SELECT * FROM themes where id=(?)", id, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  }).then((response) => {
    return res.send(response);
  });
}

module.exports = {
  getThemes,
  getThemesById,
};
