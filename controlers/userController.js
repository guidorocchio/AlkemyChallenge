let db = require('../db');
let {check, validationResult, body} = require ("express-validator");
let bcrypt = require ('bcrypt');


let userController = {

    "createUser": async (req, res, next) => {
        let addUser = async (req, res) =>{
            let userToAdd = {
                email:req.body.email,
                password:bcrypt.hashSync(req.body.password, 10)
            }
        const adder = await db.User.create(userToAdd);
        return res.json({succes:"Se agrego correctamente"});
        }
        addUser(req, res).catch(err =>console.log(err));         
    }, 

    "deleteUser":async (req,res)=>{
        await User.destroy({
            where: {id: req.params.userId}
        })
        res.json({succes: "se borro el usuario"})
    },

    "loginPost": async (req, res)=>{
        let userFound = await db.User.findOne({where:{email:req.body.email}});
        console.log(userFound)
        if (bcrypt.compareSync(req.body.password, userFound.password)){
            req.session.userId = userFound.id; 
            res.json(req.session.userId);
        } else{
            res.json([{msg:"Usuario o Contraseña invalidos"}])
        }
    }


    
};

module.exports = userController;