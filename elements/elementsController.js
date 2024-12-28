const db = require("../db");

function getElements(req, res) {
  new Promise((resolve, reject) => {
    db.all("SELECT * FROM elements", (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  }).then((response) => {
    return res.send(response);
  });
}

function getElementById(req, res) {
  const { id } = req.params;
  console.log("getElementById ran", id);
  new Promise((resolve, reject) => {
    db.all("SELECT * FROM elements where element_id=(?)", id, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  }).then((response) => {
    return res.send(response);
  });
}

module.exports = {
  getElements,
  getElementById,
};
