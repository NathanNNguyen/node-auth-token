const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../data/db-model.js');
const jwt = require('jsonwebtoken');

const router = express();

router.post('/register', async (req, res) => {
  console.log('register')

  const user = req.body;
  console.log(req.body)
  user.password = bcrypt.hashSync(user.password, 10);
  try {
    const registered = await db.add(user)
    console.log('registered1111')
    // a jwt should be generated
    const token = generateToken(registered)
    res.status(201).json({
      user: registered,
      token
    })
  }
  catch (err) {
    res.status(500).json({ message: err.detail, err })
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await db.findBy({ username });
    if (user && bcrypt.compareSync(password, user.password)) { // real password first then db password

      // a jwt should be generated
      const token = generateToken(user)

      res.status(200).json({
        token,
        username: user.username,
        message: `Welcome back, ${user.username}!`
      })
    } else {
      res.status(401).json({ message: `Invalid credentials` })
    }
  }
  catch (err) {
    res.status(500).json({ message: 'Invalid username or password', err })
  }
});

function generateToken(user) {
  // header payload and verify signature
  // payload => username, id, roles, exp date
  // v signature => a secret
  console.log(user)
  const payload = {
    sub: user.id,
    username: user.username
  }

  const options = {
    expiresIn: '1d'
  }

  return jwt.sign(payload, process.env.JWT_TOKEN, options)
}

module.exports = router;