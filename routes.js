const express = require('express');
const routes = express.Router();
const postagens = require('./postagens')

routes.get('/', function(req,res){
    return res.render("index");
})

routes.get('/blog', function(req,res){
    return res.render("blog");
})

routes.get('/create-post', function(req,res){
    return res.render("create-post");
})

routes.post('/create', postagens.post);

routes.get('/blog/postagem/:id', postagens.show);


module.exports = routes;