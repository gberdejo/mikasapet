class UserController{
    constructor({UserModel}){
        this._userModel = UserModel;
    }
    async getHome(req,res){
        return await res.render(ROOT_PATH_VIEWS+'/links/home',);
    }
    async getUsers(req,res){
        const user = await this._userModel.getUsers();
            return res.json({
                data: user
            });
    };
    async createUsers(req,res){
        const userData = await this._userModel.createUsers(req.body); 
        return res.json({
            data: userData
        });
    }
    async updateUsers(req,res){
        const info = await this._userModel.updateUsers(req.params.id,req.body);
        console.log(info);
        if(info == 1){
            return res.json({
                success : "se actualizo",
                data: info,
            });
        }else if(info == 0){
            
            return res.json({
                success : "No se actualizo, los datos ya son existentes",
                data: info
            });
        }else{
            return res.json({
                message  : "Algo salio mal"
            })
        }
    }

}
module.exports = UserController;