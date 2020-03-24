# Task Tracker

This is simple task tracker app, where you can add users and set them tasks. Here was used MySQL database.

## Installation
1. git clone https://github.com/OMatiykiv/task-tracker-node-mysql.git 
2. Launch server for MySQL locally
3. Set username and password from your MySQL database. 
4. run ```npm install``` command
5. run ```npm start``` command

## Schemas

### Status Schema
```
{
  "id": INT AUTO_INCREMENT,
  "status": VARCHAR(255)
}
```
### User Schema
```
{
  "user_id": INT AUTO_INCREMENT,
  "first_name": VARCHAR(255),
  "last_name": VARCHAR(255)
}
```

### Task Schema
```
{
  "id": INT AUTO_INCREMENT,
  "title": VARCHAR(255),
  "status": INT NOT NULL,
  "action_by": INT
}
```

## Actions

After local launch server for MySQL, this app will default use ```port 3000```. So start address will be ```localhost:3000```


### Task actions

* Using [Postman](https://www.getpostman.com/), and api endpoint **/api/tasks (GET)**, I created possibility
to get information about any task

* Using [Postman](https://www.getpostman.com/), and api endpoint **/api/tasks/id (GET)**, I created possibility
to get information about any task and put them in order by id

* Using [Postman](https://www.getpostman.com/), and api endpoint **/api/tasks/status (GET)**, I created possibility
to get information about any task and put them in order by status

* Using [Postman](https://www.getpostman.com/), and api endpoint **/api/tasks (POST)**, new task record was created
to have possibility to find it in tasks table

* Using [Postman](https://www.getpostman.com/), and api endpoint **/api/tasks/title/:taskId (PUT)**, I created possibility 
to edit required task record title, so that I would have possibility to easily update task information

* Using [Postman](https://www.getpostman.com/), and api endpoint **/api/tasks/status/:taskId (PUT)**, I created possibility 
to edit required task record status, so that I would have possibility to easily update task information

* Using [Postman](https://www.getpostman.com/), and api endpoint **/api/tasks/user/:taskId (PUT)**, I created possibility 
to edit required task record info about person who will do this task? so that I would have possibility to easily update task information

* Using [Postman](https://www.getpostman.com/), and api endpoint **/users/:taskId (DELETE)**, I created possibility
to remove required task record from tasks table


### User actions

* Using [Postman](https://www.getpostman.com/), and api endpoint **/api/users (GET)**, I created possibility
to get information about all users

* Using [Postman](https://www.getpostman.com/), and api endpoint **/api/users (POST)**, new user record was created
to have possibility to find it in users table

* Using [Postman](https://www.getpostman.com/), and api endpoint **/api/users/:userId (PUT)**, I created possibility 
to edit required user record title, so that I would have possibility to easily update user information, in this case ```first_name & last_name should by field```

* Using [Postman](https://www.getpostman.com/), and api endpoint **/api/users/:userId (DELETE)**, I created possibility
to remove required user record from Users table