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

const executeSql = async (sqlArray) => {
    let counter = 0
    for (const sql of sqlArray) {
        if (!sql.length) {
            return
        }
        console.log(counter++)

        try {
            const res = await db.pool.query(sql)
            console.log("1: ", res)
        } catch (err)  {
            console.log("err: ", err)
        }
    }
    console.log("finished!")
    return 1
}

const loadDataFromSql = (filePath) => {

    let dataSql = fs.readFileSync(path.join(__dirname, filePath)).toString();
    dataSql = dataSql.replace(/(\r\n|\n|\r)/gm, "");
    // console.log("dataSQL:", dataSql)
    // let counter = 0
    const sentences = dataSql.split(";")
    return executeSql(sentences)

}

loadDataFromSql("../../SQL/createtables.sql").then(result => {
    console.log("result outter", result)
    db.pool.query(
        "select * from game limit 1"
    ).then(([data, metaData]) => {
            console.log("data: ", data)
            if (data.length == 0) {
                loadDataFromSql("../../SQL/insert.sql").then(result => {
                    console.log("result inner: ", result)
                })
            }
        }
    ).catch(err => {
            console.log("Errorafa: ", err)
            loadDataFromSql("../../SQL/insert.sql")
        }
    )
}).catch(err => console.log("outer err: ", err))




module.exports = db;
