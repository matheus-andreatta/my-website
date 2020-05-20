const Blog = require('../../app/models/Blog')


exports.all = function(req,res){

    Blog.all(function(posts){
        return res.render("blog", {posts})
    })
}

exports.show = function(req,res){
    Blog.find(req.params.id, function(post){
        if(!post) return res.send('Postagem não encontrada');
        return res.render("post", { post });
    })
}

exports.post = function(req,res){
    //VALIDAÇÃO DOS DADOS
    const keys = Object.keys(req.body);

    for(key of keys){
        if(req.body[key] == "" ){
            return res.send('Falta coisa ai doidão!');
        }
    }

    Blog.create(req.body, function (blog) {
        return res.redirect(`/blog/postagem/${blog.id}`)
    })

   

}