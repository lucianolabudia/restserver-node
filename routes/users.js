const { Router } = require('express');
const { usersGet, usersPost, usersPut, usersPatch, usersDelete } = require('../controllers/usersController');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validateFields');
const { isValidRole } = require('../helpers/db-validators');


const router = Router();


router.get('/', usersGet );

router.post('/', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser mas de 6 letras').isLength({ min: 6 }),
    check('email', 'El email no es valido').isEmail(),
    // check('role', 'No es un rol valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('role').custom( isValidRole ),
    validateFields
], usersPost );

router.put('/:id', usersPut );

router.patch('/', usersPatch );

router.delete('/', usersDelete);



module.exports = router;