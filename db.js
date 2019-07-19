const sequelize = require("sequelize");

const db = new sequelize("shopdb", "shopper", "shopass", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    min: 0,
    max: 5
  }
});

const User = db.define("users", {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: sequelize.STRING,
    allowNull: false
  }
});

const Product = db.define("products1", {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: sequelize.STRING,
    allowNull: false
  },
  manufacturer: sequelize.STRING,
  price: {
    type: sequelize.FLOAT,
    allowNull: false,
    defaultValue: 0.0
  }
});

db.sync()
  .then(() => console.log("database has been created"))
  .catch(error => console.error("eror database"));

exports = module.exports = {
  User,
  Product
};
