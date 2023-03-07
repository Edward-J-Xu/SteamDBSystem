# 348-Project

## Repo Layout

`client/`: FrontEnd of the project <br />
`server/`: BackEnd of the project, sql commands used in backends are mostly in `createTable.sql` and `routes/` <br />
`SQL/`: All you need on how to create and load our sample database, as well as `test-sample.sql` <br />
`database/`: Contains the data we use as well as toy data <br />

## Project Startup

Inside Command line, Login in MySql and do setup:

```sql
mysql -u root -p mysql
CREATE SCHEMA IF NOT EXISTS steamdb;
CREATE USER IF NOT EXISTS 'newuser'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON steamdb.* TO 'newuser'@'localhost';
```

Then under the project directory, run `./Run.sh` to start up both backend and frontend

## Project Features that (Currently) Supported

- Posts(Review)
- Comments for the Posts(Review) (Must Login)
- Login
- Register
- Password protection
- JWT Authentication

