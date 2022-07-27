

const mysql = require("mysql2");

exports.pikachu = function () {
  // Open the connection to MySQL server
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root1234",
  });
  //drop previous
  connection.query(
    `DROP DATABASE library_db`,
    function (err, results) {
      console.log(results);
      console.log(err);
    }
  ).then
  connection.query(
    `SHOW DATABASES`,
    function (err, results) {
      console.log(results);
      console.log(err);
    }
  );
  // Run create database statement
  connection.query(
    `CREATE DATABASE library_db`,
    function (err, results) {
      console.log(results);
      console.log(err);
    }
  ).then
  connection.query(
    `SHOW DATABASES`,
    function (err, results) {
      console.log(results);
      console.log(err);
    }
  );
  // Close the connection
  connection.end();
  }


  exports.raichu = function () {
    console.log("pika pika")
    }
  