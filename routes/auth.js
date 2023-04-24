const { Router } = require('express');
const { check } = require('express-validator');

const { login } = require('../controllers/authController');
const { validateFields } = require('../middlewares/validateFields');


const router = Router();

router.post('/login', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validateFields
], login );


module.exports = router;