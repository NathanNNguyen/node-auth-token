# Authentication using JSON Web Tokens (JWTs)

Simple API with a single user table that allows users to register and login

## Topics

- Authentication.
- Express Middleware.
- JSON Web Tokens (JWTs).
- Hashing Passwords.

## Description

In this project we'll implement a full authentication workflow (register/login/logout/restrict endpoint) using `Node.js`, `Express`, `SQLite` and `JSON Web Tokens` on the server.

## Assignment

Use Node.js, Express and Knex to build an API that provides _Authentication_ functionality using SQLite to store _User_ information.

The user schema should include: `username` and `password`.

Use **JSON Web Tokens** to keep users authenticated across requests.

### Design and build the following endpoints.

| Method | Endpoint      | Description                                                                                                                                                                                                                                                            |
| ------ | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /auth/register | Creates a `user` using the information sent inside the `body` of the request. **Hash the password** before saving the user to the database.                                                                                                                            |
| POST   | /auth/login    | Use the credentials sent inside the `body` to authenticate the user. On successful login, create a new JWT with the user id as the subject and send it back to the client. If login fails, respond with the correct status code and the message: 'You shall not pass!' |
