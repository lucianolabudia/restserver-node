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

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync( password, salt );

    // Guardar en BD
    await user.save();

    res.json({
        user
    });
}

const usersPut = async(req, res = response) => { 

    const { id } = req.params;
    const { password, google, email, ...rest } = req.body;

    // TODO validar contra base de datos
    if ( password ) {
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        rest.password = bcryptjs.hashSync( password, salt );
    }

    const user = await User.findByIdAndUpdate( id, rest );

    res.json({
        msg: 'put API - Controller',
        user
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