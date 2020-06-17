const db = require('./db-config.js');

module.exports = {
  findUsers,
  add,
  findBy
}

function findUsers() {
  return db('users as u').select('u.id', 'u.username');
};

function add(userData) {
  return db('users')
    // .returning(['id', 'username'])         FOR USING AWS RDS
    .insert(userData)
  // .then(arr => {
  //   return findById(arr[0].username)
  // })                                       FOR USING SQLITE3
};

function findBy(query) {
  return db('users').where(query).first();
}

// function findById(id) {
//   return db('users').where({ id }).first();
// };