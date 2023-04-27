const { Router } = require('express');
const { usersGet, usersPost, usersPut, usersPatch, usersDelete } = require('../controllers/usersController');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validateFields');
const { isValidRole, existsEmail, existsUserID } = require('../helpers/db-validators');
const { validateJWT } = require('../middlewares/validateJWT');


const router = Router();


router.get('/', usersGet );

router.post('/', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser mas de 6 letras').isLength({ min: 6 }),
    check('email').custom( existsEmail ),
    // check('role', 'No es un rol valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('role').custom( isValidRole ),
    validateFields
], usersPost );

router.put('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existsUserID ),
    check('role').custom( isValidRole ),
    validateFields
],usersPut );

router.patch('/', usersPatch );

router.delete('/:id', [
    validateJWT,
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existsUserID ),
    validateFields
], usersDelete);



module.exports = router;