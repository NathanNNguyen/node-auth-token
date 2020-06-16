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

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
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

  // module.exports = {
  //   client: 'pg',
  //   connection: {
  //     host: process.env.HOST,
  //     user: process.env.USERNAME,
  //     password: process.env.PASSWORD,
  //     database: process.env.DATABASE
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations',
  //   },
  //   development: {
  //     client: 'pg',
  //     connection: 'postgres://localhost/users',
  //     migrations: {
  //       directory: './data/migrations'
  //     }
  //   },
  //   production: {
  //     client: 'pg',
  //     connection: process.env.DATABASE_URL,
  //     pool: {
  //       min: 2,
  //       max: 100,
  //     },
  //     migrations: {
  //       directory: './data/migrations',
  //       tableName: 'users',
  //     },
  //   },
  // };

};
