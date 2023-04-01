# Steam DB System

## Repo Layout

`client/`: FrontEnd of the project <br />
`server/`: BackEnd of the project, sql commands used in backends are mostly in `routes/`. Loading database to the project is in `models/index.js`  <br />
`SQL/`: All you need on how to create and load our sample/production database, as well as `test-sample.sql`, `test-production.sql` and their outputs. We are using `steamdb.json` as our data source <br />
`database/`: Contains the data we use (toy & production) <br />

## Project Startup

**!! If first time starting this project, please run `./Setup.sh` which sets up the dependency, user privilege and schema !!**

<!---

Inside Command line, Login in MySql and do setup. **Only do this when first starting**:

```sql
mysql -u root -p mysql
DROP SCHEMA IF EXISTS steamdb;
CREATE SCHEMA IF NOT EXISTS steamdb;
CREATE USER IF NOT EXISTS 'newuser'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON steamdb.* TO 'newuser'@'localhost';
```

-->

Under the project directory, run `./Run.sh` to start up both backend and frontend. The web will pop up for you

## Project Features that (Currently) Supported

- Posts(Review)
- Posts Deletion (Must be owner of the post)
- Comments for the Posts(Review) (Must Login)
- Comments Deletion (Must be owner of the comments)
- Different Games Display Category
- Game Details Page
- Game Details Page showing its reviews
- Profile Page for Users
- Profile Page displaying owned games
- Profile Page displaying reviews the user posted
- User Login
- User Register
- Like/Unlike a Post
- Password protection
- JWT Authentication

## To generate sql data
See the two jupyter notebooks in directory `database/`.
