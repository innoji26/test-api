const Sequelize = require("sequelize");
const config = require("../config/dbConfig.js");

const database = new Sequelize(config.db, config.user, config.pass, {
    host: config.host,
    logging: console.log,
    maxConcurrentQueries: 100,
    dialect: config.dialect,
    pool: { maxConnections: 5, maxIdleTime: 30 },
    language: "en",
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = database;

db.user = require("./users.js")(database, Sequelize);
db.news = require("./news.js")(database, Sequelize);

db.user.hasMany(db.news, { foreignKey: "idUser" });
db.news.belongsTo(db.user, { foreignKey: "idUser" });
module.exports = db;