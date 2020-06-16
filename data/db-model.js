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
    // .returning(['id', 'username'])
    .insert(userData)
  // .then(arr => {
  //   return findById(arr[0].username)
  // })
};

function findBy(query) {
  return db('users').where(query).first();
}

// function findById(id) {
//   return db('users').where({ id }).first();
// };