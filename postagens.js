const fs = require('fs')
const data = require('./data.json');

exports.show = function(req,res){
    const { id } = req.params;

    const foundPost = data.posts.find(function(post){
        return id == post.id;
    })

    if (!foundPost) return res.send('Postagem não foi encontrada');
    
    const post = {
        ...foundPost,
        created_at: new Intl.DateTimeFormat('pt-BR').format(foundPost.created_at)
    }
    return res.render('post', { post });
}

exports.post = function(req,res){
    //VALIDAÇÃO DOS DADOS
    const keys = Object.keys(req.body);
    for(key of keys){
        if(req.body[key] == "" ){
            return res.send('Falta coisa ai doidão!');
        }
    }

    let { title, categoria, text} = req.body;

    //TRATAMENTO DOS DADOS
    const id = Number(data.posts.length + 1)
    const created_at = Date.now();

    data.posts.push({
        id,
        title,
        categoria,
        text,
        created_at
    });

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send('Mano, rolou algo errado na hora de gravar os dados!');

        return res.redirect('/create-post');
    })

}