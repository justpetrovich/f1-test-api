var jsonServer = require('json-server');
var bodyParser = require('body-parser')
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
var port = Number(process.env.PORT || 3000);
server.use(middlewares);
server.use(bodyParser.json())
server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now()
    }
    next()
})

server.use(router);
server.listen(port, function () {
    console.log('JSON Server is running')
});