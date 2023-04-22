const Role = require('../models/role');

const isValidRole = async(role = '') => {
    const existsRole = await Role.findOne({ role });
    if ( !existsRole ) {
        throw new Error(`El rol ${ role } no esta registrado en la BD`);
    }
}

module.exports = {
    isValidRole
}