const Sequelize = require('sequelize');
const createDB = require('../util/createDB');
const makeDB = createDB.pikachu;
const sayPika = createDB.raichu;

// I know i can use object destructuring to do the thing
// {createDB.pikachu, createDB.raichu} = require('../util/createDB');


makeDB();

// Create a connection object
const sequelize = new Sequelize(
  // Database name
  'library_db',
  // User
  'root',
  // Password
  'root1234',
  {
    // Database location
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
  
);

sayPika();

module.exports = sequelize;
