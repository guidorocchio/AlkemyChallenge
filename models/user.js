'use strict';
module.exports= (sequelize, dataType)=>{
    const User = sequelize.define('User',{
       id : {
            type: dataType.INTEGER(11),
            primaryKey:true,
            autoIncrement:true
        },
        email: {
            type:dataType.STRING(100),
            allowNull: false
        },
        password : {
            type:dataType.STRING(100),
            allowNull: false
        }
    },{
        tableName:"users"
    });



    return User

}
