const { Router } = require('express');
const { validarToken } = require('../middlewares/validarToken');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { isDate } = require('../helpers/isDate');

const router = Router(); 

// con el use aplico los midleware necesarios de manera global en todas
// las rutas de este archivo y si quiero que solo se aplique en algunas
// rutas solo debop ponerlo antes de las mismas
router.use( validarToken );

//OBTENER EVENTO
router.get('/', getEventos);

// CREAR EVENTOS
router.post('/',
    [ 
        check( 'title', 'El title es obligatorio' ).not().isEmpty(),
        check( 'start', 'La fecha de inicio es obligatoria' ).custom( isDate ),
        check( 'end', 'La fecha de finalizacion es obligatoria' ).custom( isDate ),
        validarCampos
    ], 
    crearEvento );

// ACTUALIZAR EVENTOS
router.put('/:id', 
    [ 
        check( 'title', 'El title es obligatorio' ).not().isEmpty(),
        check( 'start', 'La fecha de inicio es obligatoria' ).custom( isDate ),
        check( 'end', 'La fecha de finalizacion es obligatoria' ).custom( isDate ),
        validarCampos
    ],
    actualizarEvento );


// ELIMINAR EVENTOS
router.delete('/:id', eliminarEvento );


module.exports = router;

