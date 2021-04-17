const Sequelize = require('sequelize');
class User {
    constructor({mySqlDB}){
        this._db = mySqlDB;
    }
    getInit(){
        const user = this._db.define('users',{
            userId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull:false,
                autoIntement:true
            },
            userEmail: {
                type: Sequelize.STRING,
                allowNull:false
            },
            userPassword:{
                type: Sequelize.STRING,
                allowNull:false
            },
            userName:{
                type:Sequelize.STRING,
                allowNull:false
            },
            userLastname:{
                type:Sequelize.STRING,
                allowNull:false
            },
            rolId:{
                type:Sequelize.INTEGER,
                allowNull:false
            },
            userCreation:{
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW 
            }
        },{
            
            timestamps:false
        });
        user.sync({force : false}).
            then(()=>{
                console.log("tabla User sincronizada");
            });
        return user;
    };

}
module.exports = User;