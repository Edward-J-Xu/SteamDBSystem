'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const mysql = require('mysql2')
const db = {};

const pool = mysql.createPool({
    host: "localhost",
    user: "newuser",
    database: "steamdb",
    password: "password"
})

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

db.pool = pool.promise();

const loadDataFromSql = (filePath) => {
    let dataSql = fs.readFileSync(path.join(__dirname, filePath)).toString();
    dataSql = dataSql.replace(/(\r\n|\n|\r)/gm, "");
    dataSql.split(";").forEach((sql) => {
        // console.log("sql: ", sql)
        if (!sql.length) {
            return
        }

        db.pool.query(sql)
            .then(rev => console.log(rev))
            .catch(err => console.log(err));
    })
}

loadDataFromSql("../createTable.sql")

db.pool.query(
    "select * from game limit 1"
).then(([data, metaData]) => {
        console.log("data: ", data)
    }
).catch(err => {
    console.log("Errorafa: ", err)
    loadDataFromSql("../../database/game.sql")
    }
)


module.exports = db;
