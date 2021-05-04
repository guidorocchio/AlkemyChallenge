'use strict';
module.exports= (sequelize, dataType)=>{
    const Category = sequelize.define('Category',{
       id : {
            type: dataType.INTEGER(11),
            primaryKey:true,
            autoIncrement:true
        },
        category : {
            type:dataType.STRING(100),
            allowNull: false
        }
    },{
        tableName:"categories"
    });


    return Category

}



