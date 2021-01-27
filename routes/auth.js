const { Router } = require('express');
const { crearUsuario, loginUsuario, renewToken } = require('../controllers/auth');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarToken } = require('../middlewares/validarToken');
const router = Router();


//REGISTER
router.post(
    '/new', 
    [ 
        check( 'name', 'El nombre es obligatorio' ).not().isEmpty(),
        check( 'email', 'El email es obligatorio' ).isEmail(),
        check( 'password', 'El password debe de ser de 6 caracteres' ).isLength( { min: 6 } ),
        validarCampos
    ], 
    crearUsuario );

//LOGIN
router.post(
    '/',
    [ 
        check( 'email', 'El email es obligatorio' ).isEmail(),
        check( 'password', 'El password debe de ser de 6 caracteres' ).isLength( { min: 6 } ),
        validarCampos
    ],  
    loginUsuario );

//RENEW TOKEN
router.get('/renew', validarToken, renewToken );

module.exports = router;

