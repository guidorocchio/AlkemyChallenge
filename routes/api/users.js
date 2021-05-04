const router= require('express').Router();
const {User} = require('../../db');
let { check, validationResult, body } = require("express-validator");
let userMiddlewares = require('../../middlewares/userMiddlewares')
let userController = require("../../controlers/userController");
const user = require('../../models/user');
let bcrypt = require ('bcrypt');




// traer todos los usuarios (pa que sirve?)
router.get('/', async(req, res)=>{
    const users= await User.findAll();
    res.json(users);
});


// agregar un user a la base de datos
router.post('/register', userMiddlewares.guest,
    [
    check("email").isEmail().withMessage("El email ingresado no es valido"),
    check("password").isLength({min:6}).withMessage("la contraseña debe tener al menos 6 caracteres"), 
    check("Cpassword").custom((value, {req})=>{
        if(value!==req.body.password){ 
            throw new Error("las password no coinciden")
        }   
        return true; 
    })
    ] 
, userMiddlewares.checkForErrors, userMiddlewares.checkForDuplicate, userController.createUser);


// para loggearse
router.post('/login',userMiddlewares.guest,
[check("email").isEmail().withMessage("El email ingresado no es valido"),
check("password").isLength({min:6}).withMessage("la contraseña debe tener al menos 6 caracteres")
]
,userMiddlewares.checkForErrors, userController.loginPost);


//eliminar usuario con id = req.params.userId
router.delete('/:userId',userMiddlewares.auth, userController.deleteUser);


module.exports = router;