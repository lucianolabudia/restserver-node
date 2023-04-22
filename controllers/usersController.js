const { response } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/user');


const usersGet = (req, res = response) => { 

    const query = req.query;

    res.json({
        msg: 'get API - Controller',
        query
    })
}

const usersPost = async(req, res = response) => { 

    const { name, email, password, role } = req.body; 
    const user = new User({ name, email, password, role });

    // Verifica si el email existe

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync( password, salt );

    // Guardar en BD


    await user.save();

    res.json({
        user
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