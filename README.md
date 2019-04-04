# node-api-with-postgres-DB
> A simple node API with express connected to a postgreSQL database

## API Endpoints
You can use postman or even curl to reach out to the following api endpoints:

URL Endpoint	|               HTTP Request   | Resource Accessed | Access Type|
----------------|-----------------|-------------|------------------
/   |      GET	| Display home with api info | public
/users   |      GET	| Retrieve all users| public
/users	  |     POST	| Create new user | public
/users/<user_id>            |  	GET	    | Retrieve a user by ID | public
/users/<user_id>            |  	PUT	    | Retrieve a user by ID | public
/users/<user_id>            |  	DELETE	    | Delete a user by ID | public

## Credits 
- Adapted from [Setting up a RESTful API with Node.js and PostgreSQL](https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8) by Tania Rascia