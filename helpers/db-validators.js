const Role = require('../models/role');
const User = require('../models/user');


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



module.exports = {
    isValidRole,
    existsEmail
}