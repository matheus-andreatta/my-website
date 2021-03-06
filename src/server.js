const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');

const server = express();

server.use(express.urlencoded({
    extended: true
}))
server.use(express.static('public'));
server.use(routes);

server.set("view engine", "njk");

nunjucks.configure("src/app/views", {
    express: server
})

server.listen(6500, function () {
    console.log('server is running');
});