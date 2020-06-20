const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../data/db-model.js');
const jwt = require('jsonwebtoken');

const router = express();

router.post('/register', validateUser, async (req, res) => {
  const user = req.body;
  user.password = bcrypt.hashSync(user.password, 10);
  try {
    const registered = await db.add(user)
    // a jwt should be generated
    const token = generateToken(registered)
    res.status(201).json({
      message: 'Registered success',
      token
    })
  }
  catch ({ name, code, detail, constraint }) {
    res.status(500).json({ name, code, detail, constraint })
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
    res.status(500).json({ message: 'Internal error', err })
  }
});

function generateToken(user) {
  // header payload and verify signature
  // payload => username, id, roles, exp date
  // v signature => a secret
  const payload = {
    sub: user.id,
    username: user.username
  }

  const options = {
    expiresIn: '1d'
  }

  return jwt.sign(payload, process.env.JWT_TOKEN, options)
}

function validateUser(req, res, next) {
  if (!req.body.username || !req.body.password) {
    res.json({ message: 'Invalid credentials' })
  } else {
    next()
  }
}

module.exports = router;