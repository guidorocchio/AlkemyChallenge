const router= require('express').Router();
const {Transaction, User, Category,Type } = require('../../db');
let userMiddlewares = require('../../middlewares/userMiddlewares')
let { check, validationResult, body } = require("express-validator");
let transactionController = require("../../controlers/transactionController");


//HACER MIDDLEWARE EN TODAS LAS USERID PARA QUE SOLO SE PUEDA ACCEDER CON ESE USER


// para ver todas las transacciones de un usuario
router.get('/:userId',userMiddlewares.auth, transactionController.findAll);


//para crear una transaccion
router.post('/:userId',userMiddlewares.auth, 
[
    check("concept").isLength({min:3}).withMessage("el concepto debe tener al menos 3 letras"),
    check("ammount").isNumeric().withMessage("la cantidad debe ser numerica").isLength({min:1}).withMessage('la cantidad debe tener al menos 1 digito'),
],
userMiddlewares.checkForErrors, transactionController.create);

//para ver una transaccion especifica
router.get('/:userId/:transactionId',userMiddlewares.auth, transactionController.getOne);

//para borrar una transaccion en especifico
router.delete('/:userId/:transactionId',userMiddlewares.auth, transactionController.deleteOne);

//para editar una transaccion
router.put('/:userId/:transactionId',userMiddlewares.auth, transactionController.editOne);

module.exports = router;