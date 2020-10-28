#!/usr/bin/env bash

 mysql -u root turbinedb < $(dirname $0)/truncate_data.sql
 mysql -u root turbinedb < $(dirname $0)/seed_data.sql
