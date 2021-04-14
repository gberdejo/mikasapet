class UserModel{
    constructor({User}){
        this._user = User.getInit();
    }
    async getUsers(){
        try {
            return await this._user.findAll();
        } catch (error) {
            console.log(error);
        }
    }
    async createUsers(user){
        console.log(user);
        try {
            return await this._user.create(user);
        } catch (error) {
            console.log(error)
        }
    }
    async updateUsers(id,user){
        try {
            return await this._user.update(user,{
                where : {
                    id :id
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = UserModel;