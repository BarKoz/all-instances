# Installation
you need postgreSQL DB and configure it
###install on Linux postgreSQL (you can use WSL on windows)
tutorial: https://www.postgresqltutorial.com/install-postgresql-linux/
###login on postres and add user and db
1. su postgres
2. psql
3. create database nameDB
4. CREATE USER userName WITH ENCRYPTED PASSWORD 'password'
5. GRANT ALL privileges on database nameDB to userName;
###install dependencies
1. npm install
2. rename .env-template to .env and configure 

###Run
nodemon: `npm run dev`
OR
node: `npm start`

