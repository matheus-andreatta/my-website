const db = require('../../config/db');

module.exports = { 
    all(callback) {
        db.query(`SELECT * FROM posts`, function(err, results){
            if(err) throw `Database Erro!`;
            callback (results.rows);
        })
    },
    create(data, callback){
        const query = `
            INSERT INTO posts (
                text,
                title,
                category
            ) VALUES ($1,$2,$3)
            RETURNING ID
        `

        const values = [
            data.text,
            data.title,
            data.category
        ]

        db.query(query, values, function(err, results){
            if(err) throw 'Database error';

            callback(results.rows[0]);

        })
    },
    find(id,callback){
        db.query(`SELECT * FROM posts WHERE id = $1`,[id], function(err, results){
            if(err) throw 'Database error';
            callback (results.rows[0]);
        })
    }
}