const Sequelize = require('sequelize');
class User {
    constructor({mySqlDB}){
        this._db = mySqlDB;
    }
    getInit(){
        const user = this._db.define('tb_users',{
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            name: {
                type: Sequelize.TEXT
            },
            lastname:{
                type: Sequelize.TEXT
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