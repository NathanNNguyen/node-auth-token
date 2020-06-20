// Update with your config settings.
const pgConnection = "postgresql://postgres@localhost/users";

module.exports = {

  development: {
    client: 'pg',
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./data/migrations",
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    }
  }


  //   // Update with your config settings.

  // AWS cloud server

  // module.exports = {
  //   client: 'pg',
  //   connection: {
  //     host: process.env.HOST,
  //     user: process.env.USERNAME,
  //     password: process.env.PASSWORD,
  //     database: process.env.DATABASE
  //   },
  // };

};
