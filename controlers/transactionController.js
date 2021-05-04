let {user} = require('../db')
const {Transaction, User, Category, Type } = require('../db');

let transactionController = {

    "findAll": async (req, res, next)=>{
        const transactions = await Transaction.findAll({where: {UserId: req.params.userId}, include: [User, Category, Type]});
        return res.json(transactions);
    },

    "create": async(req,res)=>{
        let add = {
            concept:req.body.concept,
            ammount:req.body.ammount,
            CategoryId:req.body.categoryId,
            UserId:req.params.userId,
            TypeId:req.body.typeId
        }
        await Transaction.create(add);
        res.json({succes:true});
    },

    "getOne": async (req,res)=>{
        let one = await Transaction.findOne({where:{id:req.params.transactionId}, include:[User,Category,Type]})
        res.json(one);
    },
    
    "deleteOne":async(req,res)=>{
        await Transaction.destroy({where:{id:req.params.transactionId}});
        res.json({succes:true})
    },

    "editOne":  async(req,res)=>{
        await Transaction.update( 
         {concept:req.body.concept,
         ammount:req.body.ammount,
         CategoryId:req.body.categoryId},
         {where:{id:req.params.transactionId}}
         );
         res.json({succes:true})
    }
    
}

module.exports = transactionController;