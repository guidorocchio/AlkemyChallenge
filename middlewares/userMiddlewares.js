let { check, validationResult, body } = require("express-validator");
let express = require("express");
let db = require('../db');


let userMiddleware ={ 
    "checkForErrors": (req,res,next) => {             
        // si no hay errores en express-validator next();
        let {errors} = validationResult(req, res);  
        console.log(errors);
        if(errors.length!=0){
            res.json(errors);
        }else{     
         next();
        }
    },
    'checkForDuplicate': async (req,res,next)=>{
        //si no hay otro usuario con el mismo nombre next();
        let usuario = await db.User.findOne({where: {email: req.body.email}});
        if(usuario){
            res.json({duplicatedUser:true})
        }else{
        next();
        } 
    },

    'guest': (req, res, next)=>{
        if(req.session.userId==undefined){
            next();
        } else {
            res.json({"logged":true})
        }
    },

    'auth':  (req, res, next)=>{
        if(req.session.userId==req.params.userId){
            next();
        } else {
           res.json({"logged":false});
        }
    },

}

module.exports = userMiddleware;