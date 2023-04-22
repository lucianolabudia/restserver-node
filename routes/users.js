const { Router } = require('express');
const { usersGet, usersPost, usersPut, usersPatch, usersDelete } = require('../controllers/usersController');
const { check } = require('express-validator');


const router = Router();


router.get('/', usersGet );

router.post('/', [
    check('email', 'El email no es valido').isEmail(),
], usersPost );

router.put('/:id', usersPut );

router.patch('/', usersPatch );

router.delete('/', usersDelete);



module.exports = router;