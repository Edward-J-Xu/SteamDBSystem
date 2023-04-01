#!/bin/bash

# Install client dependencies
cd client/ && npm install

# Install server dependencies
cd ../server/ && npm install

# Return to parent directory
cd ../

# Run SQL commands
mysql -u root -p << MYSQL_SCRIPT
DROP SCHEMA IF EXISTS steamdb;
CREATE SCHEMA IF NOT EXISTS steamdb;
CREATE USER IF NOT EXISTS 'newuser'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON steamdb.* TO 'newuser'@'localhost';
MYSQL_SCRIPT
