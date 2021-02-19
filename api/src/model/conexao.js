
const mysql =  require ('mysql');

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "repositorio",
});

module.exports = db; 