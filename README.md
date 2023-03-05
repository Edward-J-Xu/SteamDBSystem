# 348-Project

## Getting started

Inside Command line:

```sql
mysql -u root -p mysql
CREATE SCHEMA IF NOT EXISTS steamdb;
CREATE USER IF NOT EXISTS 'newuser'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON steamdb.* TO 'newuser'@'localhost';
```

Then under the project directory, run `./Run.sh` to start up both backend and frontend

