'use strict';
module.exports= (sequelize, dataType)=>{
    const Type = sequelize.define('Type',{
       id : {
            type: dataType.INTEGER(11),
            primaryKey:true,
            autoIncrement:true
        },
        type : {
            type:dataType.STRING(100),
            allowNull: false
        }
    },{
        tableName:"types"
    });


    return Type

}
