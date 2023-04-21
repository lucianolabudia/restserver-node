const { response } = require('express');


const usersGet = (req, res = response) => { 

    const query = req.query;

    res.json({
        msg: 'get API - Controller',
        query
    })
}

const usersPost = (req, res = response) => { 

    const { name, age } = req.body; 

    res.json({
        msg: 'post API - Controller',
        name,
        age
    });
}

const usersPut = (req, res = response) => { 

    const { id } = req.params;

    res.json({
        msg: 'put API - Controller',
        id
    })
}

const usersPatch = (req, res = response) => { 
    res.json({
        msg: 'patch API - Controller'
    })
}

const usersDelete = (req, res = response) => { 
    res.json({
        msg: 'delete API - Controller'
    })
}


module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete
}