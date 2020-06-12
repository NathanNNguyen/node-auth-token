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
    connection: process.env.DATABASE_URL,
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
