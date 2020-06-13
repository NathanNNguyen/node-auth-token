const server = require('./api/server.js');

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`\n Listening on PORT ${PORT} ... \n`)
});