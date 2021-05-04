'use strict';

module.exports= (sequelize, dataType)=>{

    // defino nombreModelo, atributos, opciones

    const Transaction = sequelize.define('Transaction',{
       id : {
            type: dataType.INTEGER(11),
            primaryKey:true,
            autoIncrement:true
        },
        concept : {
            type:dataType.STRING(100),
            allowNull: false
        },
        ammount: {
            type: dataType.INTEGER(11),
            allowNull:false
        }
    },{
        tableName:"transactions"
    });
   

    return Transaction

}
