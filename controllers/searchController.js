const { response } = require('express');
const { ObjectId } = require('mongoose').Types;

const { User, Category, Product } = require('../models');


const permittedCollections = [
    'users',
    'category',
    'products',
    'roles'
];

const searchUsers = async( term = '', res = response ) => {

    const isMongoID = ObjectId.isValid( term ); //TRUE

    if ( isMongoID ) {
        const user = await User.findById( term );
        return res.json({
            results: ( user ) ? [ user ] : []
        });
    }

    const regex = new RegExp( term, 'i' );

    const users = await User.find({
        $or: [{ name: regex }, { email: regex }],
        $and: [{ status: true }]
    });

    res.json({
        results: users
    });
}


const search = ( req, res = response ) => {

    const { collection, term } = req.params

    if ( !permittedCollections.includes( collection ) ) {
        return res.status(400).json({
            msg: `Las colecciones permitidas son: ${ permittedCollections }`
        })
    }

    switch ( collection ) {
        case 'users':
            searchUsers( term, res );
            break;
    
        case 'category':
            
            break;
    
        case 'products':
            
            break;
    
        default:
            res.status(500).json({
                msg: 'Se le olvido hacer esta busqueda'
            });
    }

}



module.exports = {
    search
}