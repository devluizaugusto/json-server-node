const jsonServer = require('json-server');
const data = require('./db.json');

const server = jsonServer.create();
const router = jsonServer.router(data);
const middLewares = jsonServer.defaults();

server.use(middLewares);
server.use(jsonServer.bodyParser);
server.use(router);

router.db._.mixin({
   write: () => true
});

server.listen(process.env.PORT || 5000, () => {
    console.log('JSON server is running');
});