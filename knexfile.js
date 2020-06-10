// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/users.db3'
    },
    migrations: {
      directory: './data/migrations'
    }
  },
  production: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: 'nathan_db'
    },
    pool: {
      min: 2,
      max: 100,
    },
    migrations: {
      directory: './data/migrations',
      tableName: 'users',
    },
  },
};
