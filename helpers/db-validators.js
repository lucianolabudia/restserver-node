const { Role, User, Category } = require('../models');


const isValidRole = async(role = '') => {
    const existsRole = await Role.findOne({ role });
    if ( !existsRole ) {
        throw new Error(`El rol ${ role } no esta registrado en la BD`);
    }
}

const existsEmail = async( email = '' ) => {

    // Verifica si el email existe
    const existsEmail = await User.findOne({ email });
    if (existsEmail) {
        throw new Error(`El email: ${ email }, ya esta registrado`);
        
    }
}

const existsUserID = async( id ) => {

    // Verifica si el id existe
    const existsUser = await User.findById( id );
    if ( !existsUser ) {
        throw new Error(`El id no existe ${ id }`);        
    }
}


// categoryExists
const categoryExistsId = async( id ) => {

    // Verifica si el id existe
    const existsCategory = await Category.findById( id );
    if ( !existsCategory ) {
        throw new Error(`El id no existe ${ id }`);        
    }
}


module.exports = {
    isValidRole,
    existsEmail,
    existsUserID,
    categoryExistsId
}