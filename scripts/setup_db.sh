#!/usr/bin/env bash
mysql -u root -e "create database turbinedb;"
mysql -u root -e "create user 'turbine'@'localhost';"
mysql -u root -e "GRANT ALL PRIVILEGES ON turbinedb.* TO 'turbine'@'localhost';"
