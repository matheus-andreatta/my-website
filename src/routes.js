const express = require('express');
const routes = express.Router();
const postagens = require('./app/controllers/postagens.js')

routes.get('/', function(req,res){
    return res.render("index");
})

routes.get('/blog', postagens.all);
 
routes.get('/blog/create-post', function(req,res){
    return res.render("create-post");
})

routes.post('/create', postagens.post);

routes.get('/blog/postagem/:id', postagens.show);


module.exports = routes;