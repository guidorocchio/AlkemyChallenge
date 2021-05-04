const Sequelize = require('sequelize');

const transactionModel = require('./models/transaction');
const categoryModel = require('./models/category')
const userModel = require('./models/user')
const typeModel = require('./models/type')

const sequelize = new Sequelize("xQq0BevJey", "xQq0BevJey","PRMMvhaFDt", {
    host:'remotemysql.com',
    dialect:'mysql'
});

const Category = categoryModel(sequelize, Sequelize);
const Transaction = transactionModel(sequelize, Sequelize);
const User = userModel(sequelize, Sequelize);
const Type = typeModel(sequelize, Sequelize);

// creo relacion (1:M) entre Category y Transaction (1 Category tiene muchas transacciones);
Category.hasMany(Transaction);
Transaction.belongsTo(Category);

//creo relacion de (1:M) entre USer y Transaction (1 user tiene muchas transacciones);
User.hasMany(Transaction);
Transaction.belongsTo(User);

//creo relacion de (1:M) entre Type y Transaction (1 Type tiene muchas transacciones);
Type.hasMany(Transaction);
Transaction.belongsTo(Type);

// use force true para hacer drop table y crear nuevas tablas con modificaciones, luego FORCE FALSE
sequelize.sync({force:false})
    .then(()=>{
        console.log("tablas sincronizadas")
    })

console.log(Transaction)

module.exports= {
    Category,
    Transaction,
    User, 
    Type
}