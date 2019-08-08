//will listen for connections, run the server.

const server = require('./api/server');


const port = 8000;

server.listen(port, () => console.log(`API on ${port}`))