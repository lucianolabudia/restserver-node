const { Router } = require('express');
const { usersGet, usersPost, usersPut, usersPatch, usersDelete } = require('../controllers/usersController');


const router = Router();



router.get('/', usersGet );

router.post('/', usersPost );

router.put('/', usersPut );

router.patch('/', usersPatch );

router.delete('/', usersDelete);




module.exports = router;