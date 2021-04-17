const Sequelize = require('sequelize');
class User {
    constructor({mySqlDB}){
        this._db = mySqlDB;
    }
    getInit(){
        const user = this._db.define('users',{
            userId: {
                type: Sequelize.INTEGER,//INT
                primaryKey: true,
                allowNull:false,
                autoIntement:true//AUTO INCREMENT
            },
            userEmail: {
                type: Sequelize.STRING,//VARCHAR
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
                allowNull:false//NOT NULL
            },
            rolId:{
                type:Sequelize.INTEGER,
                allowNull:false//NOT NULL
            },
            userCreation:{
                type: DataTypes.DATE,//TIPO DE DATO 2020/02/20 
                defaultValue: DataTypes.NOW //FECHA DE HOY
            }
        },{
            
            timestamps:false//siempre false
        });
        user.sync({force : false}).
            then(()=>{
                console.log("tabla User sincronizada");
            });
        return user;
    };

}
module.exports = User;