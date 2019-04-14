# node-api-with-postgres-DB
> A simple node API with express connected to a postgreSQL database

## Cloning Repository
> git clone https://github.com/manaraph/node-api-with-postgres-DB.git

## Setting up PostgreSQL database using the command line
``` bash
> psql -U postgres                                  # Use the default user `postgres` Then enter your password for postgres
> \conninfo                                         # View your connection information
> CREATE ROLE me WITH LOGIN PASSWORD 'password';    # Create a new user `me` with with password `password`
> ALTER ROLE me CREATEDB;                           # Give user `me` access to create databases
> \du                                               # Lists all roles/users
> \q                                                # Exit from the default session
> psql -d postgres -U me                            # Connect as user me, and login using the password: `password`
> CREATE DATABASE api;                              # Create a database API
> \list                                             # Lists all avaialble database
> \c api                                            # connect to the database `api`
> api=> CREATE TABLE users (           
    ID SERIAL PRIMARY KEY,
    name VARCHAR(30),
    email VARCHAR(30)
    );                                              # Create table users with two field and auto-incrementing primary id
> INSERT INTO users (name, email)
  VALUES ('Jerry', 'jerry@example.com'), 
  ('George', 'george@example.com');                 # Insert 2 entries to users
> CREATE TABLE data(ID VARCHAR(100),NAME VARCHAR(50),ADDRESS VARCHAR(100),PHONE_NUMBER VARCHAR(100),EMAIL VARCHAR(100),COMPANY VARCHAR(100),DATE_REGISTERED VARCHAR(50),LAST_UPDATED VARCHAR(50))
> \COPY data(ID,NAME,ADDRESS,PHONE_NUMBER,EMAIL,COMPANY,DATE_REGISTERED,LAST_UPDATED) from '.\src\data\data.csv' delimiter ',' csv header;
```
## Setting up the noSQL Database
``` bash
> psql -U postgres                                                  # Use the default user `postgres` Then enter your password for postgres
> \conninfo                                                         # View your connection information
> CREATE ROLE me WITH LOGIN PASSWORD 'password';                    # Create a new user `me` with with password `password`
> ALTER ROLE me CREATEDB;                                           # Give user `me` access to create databases
> \du                                                               # Lists all roles/users
> \q                                                                # Exit from the default session
> psql -d postgres -U me                                            # Use the user me, and login using the password: `password`
> CREATE DATABASE api;                                              # Create a database API
> \list                                                             # Lists all avaialble database
> \c api  
> CREATE TABLE jsondt( data JSON);
# > INSERT INTO jsondt(data) 
#     select json_build_array(
#     ID,NAME,ADDRESS,PHONE_NUMBER,EMAIL,
#     COMPANY,DATE_REGISTERED,LAST_UPDATED) 
#     FROM data;                                                    #Inserts the json data from data table as arrays

> INSERT INTO jsondt(data) 
SELECT json_build_object( 'id',ID,'name',NAME,'address',ADDRESS,
'phone',PHONE_NUMBER, 'email',EMAIL,'company',COMPANY,
'registered',DATE_REGISTERED,'updated',LAST_UPDATED) from data;     #Inserts the json data from data table as arrays
> SELECT * FROM jsondt                                              # View all data on jsondt table
```

## Installation and running app with npm
``` bash

cd node-api-with-postgres-DB

# install dependencies
npm install 

# serve app at localhost:3000
npm start

```
## Installation and running app with yarn
``` bash

cd node-api-with-postgres-DB

# install dependencies
yarn 

# serve app at localhost:3000
yarn start

```
## API Endpoints
You can use postman or even curl to reach out to the following api endpoints:

URL Endpoint	|               HTTP Request   | Resource Accessed | Access Type|
----------------|-----------------|-------------|------------------
/   |      GET	| Display home with api info | public
/data   |      GET	| Retrieve json data | public
/users   |      GET	| Retrieve all users| public
/users	  |     POST	| Create new user | public
/users/<user_id>            |  	GET	    | Retrieve a user by ID | public
/users/<user_id>            |  	PUT	    | Retrieve a user by ID | public
/users/<user_id>            |  	DELETE	    | Delete a user by ID | public

## Testing API with curl
- If you are running this command from powershell and you encounter the error `A positional parameter cannot be found that accepts argument` run the command below to fix it. 
> Remove-item alias:curl

- See details of the fix above on this [link](https://stackoverflow.com/questions/25044010/running-curl-on-64-bit-windows).

- Ensure that your server is running and connection has been established with the postgres database before running these request.

``` bash
# Display home with api info 
# This can also view on your browser by visiting the link  => http://localhost:3000/
> curl -v http://localhost:3000/

# GET => Retrieve all users
# This can also view on your browser by visiting the link  => http://localhost:3000/users
> curl -v http://localhost:3000/users

# GET => Retrieve a users with id 1
# This can also view on your browser by visiting the link  => http://localhost:3000/users/1
> curl -v http://localhost:3000/users/1

# POST => Create a new user
> curl --data "name=m4&email=m4@example.com" http://localhost:3000/users

# PUT => Update user with ID 1
> curl -X PUT -d "name=Kramer" -d "email=kramer@example.com" http://localhost:3000/users/1

# DELETE => Delete user with ID 1
> curl -X "DELETE" http://localhost:3000/users/1

```

## Credits 
Adapted from:
- [Setting up a RESTful API with Node.js and PostgreSQL](https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8) by Tania Rascia
- [Importing csv into PostgreSQL table](http://www.postgresqltutorial.com/import-csv-file-into-posgresql-table/) 
- [PostgreSQL as NoSQL with Data Validation](https://www.endpoint.com/blog/2013/06/03/postgresql-as-nosql-with-data-validation)

Resources: 
- [Generation of random data](https://www.generatedata.com/)