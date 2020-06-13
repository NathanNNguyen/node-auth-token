// Update with your config settings.

module.exports = {
  client: 'pg',
  // version: '7.2',
  connection: {
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  }
  // migrations: {
  //   directory: './data/migrations',
  //   tableName: 'users',
  // }
  // development: {
  //   client: 'sqlite3',
  //   useNullAsDefault: true,
  //   connection: {
  //     filename: './data/users.db3'
  //   },
  //   migrations: {
  //     directory: './data/migrations'
  //   }
  // },
  // production: {
  //   client: 'pg',
  //   connection: process.env.DATABASE_URL,
  //   pool: {
  //     min: 2,
  //     max: 100,
  //   },
  //   migrations: {
  //     directory: './data/migrations',
  //     tableName: 'users',
  //   },
  // },
};
