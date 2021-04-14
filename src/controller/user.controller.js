class UserController{
    constructor({UserModel}){
        this._userModel = UserModel;
    }
    getHome (req,res){
        return res.render(ROOT_PATH_VIEWS+'/links/home',);
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
        const status = await this._userModel.updateUsers(req.params.id,req.body);
        if(status == 1){
            return res.json({success : "se actualizo"});
        }{   
            return res.json({success : "No se actualizo, los datos ya son existentes",});
        }
    };
    async deleteUsers(req,res){
        const status = await this._userModel.deleteUsers(req.params.id);
        console.log(status);
        if(status == 1){
            return res.json({success:"Se Elimino!"})
        }{
            return res.json({info:"Ya se elimino anteriormente"});
        }
    }


}
module.exports = UserController;